---
sidebar_position: 2
id: Create an Automation Account
title: Create an Automation Account
tags: [Azure, Automation, Scripting]
---

## Outline

1. Setup the Resource Group and Automation Account.
2. Setup the Identity for the Automation Account, this is key to running scripts gainst Azure Active Directoy and Office 365 resources. 
3. Create ourselves a Runbook, that sits inside the Automation Account. 
4. Install the relevant modules for the code we want to run.
5. Write ourselves a little script. 
6. Setup a schedule for the Runbook.

## Setup the Resource Group and Automation Account.

:::tip
For naming conventions I'd suggest review [my other article on it, Click here.](../../Articles/Microsoft/Azure%20Resources%20Management/Resource%20Creation%20CheatSheet.md)
:::

1. Navigate to the Azure portal.
2. **Search** for Automation Account in the search bar.
3. Select the **Automation Account** option, **Click create** in the middle of the screen **or Click +Add** in the top left.
4. Fill in the necessary information.
   1. Resource Group Name (Create one if needs be).
   2. Name.
   3. Region
   4. ![Basic info](../../../static/img/Create-an-automation-account/autoacc-Setup-install-001.jpg)

:::caution
Make sure you Select the same region as the resources you want to query, if the account is to query something else, like Azure AD or Office 365, the region is not so important.
:::

5. Select the **Advanced tab** and Select the best option for you.
   1. **System assigned**, is attached to the automation account it lives and dies with the automation account resource.
   2. **User assigned**, is one you setup yourself in Azure AD and can be used by multiple resources and is completely seperate to your automation account.
   3. ![Basic info](../../../static/img/Create-an-automation-account/autoacc-Setup-install-002.jpg)
6. Click **Review + Create** to setup the resource.

:::tip
You'll need to assign Azure ADroles and App Permissions to the System or User managed Identity, Microsoft have decided not to make this easy and it needs to be done via command line, [I've documented a script here to help with this](../../Articles/PowerShell/Assign%20Managed%20Identity%20permissions%20via%20CMDLine.md)
:::

## Setup Automation Runbook

1. Sign in to the Azure portal.
2. **Search for** and Select **Automation Accounts**.
3. On the Automation Accounts page, **Select your Automation account** from the list.
4. From the Automation account, **Select Runbooks** under Process Automation to open the list of runbooks.
5. **Click Create** a runbook and fill in the information below.
   1. Name .
   2. Select its type.
   3. Select the Runtime version
   4.  Enter applicable Description
6.  Click Create to create the runbook.

## Install any Modules

1. Sign in to the Azure portal.
2. **Search for** and Select **Automation Accounts**.
3. On the Automation Accounts page, **Select your Automation account** from the list.
4. From the Automation account, **Select Modules** under Shared Resources.
   1. ![Modules blade location](../../../static/img/Create-an-automation-account/autoacc-Module-install-000001.jpg)
5. In here you can see a list of currently installed modules and you can add more by Clicking on the +Add a module button.

:::tip
You may find that you have to search around a bit for the module that you do actually want and when you do find the module you want, search for the command that you want to use, sometimes the module name is right but the command is missing!

Microsoft Graph is probably the most well rounded module but, it's quite finicky to use, otherwise stick with the Az Command line.
:::

## Test Script

### Enter Script

1. Navigate to your runbook.
2. **Click Edit** at the top.
3. Here you can **enter your script**.
4. On the left-hand side, the most useful thing is the CMDLETS option, which you can use to find commands from the installed modules.

### Test Script

Once your done and ready to test.
1. **Click on Test pane** at the top.
2. **Click Start** in the top left to being running the scrpt.

:::tip In my experience
The test window is not like a command promtp and will not output the commands running or anything at all apart from really confusing errors. Try to build error catching into your script, use the `try, catch` commands to write the errors to the promtp for debugging. More in this in the testing section at the bottom.
:::

I found it really hard to get my head around how this works for some reason. So expect that this may take quite a few tries to get right.

:::caution Storage Account Key
I'm aware that the **storage account key** is needed  for this script, I'm planning on updating this with an example of where you do not need the key, I'll provided another version where it's not needed soon.
:::

```powershell
# Ensures you do not inherit an AzContext in your runbook
Disable-AzContextAutosave -Scope Process | Out-Null

#Storage Account Information 
$StorageACCKey = "Enter storage account key" 
$ContainerName = "Enter the blob container name"

# Connect using a Managed Service Identity
try {
    Connect-AzAccount -Identity
}
catch{
    Write-Output "Unable to login. Aborting."; 
    exit
}

$Users = Get-AzADUser | Select-Object DisplayName, Id, Mail, UserPrincipalName

Write-Output $Users

# Exports the data in the $Users variable into a local environmental variable that will store the information whilst running in the Automation account. 
$Users | Export-Csv "$Env:temp\Users.csv" -notypeinformation

# Creates a new context to enable connection to the storage account. 
$Context = New-AzureStorageContext -StorageAccountName "whautomationfiledump" -StorageAccountKey $StorageACCKey

# This copes the csv file in the $Env:temp/MFAState.csv variable and copies it to the blob. 
Set-AzureStorageBlobContent -Context $Context -Container $ContainerName -File "$Env:temp\Users.csv" -Blob "Users.csv" -force
```

:::tip
If you need to output to a different storage type, such as an Azure files file share, just update the final line in the script and the variable at the top $ContainerName value.
:::

## Setup the Schedule

This has been mostly regurgitated from [this Microsoft link here.](https://learn.microsoft.com/en-us/azure/automation/shared-resources/schedules#create-a-new-schedule-in-the-azure-portal)

1. From your Automation account, on the left-hand pane **Select Schedules** under Shared Resources.
2. Select **Add a schedule**.
3. Select whether the schedule runs once or on a reoccurring schedule by Selecting Once or Recurring.
   1. If you Select Once, **specify a start time** and then **Select Create**.
   2. If you Select Recurring, **specify a start time**. For Recur every, **Select how often** you want the runbook to repeat. Select by hour, day, week, or month.
4. **Press Create** to complete.

:::tip
You must publish the runbook before you can assign the schedule to it.
:::

5. Head back to your Runbook.
6. Select **Link to schedule **at the top.
7. Click the option to **Link a schedule to your runbook**,  **Select the schedule** you created from the list.
8. **Click OK** to complete.

Example schedule below

![Modules blade location](../../../static/img/Create-an-automation-account/autoacc-Schedule-setup-001.jpg)

## Testing

### Testing the script

#### Error handling

The test pane window for the most part will not output useful errors or show you how the script is running. I'd suggest building error handling and status updates into your script if you wish during debugging, it will help immensely.

An example of the `try, catch` command sytax is below.

```powershell
# Connect using a Managed Service Identity
try {
    Connect-AzAccount -Identity
}
catch{
    Write-Output "Unable to login. Aborting."; 
    exit
}
```
I'd also suggest using `write-output` all over the place to confirm progress and variables etc.

> Shout out to the VS code module for Automation Accounts, it'll let you pull down the runbook contents and edit in VsCode and upload it again.

### Confirm the data export

1. Navigate to your **storage account**.
2. Click on the **File shares or Containers option**, wherever you saved your data to.
3. Click into the share\container, **find your file** and Click on the **3 dots** to the right of it.
   1. ![Modules blade location](../../../static/img/Create-an-automation-account/autoacc-testing-exporteddata-002.jpg)
4. **Click View\edit**, it should display a basic output of the file.

## Further notes

- Run As accounts are being deprecated, this method is by far the easiest to use when trying to pull info from AzureAD and Office 365.


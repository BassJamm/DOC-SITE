---
sidebar_position: 2
id: Deploying Resources
title: Deploying Resources
tags: [Bicep, CheatSheet]
---

# Deploying Resources

## Deployment Methods

- PowerShell.
- Azure Cli.
- Azure Web based terminal.
- VSCode extention.

### Requirements

:::tip
You'll need the first for definite and the second one if you plan to deploy from PowerShell.
:::

- [Install the Bicep CLi from here](https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/install?tabs=azure-powershell#install-manually).
- [Install the Az CLi from here](https://learn.microsoft.com/en-us/powershell/azure/install-az-ps?view=azps-9.3.0#installation).

### PowerShell\VsCode

1. Open PowerShell.
2. Set your location, `Set-Location -Path templates`.
3. Run, `Connect-AzAccount`, a browser opens so that you can sign in to your Azure account.
4. Set the default subscription for all of the Azure PowerShell commands that you run in this session.
   1. `$context = Get-AzSubscription -SubscriptionName 'Your Subscription name' Set-AzContext $context`. You can get the subscription ID by running this `Get-AzSubscription` should you need to change context.
5. You can set a default resource group as well for all the following commands to be run against, `Set-AzDefault -ResourceGroupName`.
6. Deploy your template by using the following command, `New-AzResourceGroupDeployment -TemplateFile main.bicep`

All together it looks like this:

```powershell
# Set the default local location, where you bicep file is stored.
Set-location -path templates

# Connect to Azure AD.
Connect-AzAccount

# Set your default subscription context, this is the context where all of your commands will run in unless changed.
$context = Get-AzSubscription -SubscriptionName 'Your Subscription name' Set-AzContext $context

# If you need to change your context, substitute your new context into the command above.
Get-AzSubscription

# You can set your default resource group that your comamnds from then on will run in.
Set-AzDefault -ResourceGroupName EnterYourGroupname
```

### Deploy using AzCmdLet (PowerShell)


`New-AzResourceGroupDeployment`, adds an Azure deployment to a resource group, for example, `New-AzResourceGroupDeployment -TemplateFile main.bicep`.

```powershell
New-AzResourceGroupDeployment -ResourceGroupName "GroupName" -TemplateFile "template location"
```
## Parameters and Variables

### Parameters

A parameter lets you bring in values from outside the template file. You can also create a parameter file, which lists all of the parameters and values they want to use for the deployment.

Variables let you store important information in one place and refer to it throughout the template without having to copy and paste it.

It's usually a good idea to use parameters for things that will change between each deployment, like:

- The names of resources that need to be unique.
- Locations into which to deploy the resources.
- Settings that affect the pricing of resources, like their SKUs, pricing tiers, and instance counts.
- Credentials and information needed to access other systems that aren't defined in the template.

### Variables

Variables are defined in a similar way to parameters, but there are a few differences:

- Use the var keyword to tell Bicep you're declaring a variable.
- You must provide a value for a variable.
- Variables don't need types. Bicep can determine the type based on the value that you set.

### Expressions

When you're writing templates, you often don't want to hard-code values, or even ask for them to be specified in a parameter. Instead, you want to discover values when the template runs. For example, you might want to automatically create a unique name for a resource based on a particular naming strategy your company uses.

#### Resource locations

In Bicep, you can create a parameter called location, then use an expression to set its value:

```bicep
param location string = resourceGroup().location
```
 It uses a function called resourceGroup() that gives you access to information about the resource group the template is being deployed into. In this example, the template uses the location property. It's common to use this approach to deploy your resources into the same Azure region as the resource group.

 ```bicep
 resource appServiceApp 'Microsoft.Web/sites@2022-03-01' = {
  name: appServiceAppName
  location: location
  properties: {
    serverFarmId: appServicePlan.id
    httpsOnly: true
  }
}
```

#### Resource names

Bicep has another function called uniqueString() that comes in handy when you're creating resource names. Let's look at how you might use the uniqueString() function:

```bicep
param storageAccountName string = uniqueString(resourceGroup().id)
````
This parameter's default value uses the `resourceGroup()` function again, like you did when you set the resource location. This time, though, you're getting the ID for a resource group. Here's what a resource group ID looks like:

```output
/subscriptions/3e57e557-826f-460b-8f1c-4ce38fd53b32/resourceGroups/MyResourceGroup
```
The resource group ID includes the Azure subscription ID (3e57e557-826f-460b-8f1c-4ce38fd53b32) and the resource group name (MyResourceGroup). The resource group ID is often a good candidate for a seed value for resource names, because:

Every time you deploy the same resources, they'll go into the same resource group. The `uniqueString()` function will return the same value every time.

If you deploy into two different resource groups in the Azure subscription, the `resourceGroup().id` value will be different, because the resource group names will be different. The `uniqueString()` function will give different values for each set of resources.

If you deploy into two different Azure subscriptions, even if you use the same resource group name, the `resourceGroup().id` value will be different because the Azure subscription ID will be different. The `uniqueString()` function will again give different values for each set of resources.

#### Combined strings

Bicep has a feature called string interpolation that lets you combine strings. Let's see how it works:

```bicep
param storageAccountName string = 'toylaunch${uniqueString(resourceGroup().id)}'
```
The default value for the storageAccountName parameter now has two parts to it:

- `toylaunch` is a hard-coded string that helps anyone who looks at the deployed resource in Azure to understand what the storage account's purpose.
- `${uniqueString(resourceGroup().id)}` is a way of telling Bicep to evaluate the output of the `uniqueString(resourceGroup().id)` function, then concatenate it into the string.

#### Selecting SKUs for resources

You want to make sure you don't spend too much money on your non-production environments. So you decide on some policies:

- In production environments, storage accounts will be deployed at the Standard_GRS (geo-redundant storage) SKU for high resiliency. App Service plans will be deployed at the P2v3 SKU for high performance.
- In non-production environments, storage accounts will be deployed at the Standard_LRS (locally redundant storage) SKU. App Service plans will be deployed at the free F1 SKU.

First, you can specify a parameter that indicates whether the deployment is for a production or non-production environment:

Notice that this code uses some new syntax to specify a list of allowed values for the environmentType parameter.

```bicep
@allowed([
  'nonprod'
  'prod'
])
param environmentType string
```

Next, you can create variables that determine the SKUs to use for the storage account and App Service plan based on the environment:

```bicep
var storageAccountSkuName = (environmentType == 'prod') ? 'Standard_GRS' : 'Standard_LRS'
var appServicePlanSkuName = (environmentType == 'prod') ? 'P2V3' : 'F1'
```

Notice some new syntax here, too. Let's break it down:

- `(environmentType == 'prod')` evaluates to a Boolean (true or false) value, depending on which allowed value is used for `environmentType` parameter.
- `?` is called a ternary operator and it evaluates an if/then statement. The value after the `?` operator is used if the expression is true. If the expression evaluates to false, the value after the colon (:) is used.

These rules can be translated to:

- For the storageAccountSkuName variable, if the `environmentType` parameter is set to prod, then use the Standard_GRS SKU. Otherwise, use the Standard_LRS SKU.
- For the appServicePlanSkuName variable, if the `environmentType` parameter is set to prod, then use the P2V3 SKU and the PremiumV3 tier. Otherwise, use the F1 SKU.

## Exersize

[Add parameters and variables to your Bicep template](https://learn.microsoft.com/en-us/training/modules/build-first-bicep-template/6-exercise-add-parameters-variables-bicep-template?pivots=powershell)

- Add the location and resource name parameters.
- Automatically set the SKUs for each environment type.
- Verify your Bicep file.
- Deploy the updated Bicep template.
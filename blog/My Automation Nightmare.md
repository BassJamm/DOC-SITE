---
slug: My-Automation-Nightmare
title: My Automation Nightmare
description: My Automation Nightmare
author: itjamm
tags: [Azure, Automation Account, PowerShell, Managed Identities]
hide_table_of_contents: false
---
How the hell do I automate a script in Azure?!?

Buckle up this is probably going to be a long one, hopefully, by the end of it, you'll have a good idea of where to start with the problem of automating script in Azure.
<!--truncate-->
You got a few options here for automating scripts in Azure, [check out this post for the other options available to you here](../blog/What%20is%20Automation%20in%20Azure.md),you've got Azure Functions, Logic Apps and Automation accounts. In this case, the scenario is PowerShell scripts and the tool I'm going to setup is an Automation account.

I'll do more on the other options in later posts.

1. Setup the **Resource Group** and **Automation Account**.
2. Setup the **Identity for the Automation Account**, this is key to running scripts against Azure Active Directoy and Office 365 resources.
3. Create ourselves a **Runbook**, that sits inside the Automation Account.
4. **Install the** relevant** modules** for the code we want to run.
5. Write ourselves a little script.
6. Setup **a schedule** for the Runbook.

Estimated time to completion: 1 hour (probably more than that if you're creating the script for the first time!)

Now, doesn't that sounds pretty simple when it's written in a small list like the one above eh? I can tell you now that I ran into random issues all over the place and that 1 hour estimate went straight out the window!

Step 1 flew by, steps 2, 3 and 4 even went by like a flash, I was 15 minutes in and feeling pretty confident with how it was going so far. Considering I'd suggested doing this process at my day job to demonstrate how easy it can be to set up and the time-saving benefits we could reap once it's set up.

Well, I was in for a surprise.........

For step 2 in the list, Setup the Identity for the Automation Account, I chose to use a System-assigned Managed Identity, it sounded right up my street for what I needed to do.

> The service principal is tied to the lifecycle of that Azure resource. When the Azure resource is deleted, Azure automatically deletes the service principal for you.
> By design, only that Azure resource can use this identity to request tokens from Azure AD.
> You authorize the managed identity to have access to one or more services.
>
> Quoted from [Microsotft Doc](https://learn.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/overview#managed-identity-types).

Maybe I am just a bit of an idiot on this one because looking back on this, that doesn't quite sound like what I am after,

Before I knew it, I'm at the point of testing my script, I've followed through the Microsoft docs for how to leverage the System-assigned Managed Identity to connect to Exchange Online and feeling fairly confident althoug skeptical as to 
how minmal that command actually is.

```powershell
$tenantDomain = "mydomain.onmicrosoft.com" # Domain of the tenant the managed identity belongs to 
Connect-ExchangeOnline -ManagedIdentity -Organization $tenantDomain
```
Lo and behold, that failed. What followed was a 3 hour battle with this thing before I realised that the System-assigned Managed Identity does not allow you to connect to Office 365\Azure out of the box, it's designed not to do this.

What ensued was an uphill battle to assign the Exchange Admin role and API permissions via the command line to the System-assigned Managed Identity. I was just about ready to throw it out the window when I decided to try the User-assigned Managed Identity.

This was super easy to set up and is very similar to the previous way I'd done this using a Run As account, literally setup a new App Registration, assign it the roles and API permission you want and add it to the Automation Account, Bob's your Uncle we're off!

Anyway, that whole debacle cost me almost a full working day to get my head around, hopefully, my pain works for your gain...a good example of RTFM and don't force something to work, there's a good chance it's not meant too.

Thanks for reading!
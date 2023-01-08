---
slug: What is Automation in Azure
title: What is Automation in Azure?
author: itjamm
tags: [BlogPost, Automation]
---

Automation is needed, almost required, in three general areas of cloud operations;
<!--truncate-->
**Deployment and management of resources** - To deliver a repeatable and consistent infrastructure.

**Response** - Event-based automation can be used to diagnose and resolve issues within the on-prem and off-prem environments.

**Orchestrate** - Orchestrate and integrate your automation with other Azure or third party services and products.

Using any one of the three above can be a huge improvement to the working quality of life of the team and can save huge amounts of time if implemented well. Firstly you need to get your team on board with this approach, which can present its own challenge.

## 2. Pros and Cons of the Automation Approach

I may well be a little biased here but, in my experience, if the status quo is to prefer manual tasks. It will be hard going initially to get others to see the light that is automating away "their" jobs. I use quote marks there because, the typical Infrastructure role is changing rapidly.

### 2.1. Pros

- Reduce time to perform an action.
- Reduce risk in performing the action.
- Freeing up staff from the burden of manual tasks.
- Standardisation of tasks.

### 2.2. Cons

- Time consuming to implement in the first instance.
- Staff need training on the automation methods.
- You may encounter resistance when it comes to changing the status quo.

## 3. Tools at your disposal

A very brief overview of the various tools that can be used, my first suggestion is to investigate the use of PowerShell and RunBooks; they've always seemed to make the most sense to start with.

### 3.1. PowerShell

This is an incredibly versatile tool that can be used to manage almost any resource on-prem and in the cloud. I'd suggest digging into the [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/) and also familiarising yourself with the Office 365 modules too ([SharePoint Online](https://learn.microsoft.com/en-us/powershell/sharepoint/?view=sharepoint-ps), [Exchange Online](https://learn.microsoft.com/en-us/powershell/exchange/exchange-online-powershell-v2?view=exchange-ps), [Microsoft Teams](https://learn.microsoft.com/en-us/microsoftteams/teams-powershell-overview), [Azure Active Directory](https://learn.microsoft.com/en-us/powershell/azure/active-directory/overview?view=azureadps-2.0), more in-depth KBs and posts to follow on these.

You aren't just restricted to using PowerShell from your machine running the Windows OS, you can also use an Automation Account with a PowerShell runbook, I'll upload a KB to get you started soon!

Learn more about PowerShell [here](https://learn.microsoft.com/en-us/powershell/scripting/overview?view=powershell-7.3).

### 3.2. Azure Bicep

Bicep is a declarative language, used to deploy Azure resources. In a Bicep file, you define what you want to deploy to Azure and then use that file to repeatedly deploy your infrastructure. It's a great tool to ensure consistency in your environments although, this is a separate language to learn and only applies to Azure.

You can learn more about Bicep [here](https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview?tabs=bicep).

### 3.3. Azure Logic Apps

Logic Apps is a cloud platform\service where you can create and run workflows in Azure (there's an Office 365 version with a cut-down toolset called Power Automate which is also really good). The major plus of using these is that they require little to no code at all to set up, it's all visual.

Logic Apps integrate with most Office 365 and Azure services making them versatile, easy to maintain and accessible to people with less knowledge of coding.

Learn more about Logic Apps [here](https://learn.microsoft.com/en-us/azure/logic-apps/logic-apps-overview).

Thanks for reading!

I hope that gives you some idea of what options there are for automation in Azure, I'll be following up with another post of suggested processes you can automate both from suggestions online and from my experience.

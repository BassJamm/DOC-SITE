"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"My-Automation-Nightmare","metadata":{"permalink":"/blog/My-Automation-Nightmare","source":"@site/blog/Jan-2023/My Automation Nightmare.md","title":"My Automation Nightmare","description":"My Automation Nightmare","date":"2023-01-07T00:00:00.000Z","formattedDate":"January 7, 2023","tags":[{"label":"Azure","permalink":"/blog/tags/azure"},{"label":"Automation Account","permalink":"/blog/tags/automation-account"},{"label":"PowerShell","permalink":"/blog/tags/power-shell"},{"label":"Managed Identities","permalink":"/blog/tags/managed-identities"}],"readingTime":3.67,"hasTruncateMarker":true,"authors":[{"name":"it jamm","title":"Site Admin","url":"https://github.com/ITJamm","imageURL":"https://avatars.githubusercontent.com/u/75690476?v=4","key":"itjamm"}],"frontMatter":{"slug":"My-Automation-Nightmare","title":"My Automation Nightmare","description":"My Automation Nightmare","date":"01/07/2023","authors":"itjamm","draft":false,"tags":["Azure","Automation Account","PowerShell","Managed Identities"],"keywords":["Azure","Automation","PowerShell","Managed Identities"],"hide_table_of_contents":false},"nextItem":{"title":"What can you Automate","permalink":"/blog/What can you Automate"}},"content":"## How the hell do I automate a script in Azure?!?\\n\\nBuckle up, this is probably going to be a long one, hopefully, by the end of it, you\'ll have a good idea of where to start with the problem of automating script in Azure.\\n\x3c!--truncate--\x3e\\nYou got a few options here for automating scripts in Azure, [check out this post for the other options available to you here](../blog//dec-2022/../../Dec-2022/What%20is%20Automation%20in%20Azure.md),you\'ve got Azure Functions, Logic Apps and Automation accounts. In this case, the scenario is PowerShell scripts and the tool I\'m going to setup is an Automation account.\\n\\n:::note Document incoming\\n\\nCheck out the full tech doc for the Automation Account and my script example in the Docs area of the site. Annoyingly I cannot link it directly becuase of the way Docusarus works (not digging on you but, that is frustrating!).\\n\\nUpdate: The document is still in the works, collecting all my info!\\n\\n:::\\n\\nI\'ll do more on the other options in later posts.\\n\\n1. Setup the **Resource Group** and **Automation Account**.\\n2. Setup the **Identity for the Automation Account**, this is key to running scripts against Azure Active Directoy and Office 365 resources.\\n3. Create ourselves a **Runbook**, that sits inside the Automation Account.\\n4. **Install the** relevant** modules** for the code we want to run.\\n5. Write ourselves a little script.\\n6. Setup **a schedule** for the Runbook.\\n\\nEstimated time to completion: 1 hour (probably more than that if you\'re creating the script for the first time!)\\n\\nNow, that sounds pretty simple when it\'s written in a small list like the one above eh? I can tell you now that I ran into random issues all over the place and, that 1 hour estimate went straight out the window!\\n\\nStep 1 flew by, steps 2, 3 and 4 went by like a flash, I was 15 minutes in and feeling pretty confident with how it was going so far. Considering I\'d suggested doing this process at my day job to demonstrate how easy it can be to set up and the time-saving benefits we could reap once it\'s set up.\\n\\nWell, I was in for a surprise.........\\n\\nFor step 2 in the list, Setup the Identity for the Automation Account, I chose to use a System-assigned Managed Identity, it sounded right up my street for what I needed to do.\\n\\n> The service principal is tied to the lifecycle of that Azure resource. When the Azure resource is deleted, Azure automatically deletes the service principal for you.\\n> By design, only that Azure resource can use this identity to request tokens from Azure AD.\\n> You authorize the managed identity to have access to one or more services.\\n>\\n> Quoted from [Microsotft Doc](https://learn.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/overview#managed-identity-types).\\n\\nMaybe I am just a bit of an idiot on this one because looking back on this, that doesn\'t sound quite right, although the user assigned managed identity also didn\'t sound much different to me either......\\n\\nBefore I knew it, I\'m at the point of testing my script, I\'ve followed through the Microsoft docs for how to leverage the System-assigned Managed Identity to connect to Exchange Online and feeling fairly confident althoug skeptical as to \\nhow minmal that command actually is.\\n\\n```powershell\\n$tenantDomain = \\"mydomain.onmicrosoft.com\\" # Domain of the tenant the managed identity belongs to \\nConnect-ExchangeOnline -ManagedIdentity -Organization $tenantDomain\\n```\\nLo and behold, that failed. What followed was a 3 hour battle with this thing before I realised that the System-assigned Managed Identity does not allow you to connect to Office 365\\\\Azure out of the box, it\'s designed not to do this.\\n\\nWhat ensued was an uphill battle to assign the Exchange Admin role and API permissions via the command line to the System-assigned Managed Identity. I was just about ready to throw it out the window when I crumbled and deciced to use a service account (added credentials to the Automation Account) to get it up and running\\n\\nThis was dissappointing on several levels, I really wanted to get this setup to not use any credentials, I guess that is a task for another day now, as for demonstration purposes, it works a treat!\\n\\nAnyway, that whole debacle cost me almost a full working day to get my head around, hopefully, my pain works for your gain...a good example of RTFM and don\'t force something to work, there\'s a good chance it\'s not meant too.\\n\\nThanks for reading!"},{"id":"What can you Automate","metadata":{"permalink":"/blog/What can you Automate","source":"@site/blog/Dec-2022/What can you Automate.md","title":"What can you Automate","description":"What can be automated in Azure?","date":"2023-01-03T16:07:22.000Z","formattedDate":"January 3, 2023","tags":[{"label":"Blogpost","permalink":"/blog/tags/blogpost"},{"label":"Automation","permalink":"/blog/tags/automation"}],"readingTime":2.64,"hasTruncateMarker":true,"authors":[{"name":"itjamm"}],"frontMatter":{"slug":"What can you Automate","title":"What can you Automate","description":"What can be automated in Azure?","author":"itjamm","tags":["Blogpost","Automation"],"hide_table_of_contents":false},"prevItem":{"title":"My Automation Nightmare","permalink":"/blog/My-Automation-Nightmare"},"nextItem":{"title":"What is Automation in Azure?","permalink":"/blog/What is Automation in Azure"}},"content":"Some suggestions on what tasks could be automated in Azure through a mentioned method.\\n\x3c!--truncate--\x3e\\nThe information below is based off of Microsoft Articles and my expeience both in work and in personal projects. I\'ll not be digging into the items mentioned on the web link below, instead trying to offer items from my experience instead.\\n\\nCheck out the Microsoft Doc, [here](https://learn.microsoft.com/en-us/azure/automation/overview#common-scenarios).\\n\\n## 1. Joiner, Mover and Leaver Processes\\n\\nIf you\'re or, have worked in a Service Desk role level 1 upwards, you\'ll be well aware of the pain that is administering user accounts. The amount of time spent correcting someone\'s first or last name is crazy!\\n\\nIn my experience, we squashed a lot of the mistakes by automating the process as much as possible. I\'ve done this using PowerShell and getting the Service Desk staff to submit the new starter or leaver data into the form. I\'ll upload this script to the Github repo, please note that the script is targeted at hybrid environments.\\n\\n## 2. Certificate & Secret Management for Azure AD\\n\\nAzure AD is a wonderful tool but, it can be super complex to manage and keep track of what\'s going on within it. One such task is making sure that none of the App Registrations has a soon-to-expire certificate or secret.\\n\\nThe best solution to this is tracking your certs in some fashion however, whatever solution you chose to use, if someone adds a new App Registration then that may not be picked up. \\n\\nLink to a script created by Microsoft, [here](https://github.com/ITJamm/Automation/blob/main/PowerShell/Azure%20Active%20Directory/Application-Secrets-%26-Certificates.ps1).\\n\\n## 3. Reporting\\n\\nSomething that has always come up is keeping an accurate asset inventory for Azure AD joined devices as well as all of the other types captured within Intune.\\n\\nSince Intune does not have its own PowerShell module (I think, [I did find this however from Microsoft\'s Github!](https://github.com/microsoft/Intune-PowerShell-SDK#Example-usage)), you\'d need to rely on one of the Microsoft portals for a report, which isn\'t too annoying to get in real terms.\\n\\nAn automated method would be to create a script to connect to Azure AD, retrieve device information and dump this out into Excel for someone to review. You could host this in an Automation account in Azure to run automatically.\\n\\n## 4. Patch Management\\n\\nAt the moment, you can patch your VM estate using an Automation account rather than relying on running your own WSUS server, of course, if you want to control the flow better in line with any on-prem infrastructure that\'d be the way to go; I\'d still suggest letting Microsoft patch them though, it\'s remarkably good and a great quality of life update for your engineers!\\n\\nOn a side note, I believe Microsoft has just released Update management centre which is its own service in Azure to replace the Automation account method mentioned above.\\n\\nLearn more about Update Management Centre,[here](https://learn.microsoft.com/en-gb/azure/update-center/).\\n\\n## 5. Configuration Management\\n\\nAutomation of resource creation and also management is a great use of this technology. As I\'ve mentioned previously, Bicep and PowerShell will let you do this, along with Terraform which works well with Azure.\\n\\nOther languages will let you do this but, I have only used the three mentioned above.\\n\\nThanks for reading!"},{"id":"What is Automation in Azure","metadata":{"permalink":"/blog/What is Automation in Azure","source":"@site/blog/Dec-2022/What is Automation in Azure.md","title":"What is Automation in Azure?","description":"Automation is needed, almost required, in three general areas of cloud operations;","date":"2023-01-03T16:03:10.000Z","formattedDate":"January 3, 2023","tags":[{"label":"BlogPost","permalink":"/blog/tags/blog-post"},{"label":"Automation","permalink":"/blog/tags/automation"}],"readingTime":2.85,"hasTruncateMarker":true,"authors":[{"name":"itjamm"}],"frontMatter":{"slug":"What is Automation in Azure","title":"What is Automation in Azure?","author":"itjamm","tags":["BlogPost","Automation"]},"prevItem":{"title":"What can you Automate","permalink":"/blog/What can you Automate"},"nextItem":{"title":"Azure Permission & Resource Management","permalink":"/blog/Azure Permission & Resource Management"}},"content":"Automation is needed, almost required, in three general areas of cloud operations;\\n\x3c!--truncate--\x3e\\n**Deployment and management of resources** - To deliver a repeatable and consistent infrastructure.\\n\\n**Response** - Event-based automation can be used to diagnose and resolve issues within the on-prem and off-prem environments.\\n\\n**Orchestrate** - Orchestrate and integrate your automation with other Azure or third party services and products.\\n\\nUsing any one of the three above can be a huge improvement to the working quality of life of the team and can save huge amounts of time if implemented well. Firstly you need to get your team on board with this approach, which can present its own challenge.\\n\\n## 2. Pros and Cons of the Automation Approach\\n\\nI may well be a little biased here but, in my experience, if the status quo is to prefer manual tasks. It will be hard going initially to get others to see the light that is automating away \\"their\\" jobs. I use quote marks there because, the typical Infrastructure role is changing rapidly.\\n\\n### 2.1. Pros\\n\\n- Reduce time to perform an action.\\n- Reduce risk in performing the action.\\n- Freeing up staff from the burden of manual tasks.\\n- Standardisation of tasks.\\n\\n### 2.2. Cons\\n\\n- Time consuming to implement in the first instance.\\n- Staff need training on the automation methods.\\n- You may encounter resistance when it comes to changing the status quo.\\n\\n## 3. Tools at your disposal\\n\\nA very brief overview of the various tools that can be used, my first suggestion is to investigate the use of PowerShell and RunBooks; they\'ve always seemed to make the most sense to start with.\\n\\n### 3.1. PowerShell\\n\\nThis is an incredibly versatile tool that can be used to manage almost any resource on-prem and in the cloud. I\'d suggest digging into the [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/) and also familiarising yourself with the Office 365 modules too ([SharePoint Online](https://learn.microsoft.com/en-us/powershell/sharepoint/?view=sharepoint-ps), [Exchange Online](https://learn.microsoft.com/en-us/powershell/exchange/exchange-online-powershell-v2?view=exchange-ps), [Microsoft Teams](https://learn.microsoft.com/en-us/microsoftteams/teams-powershell-overview), [Azure Active Directory](https://learn.microsoft.com/en-us/powershell/azure/active-directory/overview?view=azureadps-2.0), more in-depth KBs and posts to follow on these.\\n\\nYou aren\'t just restricted to using PowerShell from your machine running the Windows OS, you can also use an Automation Account with a PowerShell runbook, I\'ll upload a KB to get you started soon!\\n\\nLearn more about PowerShell [here](https://learn.microsoft.com/en-us/powershell/scripting/overview?view=powershell-7.3).\\n\\n### 3.2. Azure Bicep\\n\\nBicep is a declarative language, used to deploy Azure resources. In a Bicep file, you define what you want to deploy to Azure and then use that file to repeatedly deploy your infrastructure. It\'s a great tool to ensure consistency in your environments although, this is a separate language to learn and only applies to Azure.\\n\\nYou can learn more about Bicep [here](https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview?tabs=bicep).\\n\\n### 3.3. Azure Logic Apps\\n\\nLogic Apps is a cloud platform\\\\service where you can create and run workflows in Azure (there\'s an Office 365 version with a cut-down toolset called Power Automate which is also really good). The major plus of using these is that they require little to no code at all to set up, it\'s all visual.\\n\\nLogic Apps integrate with most Office 365 and Azure services making them versatile, easy to maintain and accessible to people with less knowledge of coding.\\n\\nLearn more about Logic Apps [here](https://learn.microsoft.com/en-us/azure/logic-apps/logic-apps-overview).\\n\\nThanks for reading!\\n\\nI hope that gives you some idea of what options there are for automation in Azure, I\'ll be following up with another post of suggested processes you can automate both from suggestions online and from my experience."},{"id":"Azure Permission & Resource Management","metadata":{"permalink":"/blog/Azure Permission & Resource Management","source":"@site/blog/Dec-2022/Azure Permission & Resource Management.md","title":"Azure Permission & Resource Management","description":"Something that can be quite annoying to grasp are the varying permission levels and roles involved in the Microsoft Cloud platforms.","date":"2023-01-03T13:18:40.000Z","formattedDate":"January 3, 2023","tags":[{"label":"KB","permalink":"/blog/tags/kb"},{"label":"Azure","permalink":"/blog/tags/azure"},{"label":"Permissions","permalink":"/blog/tags/permissions"}],"readingTime":3.225,"hasTruncateMarker":true,"authors":[{"name":"itjamm"}],"frontMatter":{"slug":"Azure Permission & Resource Management","title":"Azure Permission & Resource Management","author":"itjamm","tags":["KB","Azure","Permissions"]},"prevItem":{"title":"What is Automation in Azure?","permalink":"/blog/What is Automation in Azure"}},"content":"Something that can be quite annoying to grasp are the varying permission levels and roles involved in the Microsoft Cloud platforms.\\n\\n\x3c!--truncate--\x3e\\nFor the most part, us techies will learn from the group up starting from on-prem NTFS\\\\Share permissions, to have then to learn Office 365 roles.\\n\\nNow we\'ve got those two down, time to shove another layer on top which is the permissions inside Azure, hopefully the below can simplify this for you.\\n\\n## 1. The 4 management levels\\n\\nThe below is nothing original by the way, I\'ve lifted it and re-written the concepts into another format from a Microsoft docs article here, you may prefer their version.\\n\\n[Organize your Azure resources effectively](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-setup-guide/organize-resources)\\n\\n**Management group**s help to manage access via policy and compliance over multiple subscriptions. When a subscription is part of a management group, it\'ll automatically inherit all conditionas\\\\settings setup in the management group.\\n\\n**Subscriptions** logically associate permissions with resources they create. Each individual subscription has limits\\\\quotas regarding the amount of resources it can create\\\\use. Subscriptions also help to organise costs.\\n\\n**Resource Groups** are logical containers, where you can deploy Azure resources to; you could think of them being along the lines of Folders. You can also apply tags to help better manage resources and what they\'re for.\\n\\n**Resources** are instances of services that you can create.\\n\\n## 2. Managing Access to resources\\n\\nWe should always plan for the least privileges required to allow a team to work, the permission model in Azure is designed to allow this however, I\'d say it is so granular that it generates more work that necessary in most cases.\\n\\nHere\'s a basic list from my experience setting up a permission model in the past; it covers a service desk team.\\n\\n- Call Agent team - No access to Azure resources.\\n- Level 1, 2 and 3 teams - Reader access at the Subscription level, providing Contributor role at the Resource Group or Resource level where appropriate.\\n- Infrastructure - If the team also performs security functions, I would suggest the Contributor role be assigned of at the Subscription Level where appropriate and to assign the Owner role at the resource group level where the Infrastructure they \\"own\\" is situated.\\n\\nPermission elevation controls and experience levels should be taken into account. In previous companies, I\'d trust the L2 team to have the same access as L3 and, in some cases I\'d not even consider it!\\n\\nYou can also control Service Desk team access using Change Control. Asking them to justify their access requirements via a change process not only allows others to check what they\'re doing, it could also show that they do not need to access rights in the first place.\\n\\nSpeaking from experience, I\'d highly recommend trusting your Infrastructure team to have the Contributor role at the Subscription level where possible. It will make a lot of difference to all teams \\"quality of life\\" if they\'ve access to someone who can carry out actions they cannot.\\n\\n## 3. Resource tagging\\n\\nTags can be an absolute godsent and can help you to quickly identify your resources and resource groups. You apply tags to your Azure resources and resource groups to logically organize them into categories.  \\n\\nTags can include context about the resource\'s associated workload or application, operational requirements, and ownership information.\\n\\nSome suggested uses for tags;\\n**Metadata and documentation**, Admins can apply a tag to all resources matching a specific workload or project.\\n**Automation**, you can target a tag for scripts etc.\\n**Cost analysis**, this is the most common use case that I\'ve come across for tags.\\n\\nEach resource or resource group can have a maximum of 50 tag name and value pairs. This limitation only applies to tags directly applied to the resource group or resource.\\n\\nThat turned out to be a little longer than I\'d hoped for, with any luck it\'ll be of some use."}]}')}}]);
---
slug: What can you Automate
title: What can you Automate
description: What can be automated in Azure?
author: itjamm
tags: [Blogpost, Automation]
hide_table_of_contents: false
---

Some suggestions on what tasks could be automated in Azure through a mentioned method.
<!--truncate-->
The information below is based off of Microsoft Articles and my expeience both in work and in personal projects. I'll not be digging into the items mentioned on the web link below, instead trying to offer items from my experience instead.

Check out the Microsoft Doc, [here](https://learn.microsoft.com/en-us/azure/automation/overview#common-scenarios).

##Joiner, Mover and Leaver Processes

If you're or, have worked in a Service Desk role level 1 upwards, you'll be well aware of the pain that is administering user accounts. The amount of time spent correcting someone's first or last name is crazy!

In my experience, we squashed a lot of the mistakes by automating the process as much as possible. I've done this using PowerShell and getting the Service Desk staff to submit the new starter or leaver data into the form. I'll upload this script to the Github repo, please note that the script is targeted at hybrid environments.

## Certificate & Secret Management for Azure AD

Azure AD is a wonderful tool but, it can be super complex to manage and keep track of what's going on within it. One such task is making sure that none of the App Registrations has a soon-to-expire certificate or secret.

The best solution to this is tracking your certs in some fashion however, whatever solution you chose to use, if someone adds a new App Registration then that may not be picked up. 

Link to a script created by Microsoft, [here](https://github.com/ITJamm/Automation/blob/main/PowerShell/Azure%20Active%20Directory/Application-Secrets-%26-Certificates.ps1).

## Reporting

Something that has always come up is keeping an accurate asset inventory for Azure AD joined devices as well as all of the other types captured within Intune.

Since Intune does not have its own PowerShell module (I think, [I did find this however from Microsoft's Github!](https://github.com/microsoft/Intune-PowerShell-SDK#Example-usage)), you'd need to rely on one of the Microsoft portals for a report, which isn't too annoying to get in real terms.

An automated method would be to create a script to connect to Azure AD, retrieve device information and dump this out into Excel for someone to review. You could host this in an Automation account in Azure to run automatically.

## Patch Management

At the moment, you can patch your VM estate using an Automation account rather than relying on running your own WSUS server, of course, if you want to control the flow better in line with any on-prem infrastructure that'd be the way to go; I'd still suggest letting Microsoft patch them though, it's remarkably good and a great quality of life update for your engineers!

On a side note, I believe Microsoft has just released Update management centre which is its own service in Azure to replace the Automation account method mentioned above.

Learn more about Update Management Centre,[here](https://learn.microsoft.com/en-gb/azure/update-center/).

## Configuration Management

Automation of resource creation and also management is a great use of this technology. As I've mentioned previously, Bicep and PowerShell will let you do this, along with Terraform which works well with Azure.

Other languages will let you do this but, I have only used the three mentioned above.

Thanks for reading!
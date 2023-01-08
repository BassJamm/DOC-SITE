---
slug: Azure Permission & Resource Management
title: Azure Permission & Resource Management
author: itjamm
tags: [KB, Azure, Permissions]
---


Something that can be quite annoying to grasp are the varying permission levels and roles involved in the Microsoft Cloud platforms.

<!--truncate-->
For the most part, us techies will learn from the group up starting from on-prem NTFS\Share permissions, to have then to learn Office 365 roles.

Now we've got those two down, time to shove another layer on top which is the permissions inside Azure, hopefully the below can simplify this for you.

## 1. The 4 management levels

The below is nothing original by the way, I've lifted it and re-written the concepts into another format from a Microsoft docs article here, you may prefer their version.

[Organize your Azure resources effectively](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-setup-guide/organize-resources)

**Management group**s help to manage access via policy and compliance over multiple subscriptions. When a subscription is part of a management group, it'll automatically inherit all conditionas\settings setup in the management group.

**Subscriptions** logically associate permissions with resources they create. Each individual subscription has limits\quotas regarding the amount of resources it can create\use. Subscriptions also help to organise costs.

**Resource Groups** are logical containers, where you can deploy Azure resources to; you could think of them being along the lines of Folders. You can also apply tags to help better manage resources and what they're for.

**Resources** are instances of services that you can create.

## 2. Managing Access to resources

We should always plan for the least privileges required to allow a team to work, the permission model in Azure is designed to allow this however, I'd say it is so granular that it generates more work that necessary in most cases.

Here's a basic list from my experience setting up a permission model in the past; it covers a service desk team.

- Call Agent team - No access to Azure resources.
- Level 1, 2 and 3 teams - Reader access at the Subscription level, providing Contributor role at the Resource Group or Resource level where appropriate.
- Infrastructure - If the team also performs security functions, I would suggest the Contributor role be assigned of at the Subscription Level where appropriate and to assign the Owner role at the resource group level where the Infrastructure they "own" is situated.

Permission elevation controls and experience levels should be taken into account. In previous companies, I'd trust the L2 team to have the same access as L3 and, in some cases I'd not even consider it!

You can also control Service Desk team access using Change Control. Asking them to justify their access requirements via a change process not only allows others to check what they're doing, it could also show that they do not need to access rights in the first place.

Speaking from experience, I'd highly recommend trusting your Infrastructure team to have the Contributor role at the Subscription level where possible. It will make a lot of difference to all teams "quality of life" if they've access to someone who can carry out actions they cannot.

## 3. Resource tagging

Tags can be an absolute godsent and can help you to quickly identify your resources and resource groups. You apply tags to your Azure resources and resource groups to logically organize them into categories.  

Tags can include context about the resource's associated workload or application, operational requirements, and ownership information.

Some suggested uses for tags;
**Metadata and documentation**, Admins can apply a tag to all resources matching a specific workload or project.
**Automation**, you can target a tag for scripts etc.
**Cost analysis**, this is the most common use case that I've come across for tags.

Each resource or resource group can have a maximum of 50 tag name and value pairs. This limitation only applies to tags directly applied to the resource group or resource.

That turned out to be a little longer than I'd hoped for, with any luck it'll be of some use.

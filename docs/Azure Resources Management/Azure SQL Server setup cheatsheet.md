---
sidebar_position: 2
id: Azure SQL Server setup cheatsheet
title: Azure SQL Server setup cheatsheet
tags: [Azure]
---

## 1. Before you begin

- If the customer does not specify, work with them to ascertain best size\shape of VM.
- If required run through the cost and dependancies on the build.
- Estimate build time and get approval to create the resources.
- Build the resources.
- Create Subscription.
- Created Resources Group.
- Create Instance.
- Setup Monitoring and Alerts.
- Setup backups if needed.
- Enable any security features required.
- Testing.
- Pass back to customer.

## 2. Suggested pre-requisit information gathering

If the customer does not know the answer the questions below, we should define as much as possible to make our lives easier.

1. **Intended workload**, could the instance be reduced to a PaaS offering, to reduce managemnt and cost overheads.
2. **Chose the shape and size of instance**, if it must stay as a IaaS offering, you can build full SQL server instance on a Windows VM, this will be the most costly. There isAzure SQL server as a PaaS offering though and and intermediary option too.
3. **Networking**, does a new vNet need creating or will it be added to a current one.
4. **Resiliancy of the instance**, does it need to be replecatied across DCs or Regions?
5. **Backups**, any specific needs for backups.
6. **Cost**, is this authorised already or do you need to provide some cost estimations, [Azure Pricing calculator](https://azure.microsoft.com/en-gb/pricing/calculator/) is here. Advise the customer that additional shape and size changes may incurr costs down the line. Suggest reservations if the workload is not to change.
7. **Subscription**, where resources will be placed or, will a new one need to be created.
8. **Resource Group**, is there one to be created or does one exist. Resources should be grouped together by life cycle.
9. **Tags**, tags are useful for billing, reporting and segregating resources. [Suggested naming conventions here](https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/decision-guides/resource-tagging/?toc=%2Fazure%2Fazure-resource-manager%2Fmanagement%2Ftoc.json).

## 3. Recommendations for building the instance

### 3.1. Subscription

**Name this appropriately** based on it's purpose.

- If it hosts production resources, name it Prodiction.
- If it hosts developement resources, name it Developement.
- If it hosts resources for a particular application or solution, name it after that app or solution.

### 3.2. Resource Group

- Resource Groups are logical containers that group resources together.
- **Resources within** Resource Groups should **share the same** product **life cycle**.
- Many resources **cannot be moved between groups** after they've been created.

**Naming** a RG **is permenant and cannot be amended** after the fact, base the name on what it is hosting, I suggest added something for the location of the RG as well.

Examplesbelow:

-  "Company"-"environment type"-"Region"-"Resource information".

> Note that Resource Groups and subscriptions can have upper and lower case, instances\apps are all lower-case only.

###  3.3. SQL Server Creation

#### 3.3.1. Basics

1. Subscription to host resources.
2. Resource Group name.
3. Resource Name.
4. Region (Location).
5. Authentication method. Where apprproate, use both SQL and Azure AD, that covers both sides unless the user specifies otherwise.

#### 3.3.2. Networking

Allow Azure services and resources to acces this server.

> The defaul rule will allow Azure resources from the customer tenant and all other Azure tenants to reach this resource.

### 3.4. Azure SQL Database Creation

This resource sits within the Azure SQL Server above in some cases, if this is asked for, you do not need to answer the above questions 1-4 again.

If the customer does not know, we should define where this sits. By Microsoft recomendation, resrouces should sit in a resource group together than share the same life cycle.

> Names must be in lowercase, Azure does not support uppercase names.

## 4. Monitoring

- This area needs updating.
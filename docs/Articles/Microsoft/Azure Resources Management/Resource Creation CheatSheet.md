---
sidebar_position: 3
id: Resource Creation Cheatsheet
title: Resource Creation Cheatsheet
tags: [Azure, Resource Creation, CheatSheet]
---

[Microsoft link - Azure SQL documentation](https://learn.microsoft.com/en-gb/azure/azure-sql/?view=azuresql)

## Before you begin

:::info

This information is down to personal experience and issues that I have come across when dealing with a customer requesting a new resource.

:::

1. **Define the workload**, this will help understand the size of the resource needed, consider growth over time as well.
2. **Costing**, be prepared to provide estimates and justify the need to your solution; pay as you go is all well and good but, it can mount up quick.
3. **Consider dependancies** before you starting the build, for example:
   1. Do you need a new Subscription?
   2. Do you need to create a Resources Group?
   3. **Network Connectivity**, do you need a private endpoint and network connectivity?
      1. Do you need people to connect externally to the resources?
   4. **Monitoring and Alerting**, what needs setting,?
   5. **Backups**, do you need them\it?
   6. **Security**, what features need to be enabled?
   7. **Resiliency**, does the resource and depedant resources need to be resilient?
   8.  **Tags**, tags are useful for billing, reporting and segregating resources. [Suggested naming conventions here](https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/decision-guides/resource-tagging/?toc=%2Fazure%2Fazure-resource-manager%2Fmanagement%2Ftoc.json).
4. **Data Sovereignty**, no good setting up resiliency to a region outside of the customer location if it's not allowed to be there!
5. **Estimate build time** and get approval to create any resources.
6. **Testing**, consider as well, how you will test out the build.
   1.  Do you have test data to migrate as part of this work?

## Other recommendations

### Naming Conventions

:::tip

The below bullet points apply to the Subsciption, Resource Group and the SQL resource. Almost nothing in Azure can be renamed after creation. You'll have to delete and start over.

Names must be in lowercase, Azure does not support uppercase names.

:::

**Name objects appropriately** based on it's purpose.

- If it hosts production resources, include Production\Prod in the name.
- If it hosts developement resources, include Development\Dev in the name.
- If it hosts resources for a particular application or solution, include that app or solution name.
- Example naming convention, "Company"-"environment type"-"Region"-"Resource information".

### Size and Sku

- **Triple check the sizes available** using the Azure portal, the Azure pricing calculator has no awareness of what is actaully available in a region.

### Resource grouping

- **Resources within** Resource Groups should **share the same** product **life cycle**.
- Many resources **cannot be moved between groups** after they've been created.
- Example naming convention, "Company"-"environment type"-"Region"-"Resource information".

###  Monitoring

- You can create Alerts in the Azure portal much like any other resource. You'll be required to pick from the "suggested" metrics. [Microsoft docs link - Create alerts for Azure SQL Database](https://learn.microsoft.com/en-gb/azure/azure-sql/database/alerts-insights-configure-portal?view=azuresql).
- You can monitor SQL Databases with Azure Monitor, [Microsoft docs link - Monitor Azure SQL Database with Azure Monitor](https://learn.microsoft.com/en-gb/azure/azure-sql/database/monitoring-sql-database-azure-monitor?view=azuresql).

## Resource Specific Notes

### Azure SQL Server and Database

- **Authentication method**, where apprproate, use both SQL and Azure AD, that covers both sides unless the user specifies otherwise.
- **Network Connectivity**, this can be a bit of a mess for SQL servers and Databases in Azure, I'd suggest digging into this a bit to see what fits best for your deplyment. By default, the databse\sql server will be contactable by any resource in your Azure tenant provided it's not on a VNet already.
  - External connectivity can be done through the network settings on the resource as is basically direct connect if no Private endpoint is setup.
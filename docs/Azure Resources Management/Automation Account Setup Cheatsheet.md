---
sidebar_position: 5
id: Automation Account Setup Cheatsheet
title: Automation Account Setup Cheatsheet
tags: [Azure]
---

[Microsoft doc - Create a standalone Azure Automation account](https://learn.microsoft.com/en-gb/azure/automation/automation-create-standalone-account?tabs=azureportal).

## 1. Creating the Automation Account

### 1.1. Considerations

- Naming convention.
- Purpose of the Automation Account.
- Will it need a Managed identity?

**Naming conventions** matter in Azure because you cannot change the name after the resource has been created, suggsted naming convention would be `aa-<company name>-<region>-<workload type>-<resource>-<number>`, this would translate to `aa-wh-uks-prod-automationacc-001`.

The same can be said of the Resource Group, a suggested name could be `rg-wh-uks-prod-Automation-001`.

**Purpose of the resource** is also important, are you going to use the resource for patch management, is it being specifically used for a particalar solution or workload? 

> Importantly, will it be created and possibly deleted along with other resources; in which case it can live in the same resource group as those resources.

**A Managed identity** will be needed should the Automation Account need to authenticate to carry out any tasks. It will also be tied to the lifecycle of the Automation account.

### 1.2. Creation steps

[Microsoft doc - Create a new Automation account in the Azure portal](https://learn.microsoft.com/en-gb/azure/automation/automation-create-standalone-account?tabs=azureportal#create-a-new-automation-account-in-the-azure-portal).

#### 1.2.1. Using a system-assigned managed identity

[Microsoft doc - Using a system-assigned managed identity for an Azure Automation account](https://learn.microsoft.com/en-gb/azure/automation/enable-managed-identity-for-automation).

## 2. Notes

### 2.1. Managed Identity

- You'll find the managed Identity itself under **Enterprise App Registrations**.
- You cannot assign Azure AD or Microsoft Graph roles to the System Managed Identity through the GUI, you must do this from command line. [See here for more info](./Assign%20Managed%20Identity%20permissions%20via%20CMDLine.md).

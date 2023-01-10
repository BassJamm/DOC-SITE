---
sidebar_position: 2
id: Azure Active Directory
title: Azure Active Directory
tags: [AzureAD, Command Line]
---

This document is supposed to be a cheatsheet of commands useful when using the Azure Cli.
## 1. Connection

Commands relating to connecting to the Azure CLi

| Command| Description |
| :----------- | ----------- |
| `az login` | Login to Azure tenant |
| `az account set --subscription <subscription ID>` | Set the scope for the session. |

## 2. Object Management

| Command| Description |
| :----------- | ----------- |
| `az group list --output table` | List resource groups as a table. |
| `az group create --name exampleRG --location eastus` | Create a resource group, with a name and location. |


## 3. Deployment

| Command| Description |
| :----------- | ----------- |
| `az deployment list --output table` | List of deployments. |
| `az deployment group create --resource-group exampleRG --template-file main.bicep --parameters storageName=uniquename` | Deploy storage account into an existing Resource Group. |

## 4. Delete Resources

| Command| Description |
| :----------- | ----------- |
| `az group delete --resource-group <group name>` | Delete resource group. |

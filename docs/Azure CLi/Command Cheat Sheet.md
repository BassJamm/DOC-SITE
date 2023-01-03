---
sidebar_position: 1
id: Command Cheat sheet
title: Command Cheat sheet
tags: [AzureCli. CheatSheet]
---

## Connection

### Login

Login to Azure tenant, `az login`, this uses the web browser to authenticate.

### Set context

Once logged in, set the context you want to work in (Subscription).

List all subscription, `az account list`.
Set the context using the subscript ID `az account set --subscription <subscription ID>`.

## Management

### List Resource Groups

List resource groups as a table, `az group list --output table`.

## Create resource

### Resourse Group

Create a resource group, with a name and location, `az group create --name exampleRG --location eastus`.

### Deployment

#### Check deployments

`az deployment list --output table`

#### Storage account

Create the resource group before deployment of the below command.

`az deployment group create --resource-group exampleRG --template-file main.bicep --parameters storageName=uniquename`

## Delete Resources

### Resourse Group

`az group delete --resource-group <group name>`
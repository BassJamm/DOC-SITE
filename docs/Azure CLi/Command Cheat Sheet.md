---
sidebar_position: 1
id: Command Cheat sheet
title: Command Cheat sheet
tags: [AzureCli. CheatSheet]
---

## 1. Connection

### 1.1. Login

Login to Azure tenant, `az login`, this uses the web browser to authenticate.

### 1.2. Set context

Once logged in, set the context you want to work in (Subscription).

List all subscription, `az account list`.
Set the context using the subscript ID `az account set --subscription <subscription ID>`.

## 2. Management

### 2.1. List Resource Groups

List resource groups as a table, `az group list --output table`.

## 3. Create resource

### 3.1. Resourse Group

Create a resource group, with a name and location, `az group create --name exampleRG --location eastus`.

### 3.2. Deployment

#### 3.2.1. Check deployments

`az deployment list --output table`

#### 3.2.2. Storage account

Create the resource group before deployment of the below command.

`az deployment group create --resource-group exampleRG --template-file main.bicep --parameters storageName=uniquename`

## 4. Delete Resources

### 4.1. Resourse Group

`az group delete --resource-group <group name>`
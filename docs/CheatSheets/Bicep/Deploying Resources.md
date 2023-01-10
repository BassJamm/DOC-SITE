---
sidebar_position: 2
id: Deploying Resources
title: Deploying Resources
tags: [Bicep, CheatSheet]
---

# Deploying Resources

## Deploy using AzCmdLet (PowerShell)

`New-AzResourceGroupDeployment`, adds an Azure deployment to a resource group, for example, `New-AzResourceGroupDeployment -TemplateFile main.bicep`.

```powershell
New-AzResourceGroupDeployment -ResourceGroupName "ContosoEngineering" -TemplateFile "location" -Tag @{"key1"="value1"; "key2"="value2";}
```

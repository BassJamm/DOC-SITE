---
sidebar_position: 2
id: Assign Managed Identity permissions
title: Assign Managed Identity permissions
tags: [Azure]
---
- [Refernce for where this came from](https://aztoso.com/security/microsoft-graph-permissions-managed-identity/.)
- [Microsoft reference for command](https://learn.microsoft.com/en-us/powershell/module/azuread/new-azureadserviceapproleassignment?view=azureadps-2.0).

## 1. The command

```powershell

# Your tenant id.
$TenantID="Add your tenant ID"
# Microsoft Graph App ID (DON'T CHANGE).
$GraphAppId = "00000003-0000-0000-c000-000000000000"
# Name of the manage identity (same as the Logic App name).
$DisplayNameOfMSI="Add display name of Enterprise App" 
# Check the Microsoft Graph documentation for the permission you need for the operation.
$PermissionName = "Add your permission here" 

# Install the module (You need admin on the machine)
Install-Module AzureAD 

# Connect to Azure AD via tenant ID, you'll need an admin account to login with though.
Connect-AzureAD -TenantId $TenantID
# Collects the Target System Managed Identities information into the MSI variable.
$MSI = (Get-AzureADServicePrincipal -Filter "displayName eq '$DisplayNameOfMSI'")
Start-Sleep -Seconds 10
# Store the Microsoft Graph API informaiton into the GraphServicePrincipal variable.
$GraphServicePrincipal = Get-AzureADServicePrincipal -Filter "appId eq '$GraphAppId'"
# Searches Microsoft Graph API for the value matching the PermissionName variable populated above and stores this in the AppRole Variable.
$AppRole = $GraphServicePrincipal.AppRoles |  Where-Object {$_.Value -eq $PermissionName -and $_.AllowedMemberTypes -contains "Application"}
# Assigned the permission from the Microsoft Graph API to the target Managed Identity.
New-AzureADServiceAppRoleAssignment -ObjectId $MSI.ObjectId -ResourceId $GraphServicePrincipal.ObjectId -Id $appRole.Id -PrincipalId $MSI.ObjectId
```
Annotated the hell out of it as the command really confused me.

## 2. Notes

- It takes a few minutes for this change to show in the GUI.
- If the permission already exists the promtp will error on the final command.

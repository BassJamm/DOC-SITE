---
sidebar_position: 2
id: take ownership of customer azure subscription
title: Take ownership of customer azure subscription
tags: [PartnerCentre]
---

Microsoft Article: [Reinstate admin privileges for a customer's Azure CSP subscriptions](https://learn.microsoft.com/en-us/partner-center/reinstate-csp).

```powershell
# Connect to Sub.
Connect-AzAccount -TenantID "<Customer TenantID>"

# Set the subscription context you want to add partner permissions too.
Set-AzContext -SubscriptionID "<Customer Subscription ID>"

# Assign the "adminagents" group in Partner tenant to the customer subscription
New-AzRoleAssignment -ObjectID "<Object ID of the AdminAgents group from step 7 of your actions section>" -RoleDefinitionName "Owner" -Scope "/subscriptions/<CSP subscription ID>" -ObjectType "ForeignGroup"
```

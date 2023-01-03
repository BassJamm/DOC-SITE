---
sidebar_position: 2
id: Manage Active Directory with PowerShell
title: Manage Active Directory with PowerShell
tags: [PowerShell, AD]
---

# Manging AD with PowerShell

## Filter by an attribute

```powershell

# Filter mail address is like & the user has to be enabled.
Get-ADUser -Filter "Mail -like '*@<domain>co.uk' -and enabled -eq '$true'" | Select Name, UserPrincipalname

# Fitler where user is disabled.
Get-ADUser -Filter 'enabled -eq $false' | Select name, DistinguishedName

```

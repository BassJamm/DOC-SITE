---
sidebar_position: 2
id: OnPrem Active Directory
title: OnPrem Active Directory
tags: [PowerShell, AD]
---

# Manging On-Prem Active Directory via PowerShell

## Get-ADUser: Filter by attribute

```powershell

# Filter mail address is like & the user has to be enabled.
Get-ADUser -Filter "Mail -like '*@<domain>co.uk' -and enabled -eq '$true'" | Select Name, UserPrincipalname

# Fitler where user is disabled.
Get-ADUser -Filter 'enabled -eq $false' | Select name, DistinguishedName

```

---
sidebar_position: 5
id: OnPrem Active Directory
title: OnPrem Active Directory
tags: [PowerShell, AD, Command Line]
---

# Manging On-Prem Active Directory via PowerShell

## Get-ADUser: Filter by attribute

```powershell
# Filter mail address is like & the user has to be enabled.
Get-ADUser -Filter "Mail -like '*@<domain>co.uk' -and enabled -eq '$true'" | Select Name, UserPrincipalname

# Fitler where user is disabled.
Get-ADUser -Filter 'enabled -eq $false' | Select name, DistinguishedName
```
## Get password last reset time

```powershell
# Collect all users, searching for the passlastset property, select the objects Name and Password Last Set, Export to a local appdata folder.
Get-ADUser -filter * -properties PasswordLastSet  | Select-Object Name, PasswordLastSet | Export-csv -Path $env:USERPROFILE\PwdLastResetTime.csv

# Similar to above but, foramtting into a table.
Get-ADUser -filter * -properties PwdLastSet,PasswordLastSet  | Format-Table Name,@{Name='PwdLastSet';Expression={[DateTime]::FromFileTime($_.PwdLastSet)}},PasswordLastSet | out-file -filepath $env:USERPROFILE\PwdLastResetTimePwdLastResetTime.txt
```

---
sidebar_position: 3
id: User Management
title: User Management
tags: [Code, Scripts, PowerShell]
---

## Get-ADUser: Filter by attribute (on-prem AD)

```powershell
# Filter mail address is like & the user has to be enabled.
Get-ADUser -Filter "Mail -like '*@<domain>co.uk' -and enabled -eq '$true'" | Select Name, UserPrincipalname

# Fitler where user is disabled.
Get-ADUser -Filter 'enabled -eq $false' | Select name, DistinguishedName
```

## Find last password reset date\time (on-prem AD)

```powershell
# Collect all users, searching for the passlastset property, select the objects Name and Password Last Set, Export to a local appdata folder.
Get-ADUser -filter * -properties PasswordLastSet  | Select-Object Name, PasswordLastSet | Export-csv -Path $env:USERPROFILE\PwdLastResetTime.csv

# Similar to above but, foramtting into a table.
Get-ADUser -filter * -properties PwdLastSet,PasswordLastSet  | Format-Table Name,@{Name='PwdLastSet';Expression={[DateTime]::FromFileTime($_.PwdLastSet)}},PasswordLastSet | out-file -filepath $env:USERPROFILE\PwdLastResetTimePwdLastResetTime.txt
```

## Get Calendar Permissions (Exch Online)

Get Calendar permissions of users and also set the calendar permissions.

```powershell
# Connect to Exchange Online module.
Connect-ExchangeOnline

# Store all user objects into variable.
$userObject = Get-Mailbox -RecipientTypeDetails UserMailbox | select UserPrincipalName

# Single mailbox command.
# Get-MailboxFolderPermission -Identity Ryan.Wilson@traderemedies.gov.uk:\Calendar -User Default | ft

# Loop through each user and get calendar permissions of the default user, save to a csv file and append information to this.
foreach($user in $userObject){
    $calendar = $user.UserPrincipalName+":\Calendar"
    Get-MailboxFolderPermission -Identity $calendar | Export-csv -Append $env:USERPROFILE\Downloads\calendar-perms.csv
}

# Set Calendar Permissions

# Manually connect to Exchange Online.
Connect-ExchangeOnline

# Get all User Mailboxes.
$userObject = Get-Mailbox -RecipientTypeDetails UserMailbox | select UserPrincipalName

# Single mailbox command.
# Set-MailboxFolderPermission -Identity firstname.Lastname@fordway.com:\Calendar -User Default -AccessRights LimitedDetails

# Loop through each user and set calendar permissions of the default user.
foreach($user in $userObject){
    $calendar = $user.UserPrincipalName+":\Calendar"
    Set-MailboxFolderPermission -Identity $calendar -User Default -AccessRights LimitedDetails

```
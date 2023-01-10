---
sidebar_position: 3
id: Exchange Online
title: Exchange Online
tags: [Command Line, Exchange Online, PowerShell]
---

# 1. Exchange Online Commands

## 1.1. Get-Calendar Permissions

```powershell
# Manually connect to Exchange Online.
Connect-ExchangeOnline

# Get all User Mailboxes.
$userObject = Get-Mailbox -RecipientTypeDetails UserMailbox | select UserPrincipalName

# Single mailbox command.
# Get-MailboxFolderPermission -Identity Ryan.Wilson@traderemedies.gov.uk:\Calendar -User Default | ft

# Loop through each user and get calendar permissions of the default user.
foreach($user in $userObject){
    $calendar = $user.UserPrincipalName+":\Calendar"
    Get-MailboxFolderPermission -Identity $calendar | Export-csv -Append $env:USERPROFILE\Downloads\calendar-perms.csv
}
```
## 1.2. Set-Calendar permssions

```powershell
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
}
```
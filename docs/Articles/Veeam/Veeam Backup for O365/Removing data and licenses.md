---
sidebar_position: 2
id: Removing data and licenses
title: Removing data and licenses
tags: [VBO]
---
How to remove a license from a user in VBO.

## 1. References

Veeam Blog post - [How to remove a license from a user in Veeam Backup for Microsoft Office 365](https://www.veeam.com/blog/remove-user-license-vbo365.html).
Veeam Rest API Reference - [Revoking Licenses from users](https://helpcenter.veeam.com/docs/vbo365/rest/delete_licensedusers.html?ver=60).

## 2. Overview

To remove a license from a user, you first need to delete that user’s data from all configured repositories and run the remove license command with PowerShell. This can be useful if you accidently backed up a user and no longer need to keep the data. Otherwise, you must wait the 31-day threshold for the license to be reallocated.

## 3. Checking for stored data

Firstly, you'll need to check if there is any data stored for the user you want to remove the licnese from.
Open the Veeam Backup console on your application host, select the hamburger menu in the top left, navigate to Console and click on PowerShell.

```powershell
# This script will show you what a data a user has on a particular repository
# Fill in "REPOSITORY" with the name of the repository as it is showing in 
# Veeam Backup for Office 365 and the email address of the user you wish to remove the data for "USER@DOMAIN.com"

$repository = Get-VBORepository -Name "REPOSITORY" 
$user = Get-VBOEntityData -Type User -Repository $repository -Name "USER@DOMAIN.com" 
$user
```
> Provided the command above runs successfully, you'll get a table returned showing the repositories as headings, with True or False under them depending on whether the user has data in them.

## 4. Delete the user data from each repo

I won't regurgitate the perfectly good Veeam article, the link is below for all of the commands needed.

[How to remove a license from a user in Veeam Backup for Microsoft Office 365](https://www.veeam.com/blog/remove-user-license-vbo365.html).

> Make sure to follow each section in the rough order of the article, skip over the ones where your user has no data.

## 5. Issues

I ended up having to raise a support request in the end as I had some troublesome admin users who'd had their data backed up in error. I was asked by the support team member who helped me to not store the script that was used.

### 5.1. Commands returning "Null"

Some of the commands above for some reason will return a “null” error when using them, you will need to pipe the command into a search to find the relevant data.

```powershell
Get-VBOLicensedUser -Organization $org | ?{$_.username -like "*-adm*"} 
# You can then loop through an array if you store the above command into a variable. 
Get-VBOLicensedUser -Organization $org |?{$_.username -like "*-adm*"}|foreach-object {remove-vbolicenseduser $_} 
```
---
sidebar_position: 3 
id: Restore Errors
title: Restore Errors
tags: [VBO]
---
Capturing information on the restoration errors.

## 1. Failing to open mailbox

### 1.1. Scenario

Your Veeam Backup for Office 365 solution is pretty new and it's being tested or you've a member of your team who always gets this error for some reason.

### 1.2. The error

Failed to access mailbox. Mailbox does not exist.
![screenshot of error](/img/VBO_RestoreErrors_FailingToOpenMailbox.png)

> This issue mostly presents that error when you're using Modern Authentication.

### 1.3. Solution

It turns out that in order to restore objects the user who authenticates to do the restore action must have the impersonation role, this is a custom role that you need to create via command line.

![restore using Modern Auth](/img/VBO_RestoreErrors_FailingToOpenMailbox_Img2.png)
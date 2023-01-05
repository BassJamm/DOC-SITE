---
sidebar_position: 1 
id: Managing Backup Jobs
title: Managing Backup Jobs
tags: [VBO]
---

## 1. Before you begin

- Veeam best practice guide link, [here](https://bp.veeam.com/vb365/).
- Veeam User guide link, [here](https://helpcenter.veeam.com/docs/vbo365/guide/vbo_new_backup_job.html?ver=60).

## 2. Recommendations

### 2.1. Split-up the jobs

This was a recommendation from the good folks at Veeam. Try to split the jobs based on size being backed up. An example of a suggestion below.

- Create a single job to capture anything that is new.
- If you've got loads of small SharePoint sites, split them into chunks as these will take a long time to backup. A few thousand of these will take hours to backup.
For example, take the largest 10 sites and put them in their own jobs.
- The SharePoint backup job will also back personal sites as well, no need to include the personal sites in the other jobs.

### 2.2. Server resources & Backup App Registrations

- Both resources (CPU & RAM) play a major role in the performance of the proxy server. Make sure you don't go beneath 4vCPUs & 16GB of RAM, below this and you'll start to see a noticable time incrase in backups.
- For the moment you can add more backup applications into Azure AD, that increases the amount of requests that can be made to the Office 365 resources.

> The more backup applications you have the quicker you'll exhaust the amount of requests that can be made per minute by the VBO solution to backup the data.

### 2.3. Microsoft Throttling

- After speaking with Microsoft, they no longer change the throttling limits upon request.
- You're limited due to the size of your organisation and amount of users, check out the link below for more information on throttling.

Microsoft Link - [Avoid getting throttled or blocked in SharePoint Online](https://learn.microsoft.com/en-us/sharepoint/dev/general-development/how-to-avoid-getting-throttled-or-blocked-in-sharepoint-online).

## 3. Object Management

- Setup an Azure AD group to capture user objects that need to be excluded from the backups.
- Microsoft 365 Groups require an owner to be backed up, otherwise they'll generate warnings in your jobs.

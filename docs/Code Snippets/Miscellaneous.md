---
sidebar_position: 4
id: Miscellaneous Code
title: Miscellaneous Code
tags: [template]
---

# 1. Random snippets of useful code

## 1.1. Direct Send to email

```powershell
# Get the credential
$credential = Get-Credential

## Define the Send-MailMessage parameters
$mailParams = @{
    SmtpServer                 = 'smtp.office365.com'
    Port                       = '587' # or '25' if not using TLS
    UseSSL                     = $true ## or not if using non-TLS
    Credential                 = $credential
    From                       = 'Email.Address@domain.com'
    To                         = 'Email.Address@domain.com'# , 'recipient@NotYourDomain.com'
    Subject                    = "SMTP Client Submission - $(Get-Date -Format g)"
    Body                       = 'This is a test email using SMTP Client Submission'
    Attachment                 = "$env:USERPROFILE\Desktop\TRA-Backup-Job-Report.csv"
    DeliveryNotificationOption = 'OnFailure', 'OnSuccess'
}

## Send the message
Send-MailMessage @mailParams
```

## 1.2. Store encrypted credentials

Try the section above in conjuction with this to store the credentials for the account that is sending the email.

```powershell
<# Set and encrypt credentials to file using default method #>

$credential = Get-Credential
$credential.Password | ConvertFrom-SecureString | Set-Content "C:\temp\Reporting\encrypted_password_for_reporting.txt"

<# Decrypting it and using it in a script#>

# Get the credential
$emailusername = "email.address@domain.com"
$encrypted = Get-Content "C:\temp\encrypted_password_for_reporting.txt" | ConvertTo-SecureString
$credential = New-Object System.Management.Automation.PsCredential($emailusername, $encrypted)
```
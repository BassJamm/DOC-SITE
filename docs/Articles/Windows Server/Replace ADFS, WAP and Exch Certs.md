---
sidebar_position: 1
id: Certificate Management for ADFS, WAP and Exchange
title: Certificate Management for ADFS, WAP and Exchange
tags: [KB, Certificates, Windows Server, ADFS, WAP, Exchange]
---

:::caution Before you start
This article assumes you're using an External Certificate Authority.
:::


## Generate a new CSR

From a server with IIS installed.

1. **Open IIS** (or Internet Information Services (IIS) Manager).
2. Select the server name from the connections list.
3. Click on the **Server Certificates** option.
4. On the right-hand side, click **Create Certificate Request**.
5. Fill in the informaiton using the Wizard as accurately as possible.

:::tip
 The Common Name: This should match the domain you want the Certifiacte to cover.
:::

6. Select 2048 for the encryption, I've never used anything less than this.
7. Complete the wizard and save the CSR with a sensible name.

Take this CSR to your chosen external certificate provider, DigiCert for example. Enter your CSR and they'll send you back a certificate file in many formats.

## Replacement steps

### Replacing the ADFS certificate

[Microsoft doc link.](https://learn.microsoft.com/en-us/windows-server/identity/ad-fs/operations/manage-ssl-certificates-ad-fs-wap#replacing-the-ssl-certificate-for-ad-fs-running-in-default-certificate-authentication-binding-mode).

:::tip
The certificate thumbprint can be found by executing this command, `dir Cert:\LocalMachine\My\`.
:::

1. Import the cert to the Local Machine store.
2. Open PowerShell as an Admin.
3. Run the command, `Set-AdfsSslCertificate -Thumbprint '<thumbprint of new cert>'`.

:::tip
The Set-AdfsSslCertificate cmdlet is a multi-node cmdlet; this means it only has to run from the primary and all nodes in the farm will be updated. This is new in Server 2016, all servers in you setup must be running 2016.
:::

### Replacing the SSL certificate for the Web Application Proxy

[Microsoft doc link.](https://learn.microsoft.com/en-us/windows-server/identity/ad-fs/operations/manage-ssl-certificates-ad-fs-wap#replacing-the-ssl-certificate-for-the-web-application-proxy).

1. Import the cert to the Local Machine store.
2. Open PowerShell as an Admin.
3. Run the command, `Set-WebApplicationProxySslCertificate -Thumbprint '<thumbprint of new cert>'`.

:::caution
If the above cmdlet fails because the old certificate has already expired, reconfigure the proxy using the following cmdlets:

```powershell
$cred = Get-Credential
Install-WebApplicationProxy -FederationServiceTrustCredential $cred -CertificateThumbprint '<thumbprint of new cert>' -FederationServiceName 'fs.contoso.com'
```
:::

### Replace the certificate for Exchange 2016

1.	Import the cert to the Local Machine store.
2.	Open the **EAC** and navigate to **Servers > Certificates**.
3.	In the Select server list, **select the Exchange server** where you want to install the certificate, click **More options**, and select **Import Exchange certificate**.
4.	**Follow the Wizard** to import the certificate.
5.	In the Specify the servers you want to apply this certificate to page, **click Add**.
6.	On the Select a server page that opens, **select the Exchange server** where you want to install the certificate, and **click Add**.

:::tip
Repeat this step as many times as necessary. 
:::

7.	When you're finished selecting servers, **click OK**.

## Testing

### Exchange

1. Open the webmail console and review the certificate presented. This should be the new certificate.

### ADFS\WAP

1.	Load the ADFS web page and review the certificate presented. This should be the new certificate. 
2. If required the customer can test by, any app\device that requires them to sign-in to Office 365.
   1. Such as, Outlook, active-sync devices eg: ipad, mobile phones.
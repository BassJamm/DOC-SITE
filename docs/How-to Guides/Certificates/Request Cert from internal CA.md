---
sidebar_position: 4
id: Request Cert from internal CA
title: Request Cert from internal CA
tags: [KB, Certificates]
---
## Option 1: Web Portal

Generate a CSR from another server, doing this from IIS is a tried and tested method.

1. Open a **web browser**.
2. Browse to your **Certificate Authority website**.

:::tip Certificate Authority website URL
Enter the address of your CA followed by` /certsrv` for example `http://ca server name/certsrv` in the Address bar.
:::

3. Click **Request a certificate**

      1. ![Request a cert](../../../static/img/Request%20Cert%20from%20internal%20CA/request-cert-from-ca-001.jpg)


4. Click **submit an advanced certificate request**.

   1. ![Request a cert](../../../static/img/Request%20Cert%20from%20internal%20CA/request-cert-from-ca-002.jpg)


5. Paste in the CSR.

   1. ![Request a cert](../../../static/img/Request%20Cert%20from%20internal%20CA/request-cert-from-ca-003.jpg)

:::tip Certificate template
Make sure to change the template you want to use if that is applicable.

![Request a cert](../../../static/img/Request%20Cert%20from%20internal%20CA/request-cert-from-ca-003.5.jpg)
:::

6. Click **submit**.
7. Your certificate should be approved almost instantly and then some download options will appear.

   1. ![Request a cert](../../../static/img/Request%20Cert%20from%20internal%20CA/request-cert-from-ca-004.jpg)

8. Select whatever download option is best for you.

:::tip
The chain option downloads the Certificate Authority certs as well, all the way back to the root ca.
:::

I'd suggest renaming the certificate file you download, it'll have a generic name otherwise.
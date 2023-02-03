---
sidebar_position: 1
id: Error Management
title: Error Management
tags: [Code, Scripts, PowerShell]
---

## Try and Catch example for error debugging

```powershell
try {
    Connect-AzAccount -Identity
}
catch{
    Write-Output "Unable to login. Aborting."; 
    exit
}
```
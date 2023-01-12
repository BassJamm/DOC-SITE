---
sidebar_position: 1
id: PwshCli CheatSheet
title: PwshCli CheatSheet
tags: [PowerShell, AD]
---

Helpful Commands to use every day.

## Command Syntax Help

| Command| Description |
| :----------- | ----------- |
| `Get-help <command you want help with>` | Will return cmd syntax. |
| `Get-help <command you want help with> -example` | Will return cmd examples (if available. |
| `Get-Command` | Will return all available comamnds from installed modules. |
| `Get-Command -Name Get-*` | Will search from whatever string between, after or before wildcards `*`. |

## Troubleshooting Commands

| Command| Description |
| :----------- | ----------- |
| `Get-NetIPAddress -All` | Returns IPv4 and IPv6 configuration data and information about the interfaces those addresses are associated with. |
| `Get-NetIPConfiguration` | Returns networking configuration, including usable interfaces, IP addresses, and DNS servers.|
| `Test-NetConnection` | Will run a ping and TCP connection to the designated destionation. |
| `Test-NetConnection -port 8080 -ComputerName imagine01` | Will run a ping and TCP connection to the designated destionation on the chosen port. |
| `dsregcmd /status` | Will return the Azure Active Directory configuration of a machine. |

## Variables

Variables are useful for storing data that will need to referenced or used later on, perfect for making scripts. You can store all types of information in variables for example, commands, results, names, paths, settings and values.

[Microsoft link - Long Description of Variables](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_variables?view=powershell-7.2#long-description).

There are a few types of variables:

- **Automatic variables**, these can be refernced, for example, $PSHOME or $PROFILE, these cannot be changed.
- **User-created variables**, the user creates these and can freely, delete and change them.
- **Preference variables**, these variables store user preferences for PowerShell, for example, the $MaximumHistoryCount.

Example of User-Crated variables

```powershell
$MyVariable = 1, 2, 3

$Path = "C:\Windows\System32"
```


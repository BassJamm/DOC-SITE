---
sidebar_position: 1
id: Helpful Commands
title: Helpful Commands
tags: [PowerShell, AD]
---

# Helpful Commands

Helpful Commands to use every day

## Get-Help

Useful for finding out the command syntax and what switches are available for the command.

**Syntax**

```powershell
// base command
get-help

// Getting help with a command
get-help <command name>

// Example
Get-Help rename-item

// Output to the above

NAME
    Rename-Item

SYNTAX
    Rename-Item [-Path] <string> [-NewName] <string> [-Force] [-PassThru] [-Credential <pscredential>] [-WhatIf] [-Confirm]
    [<CommonParameters>]

    Rename-Item [-NewName] <string> -LiteralPath <string> [-Force] [-PassThru] [-Credential <pscredential>] [-WhatIf] [-Confirm]
    [<CommonParameters>]


ALIASES
    rni
    ren


REMARKS
    Get-Help cannot find the Help files for this cmdlet on this computer. It is displaying only partial help.
        -- To download and install Help files for the module that includes this cmdlet, use Update-Help.
        -- To view the Help topic for this cmdlet online, type: "Get-Help Rename-Item -Online" or
           go to https://go.microsoft.com/fwlink/?LinkID=2097153.
```

## Get-Command

Useful for finding out what commands are available to use for any modules you have installed.

**Syntax**

```powershell
// Base command - will return thousands of results.
Get-Command

// Searching commands based on name, the wild cards allow searching for the keyword in any part of the name.
Get-Command -Name *keyword*

// Output for the above.

CommandType     Name                                               Version    Source
-----------     ----                                               -------    ------
Function        Rename-DAEntryPointTableItem                       1.0.0.0    DirectAccessClientComponents
Function        Rename-MaskingSet                                  2.0.0.0    Storage
Function        Rename-MgCommunicationCallScreenSharingRole        1.10.0     Microsoft.Graph.CloudCommunications
Function        Rename-MgDeviceManagementVirtualEndpointCloudPc    1.10.0     Microsoft.Graph.DeviceManagement.Actions
Function        Rename-MgDeviceManagementVirtualEndpointCloudPcUs… 1.10.0     Microsoft.Graph.DeviceManagement.Actions
Function        Rename-MgUserCloudPc                               1.10.0     Microsoft.Graph.Users.Actions
Function        Rename-MgUserCloudPcUserAccountType                1.10.0     Microsoft.Graph.Users.Actions
Function        Rename-NetAdapter                                  2.0.0.0    NetAdapter
Function        Rename-NetFirewallHyperVRule                       2.0.0.0    NetSecurity
Function        Rename-NetFirewallRule                             2.0.0.0    NetSecurity
Function        Rename-NetIPHttpsConfiguration                     1.0.0.0    NetworkTransition
Function        Rename-NetIPsecMainModeCryptoSet                   2.0.0.0    NetSecurity
Function        Rename-NetIPsecMainModeRule                        2.0.0.0    NetSecurity
Function        Rename-NetIPsecPhase1AuthSet                       2.0.0.0    NetSecurity
Function        Rename-NetIPsecPhase2AuthSet                       2.0.0.0    NetSecurity
Function        Rename-NetIPsecQuickModeCryptoSet                  2.0.0.0    NetSecurity
Function        Rename-NetIPsecRule                                2.0.0.0    NetSecurity
Function        Rename-NetLbfoTeam                                 2.0.0.0    NetLbfo
Function        Rename-NetSwitchTeam                               1.0.0.0    NetSwitchTeam
Function        Rename-Printer                                     1.1        PrintManagement
Function        Test-AzAppConfigurationStoreNameAvailability       1.2.0      Az.AppConfiguration
Cmdlet          Rename-AzContext                                   2.10.1     Az.Accounts
Cmdlet          Rename-Computer                                    7.0.0.0    Microsoft.PowerShell.Management
Cmdlet          Rename-Item                                        7.0.0.0    Microsoft.PowerShell.Management
Cmdlet          Rename-ItemProperty                                7.0.0.0    Microsoft.PowerShell.Management
Cmdlet          Rename-LocalGroup                                  1.0.0.0    Microsoft.PowerShell.LocalAccounts
Cmdlet          Rename-LocalUser                                   1.0.0.0    Microsoft.PowerShell.LocalAccounts
```

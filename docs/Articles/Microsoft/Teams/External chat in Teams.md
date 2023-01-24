---
sidebar_position: 2
id: External chat in Teams
title: External chat in Teams
tags: [KB, Microsoft, Teams, External Chat]
---

## Scenario

You want to block external teams chat and features for internal staff to outside organisations.

## Options for this feature

1. Enabled for all external organisations.
2. Disabled for all external organisations.
3. Enabled for selected external organisations.
4. Disabled for external organisations.
5. Disable the feature for some users via policy.

:::tip
Options 1 to 4 above can be actioned within the Teams Admin portal, option 5 needs to be done via command line. This option is the focus of this article.
:::

## Setup a new policy

1. Install the Teams PowerShell module, [here](https://www.powershellgallery.com/packages/MicrosoftTeams/4.9.1).
2. Type the command, `Connect-MicrosoftTeams` to begin the sign-in process, login using the prompt that should appear.
3. Follow the commands below to create a new Teams policy, which disables the features of external chat for end users.

```powershell
New-CsExternalAccessPolicy -Identity "Block External Teams" # Creates new policy.
     Set-CsExternalAccessPolicy -Identity "Block External Teams" -EnableTeamsConsumerAccess $False # Disables the feature for the single policy.
     Set-CsExternalAccessPolicy -Identity "Block External Teams" -EnableFederationAccess $False # Disables the feature for the single policy.
     Set-CsExternalAccessPolicy -Identity "Block External Teams" -EnableTeamsConsumerInbound $False # Disables the feature for the single policy.
``` 
## Enabling External Chat

You want to enable the attribute `EnableTeamsConsumerInbound`, which is what the feature uses. You could assign the user the `FederationAndPICDefault` policy, I think this exists in all tenants.

```powershell
Grant-CsExternalAccessPolicy -Identity "username" -PolicyName "FederationAndPICDefault"
```
## See what External Access policies exist

The Command below will output a list of all External Access policies in your environment.

```powershell
Get-CsExternalAccessPolicy # Command to find all policies.

# Example of one of the outputs from the command, yours will have more than just this one.

Identity                                          : Global
Description                                       :
EnableFederationAccess                            : True
EnableXmppAccess                                  : False
EnablePublicCloudAccess                           : True
EnablePublicCloudAudioVideoAccess                 : True
EnableOutsideAccess                               : True
EnableAcsFederationAccess                         : True
EnableTeamsConsumerAccess                         : True
EnableTeamsConsumerInbound                        : True
RestrictTeamsConsumerAccessToExternalUserProfiles : False
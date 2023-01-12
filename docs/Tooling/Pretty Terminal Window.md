---
sidebar_position: 2
id: Prettier Terminal Window
title: Prettier Terminal Window
tags: [PowerShell, Admin]
---

This isn't original material, please check out the links below to the location of where I found the information:

- [Video from Scott Hanselman on how to do this.](https://www.youtube.com/watch?v=VT2L1SXFq9U).
- [My Ultimate PowerShell prompt with Oh My Posh and the Windows Terminal](https://www.hanselman.com/blog/my-ultimate-powershell-prompt-with-oh-my-posh-and-the-windows-terminal.)

## Install the Windows Terminal App

[Download it free from the Microsoft store](https://www.microsoft.com/store/productId/9N0DX20HK701), once installed run the terminal application.

> If you're doing this on a domain joined machine, you'll need to run the terminal application on both the user account and the administrator account to create the profiles.

## Install OH-MY-POSH

[Follow these instructions for Windows machines](https://ohmyposh.dev/docs/installation/windows), this is the official website. I recommend using winget via PowerShell to get the stuff.

```powershell
winget install JanDeDobbeleer.OhMyPosh -s winget
```

## Download fonts from Nerd Fonts

[These are some instructions from the Oh My Posh site to do this](https://ohmyposh.dev/docs/installation/fonts).

In your **terminal prompt**, type `oh-my-posh font install`, this should then install the on my posh font.

Next you need to configure the Terminal app to use the new font. You can edit the JSON file or you can do it in the **GUI** by **clicking on the down arrow** next to your open tab in Terminal.

Click **Settings**, then click **Defaults** and click **Appearance**.

Click on the **font list** **next to** the option, **Font Face**, **select** the **Oh my posh font**.

## Edit the PowerShell profile

[Check out this link for the source matierial for the below](https://ohmyposh.dev/docs/installation/prompt.)

Edit your PowerShell profile script, you can find its location under the $PROFILE variable in your preferred PowerShell version. For example, using notepad, `notepad $PROFILE`.

> If the command errors, you will need to create the profiel first, `New-Item -Path $PROFILE -Type File -Force`.

Inside your profile, add the following line into it.

```powershell
oh-my-posh init pwsh --config 'C:/Users/Posh/jandedobbeleer.omp.json' | Invoke-Expression
```

If you want to change the theme, navigate to the theme folder, if you don't know where that is, enter the following command `(Get-Command oh-my-posh).Source`.

## Other suggestions

### Install PSReadLine

This module shows autocomplete suggestions based on the recent commands you've run, it's a great addition.

[Reference blog post from the Microsoft DevBlogs](https://devblogs.microsoft.com/powershell/announcing-psreadline-2-1-with-predictive-intellisense/).

Install the module, `Install-Module PSReadLine`.

> You need version 2.1.0 or higher for this to work properly.

Enable Predictive IntelliSense by running this command, `Set-PSReadLineOption -PredictionSource History`, you should then start to see grey text in your PowerShell prompt that's running currently.

> The default key binding to use the prediction is right-arrow.

You can change the color for those predictions by using the following commands.

```powershell
Set-PSReadLineOption -Colors @{ InlinePrediction = '#8A0303'} # This is dark red.
Set-PSReadLineOption -Colors @{ InlinePrediction = '#2F7004'} # This is a dark green.

# This will set it back to default.
Set-PSReadLineOption -Colors @{ InlinePrediction = "$([char]0x1b)[36;7;238m"}
```

Make sure to update your PowerShell profile to load this module.

Type `notepad $profile` into your terminal window, this should load your profile into notepad. Paste in the following lines.

```powershell
Set-PSReadLineOption -PredictionSource History
Set-PSReadLineOption -PredictionViewStyle ListView
```

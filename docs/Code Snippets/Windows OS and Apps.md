---
sidebar_position: 6
id: Windows OS and Apps
title: Windows OS and Apps
tags: [Command Line, PowerShell, CMD]
---

# 1. Manage Windows OS and Apps via Command Line

## 1.1. Set office update channel

```powershell
<# 
Locate the office click to run installer, default location: cd C:\Program Files\Common Files\Microsoft Shared\ClickToRun
#>

cd "C:\Program Files\Common Files\Microsoft Shared\ClickToRun"

<# 
Different channel options
Current - Latest version.
Deferred - Semi-Annual.
#>

OfficeC2RClient.exe /changesetting Channel=Current
OfficeC2RClient.exe /update user
```

## 1.2. Time Stamped Ping

:::caution
Not completely finished this script, may require some logic checks before useing.
:::

```powershell
<# Collect pings to various locations
Confirm the destionations for the pings and substitute them into the lines of code below.
Make sure to select both IP addresses and FQDNs for example, 8.8.8.8 is the Google public DNS IP, an FQDN would be a domain name or server name, wwww.google.com or FOR-AZ-DC01.
#>

# Leave the two below, it's the ping to google DNS via IP and domain name, which will test internet connectivity and DNS resolution.
Start-Job -ScriptBlock { test-connection 8.8.8.8 -count 10 | format-table -AutoSize @{n='TimeStamp';e={Get-Date}},__SERVER, Address, ProtocolAddress, ResponseTime | Out-File -FilePath $env:USERPROFILE\Downloads\Time_Stamp_Ping_Google_DNS_IP.txt}
Start-Job -ScriptBlock { test-connection wwww.bbc.co.uk -count 10 | format-table -AutoSize @{n='TimeStamp';e={Get-Date}},__SERVER, Address, ProtocolAddress, ResponseTime | Out-File -FilePath $env:USERPROFILE\Downloads\Time_Stamp_Ping_Google_Domain_Name.txt}

Get-Job
Write-Host "Wait a couple of minutes for these to complete, you should see the files in the downloads folder of the logged in user."
Start-Sleep -Seconds 30

# Copy this line as required and make sure to update the sections where there are <CAPS>, delete the <> symbols too from the command.
Start-Job -ScriptBlock { test-connection "DESTINATION LOCATION" -count "ENTER HOW MANY TIMES YOU WANT THIS TO REPEAT" | format-table -AutoSize @{n='TimeStamp';e={Get-Date}},__SERVER, Address, ProtocolAddress, ResponseTime | Out-File -FilePath $env:USERPROFILE\Downloads\Time_Stamp_Ping_<CHANGE ME TO SOMETHING MORE USEFUL>.txt}
```

## 1.3. Folder size report

```powershell
$startFolder = "C:\FolderName"

$colItems = Get-ChildItem $startFolder | Where-Object {$_.PSIsContainer -eq $true} | Sort-Object
foreach ($i in $colItems) {
$subFolderItems = Get-ChildItem $i.FullName -recurse -force | Where-Object {$_.PSIsContainer -eq $false} | Measure-Object -property Length -sum | Select-Object Sum
$i.FullName + ” — ” + “{0:N2}” -f ($subFolderItems.sum / 1GB) + ” GB”
}
````

## 1.4. Windows Device Troubleshooting

### 1.4.1. Collect Azure AD Info

```powershell
<#
Collect basic information useful in troubleshooting of a Windows device.
#>

# Create folder for all files
New-Item "C:\SystemDiagnosticCollection" -itemType Directory
Write-host 'Folder created at C:\SystemDiagnosticCollection' #not finished yet, it'll print out only.

Write-host 'Basic AAD Info'
dsregcmd /status | select-string -Pattern 'Device Name'  | Out-File -FilePath C:\SystemDiagnosticCollection\Basic-AAD-Info.txt
dsregcmd /status | select-string -Pattern 'AzureADJoined' | Out-File -Append -FilePath C:\SystemDiagnosticCollection\Basic-AAD-Info.txt
dsregcmd /status | select-string -Pattern 'DeviceId' | Out-File -Append -FilePath C:\SystemDiagnosticCollection\Basic-AAD-Info.txt
dsregcmd /status | select-string -Pattern 'TenantName' | Out-File -Append -FilePath C:\SystemDiagnosticCollection\Basic-AAD-Info.txt

write-host 'Single Sign on Info'
dsregcmd /status | select-string -Pattern 'AzureAdPrt' | Out-File -FilePath C:\SystemDiagnosticCollection\Single-Sign-on-Info.txt
dsregcmd /status | select-string -Pattern 'AzureAdPrtUpdateTime' | Out-File -Append -FilePath C:\SystemDiagnosticCollection\Single-Sign-on-Info.txt
dsregcmd /status | select-string -Pattern 'RefreshPrtDiagnostics' | Out-File -Append -FilePath C:\SystemDiagnosticCollection\Single-Sign-on-Info.txt

Write-host 'System Information'
systeminfo | Select-String -Pattern 'OS Name' | Out-File -FilePath C:\SystemDiagnosticCollection\System-Information.txt
systeminfo | Select-String -Pattern 'OS Version' | Out-File -Append -FilePath C:\SystemDiagnosticCollection\System-Information.txt
systeminfo | Select-String -Pattern 'Original Install Date' | Out-File -Append -FilePath C:\SystemDiagnosticCollection\System-Information.txt
systeminfo | Select-String -Pattern 'System Boot Time' | Out-File -Append -FilePath C:\SystemDiagnosticCollection\System-Information.txt
systeminfo | Select-String -Pattern 'Time Zone' | Out-File -Append -FilePath C:\SystemDiagnosticCollection\System-Information.txt
systeminfo | Select-String -Pattern 'Total Physical Memory' | Out-File -Append -FilePath C:\SystemDiagnosticCollection\System-Information.txt
```
### 1.4.2. Collect Device troubleshooting info

```powershell
<# Script to collect machine information during troubleshooting & save these into a zip file for engineer to extract.
Information to collect:
- Machine information.
- Machine IP addressing information.
- Recent event Logs (2 Hours)
- Azure AD Join Status
- Printer Info
- Group Policy result
#>

# Create folder for all files
New-Item "C:\SystemDiagnosticCollection" -itemType Directory
Write-host 'Folder created at C:\SystemDiagnosticCollection'

# Collect System information
systeminfo | Out-File -FilePath C:\SystemDiagnosticCollection\SystemInfo.txt
Write-host 'System Info Collected'

# Collect IP address information and connectivity tests
ipconfig /all | Out-File -FilePath C:\SystemDiagnosticCollection\IpAddressingInfo.txt
Write-host 'ipconfig ran successfully'

# Test Connection to Google
Test-NetConnection www.google.com -InformationLevel "Detailed" | Out-File -FilePath C:\SystemDiagnosticCollection\pingtoGoogle-FQDN.txt
# Time Stamped Ping test
test-connection 8.8.8.8 -count 10 | format-table -AutoSize @{n='TimeStamp';e={Get-Date}},__SERVER, Address, ProtocolAddress, ResponseTime | Out-File -FilePath C:\SystemDiagnosticCollection\PingtoGoogle-IP.txt
Write-host 'Network Tests ran successfully'

# Collect event log information

# Collect System Logs
Get-Eventlog -LogName System -EntryType Error,Warning -After (Get-Date).AddHours(-2) | Export-csv c:\SystemDiagnosticCollection\System_Logs.csv -notype
# Collect Application Logs
Get-Eventlog -LogName Application -EntryType Error,Warning -After (Get-Date).AddHours(-2) | Export-csv c:\SystemDiagnosticCollection\Application_Logs.csv -notype
Write-host 'Successfully gathered Event Logs'

# Collect Azure AD Joined Status information
dsregcmd /status | Out-File -FilePath C:\SystemDiagnosticCollection\Hybrid-Joined-status.txt
Write-host 'Successfully checked for Hybrid-Joined status'

# Collect printer information
Get-printer | Out-File -FilePath C:\SystemDiagnosticCollection\Printer-Info.txt
Write-host 'Gathered Printer info'

# Get Verbose GP Result
gpresult /v | Out-file -FilePath C:\SystemDiagnosticCollection\GpResult.txt
Write-host 'Gathered GPO status'

# Compress to a Zip and copy to the Downloads folder of logged in user.
Compress-Archive -Path C:\SystemDiagnosticCollection C:\SystemDiagnosticCollectio\SystemDiagnostics.zip
Write-host 'Zip file created within C:\SystemDiagnosticCollection folder.'
```
### 1.4.3. Collect Network troubleshooting info

```powershell
<# Script to collect machine information during troubleshooting & save these into a zip file for engineer to extract.
Information to collect:
- Ipconfig /all
- timestamp ping to internet.
- timestamp ping to gateway.
- Network adapter information.
#>

# Create folder for all files
New-Item "C:\NetworkDiagnosticCollection" -itemType Directory
Write-host 'Folder created at C:\NetworkDiagnosticCollection'

# Collect network report, grab this from the depositied location, usually here, "C:\ProgramData\Microsoft\Windows\WlanReport\"", Copy the whole folder to the C:\NetworkDiagnosticCollection folder.
netsh wlan show wlanreport
Copy-Item -Path C:\ProgramData\Microsoft\Windows\WlanReport\* -Destination C:\NetworkDiagnosticCollection

# Collect ipconfig information
ipconfig /all | Out-File -FilePath C:\NetworkDiagnosticCollection\IpAddressingInfo.txt

# Timestamped ping to internet
test-connection 8.8.8.8 -count 10 | format-table -AutoSize @{n='TimeStamp';e={Get-Date}},__SERVER, Address, ProtocolAddress, ResponseTime | Out-File -FilePath C:\NetworkDiagnosticCollection\PingtoGoogle.txt
test-connection 8.8.4.4 -count 10 | format-table -AutoSize @{n='TimeStamp';e={Get-Date}},__SERVER, Address, ProtocolAddress, ResponseTime | Out-File -FilePath C:\NetworkDiagnosticCollection\PingtoGoogle2.txt
Write-host 'Network Tests ran successfully'

$ipconfig = ipconfig | Format-List
write-output $ipconfig
$GatewayIp = Read-host -prompt "Enter Gateway IP address"

test-connection $GatewayIp -count 20 | format-table -AutoSize @{n='TimeStamp';e={Get-Date}},__SERVER, Address, ProtocolAddress, ResponseTime | Out-File -FilePath C:\NetworkDiagnosticCollection\PingtoGateway.txt

# Get Network Adapater Information
Get-NetAdapter | Format-List | Out-File -FilePath C:\NetworkDiagnosticCollection\NetworkAdapterInfo.txt
Write-Host Saved network adapter settings successufully

# Compress to a Zip and copy to the Downloads folder of logged in user.
Compress-Archive -Path C:\NetworkDiagnosticCollection C:\NetworkDiagnosticCollection\NetworkDiagnostics.zip
Write-host 'Zip file created within C:\NetworkDiagnosticCollection folder.'
```

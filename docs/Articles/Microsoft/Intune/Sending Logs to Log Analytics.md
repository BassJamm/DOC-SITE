---
sidebar_position: 2
id: Sending Logs to Log Analytics
title: Sending Logs to Log Analytics
tags: [Intune]
---
Microsoft Article - [Send log data to storage, event hubs, or log analytics in Intune](https://learn.microsoft.com/en-us/mem/intune/fundamentals/review-logs-using-azure-monitor)

## Logs that can be ingested

Microsoft Intune includes built-in logs that provide information about your environment:

- **Audit Logs** shows a record of activities that generate a change in Intune, including create, update (edit), delete, assign, and remote actions.
- **Operational Logs** show details on users and devices that successfully (or failed) to enroll, and details on non-compliant devices.
- **Device Compliance Organizational Logs** show an organizational report for device compliance in Intune, and details on non-compliant devices.
- **IntuneDevices** show device inventory and status information for Intune enrolled and managed devices.

## Notes

### Benefits

- The main benefit of using Log Analytics is the visualisation, monitoring, and alerting on the connected data.
- Archive the data to review at a later date.
- Stream the logs into Azure Event hub for review in other 3rd party tools.

### Cons (Sort of)

**All** of the above logs can be found within the Intune portal, `login to EndPoint Manager (Intune) > Devices > Monitor`.

  - **Audit Logs** - `login to EndPoint Manager (Intune) > Devices > Monitor > Other > Device actions`.
  - **Operational Logs** - `login to EndPoint Manager (Intune) > Devices > Monitor > Enrollment > Enrollment Failures` .and `login to EndPoint Manager (Intune) > Devices > Monitor > Compliance > Noncompliant devices`.
  - **Device Compliance Organizational Logs** -  `login to EndPoint Manager (Intune) > Reports > Device compliance`.
  - **IntuneDevices** - `login to EndPoint Manager (Intune) > Devices >All Devices`.

## Setup sending data

[Microsoft link to instructions to set this up](https://learn.microsoft.com/en-us/mem/intune/fundamentals/review-logs-using-azure-monitor#send-logs-to-azure-monitor).

## Cost estimations and Dependancies

[Microsoft link - Storage size for activity logs](https://learn.microsoft.com/en-us/mem/intune/fundamentals/review-logs-using-azure-monitor#storage-size-for-activity-logs).
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9301],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>h});var o=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=o.createContext({}),u=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return o.createElement(s.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),p=u(n),d=a,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||r;return n?o.createElement(h,i(i({ref:e},c),{},{components:n})):o.createElement(h,i({ref:e},c))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[p]="string"==typeof t?t:a,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9573:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:2,id:"Create an Automation Account",title:"Create an Automation Account",tags:["Azure","Automation","Scripting"]},i=void 0,l={unversionedId:"Guides/Create an Automation Account",id:"Guides/Create an Automation Account",title:"Create an Automation Account",description:"Run As accounts are being deprecated, managed identities are replacing this.",source:"@site/docs/Guides/Create an Automation Account.md",sourceDirName:"Guides",slug:"/Guides/Create an Automation Account",permalink:"/Guides/Create an Automation Account",draft:!1,tags:[{label:"Azure",permalink:"/tags/azure"},{label:"Automation",permalink:"/tags/automation"},{label:"Scripting",permalink:"/tags/scripting"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"Create an Automation Account",title:"Create an Automation Account",tags:["Azure","Automation","Scripting"]},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/category/guides"},next:{title:"Setup Azure Backup",permalink:"/Guides/Setup Azure Backup"}},s={},u=[{value:"Outline",id:"outline",level:2},{value:"Setup the Resource Group and Automation Account.",id:"setup-the-resource-group-and-automation-account",level:2},{value:"Setup Automation Runbook",id:"setup-automation-runbook",level:2},{value:"Install any Modules",id:"install-any-modules",level:2},{value:"Test Script",id:"test-script",level:2},{value:"Create the Script",id:"create-the-script",level:3},{value:"Test Script",id:"test-script-1",level:3},{value:"Setup the Schedule",id:"setup-the-schedule",level:2},{value:"Testing",id:"testing",level:2},{value:"Testing the script",id:"testing-the-script",level:3},{value:"Error handling",id:"error-handling",level:4},{value:"Confirm the data export",id:"confirm-the-data-export",level:3},{value:"Further notes",id:"further-notes",level:2}],c={toc:u};function p(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Run As accounts deprecation",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Run As accounts are being deprecated, managed identities are replacing this.")),(0,a.kt)("h2",{id:"outline"},"Outline"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Setup the Resource Group and Automation Account."),(0,a.kt)("li",{parentName:"ol"},"Setup the Identity for the Automation Account, this is key to running scripts gainst Azure Active Directoy and Office 365 resources. "),(0,a.kt)("li",{parentName:"ol"},"Create ourselves a Runbook, that sits inside the Automation Account. "),(0,a.kt)("li",{parentName:"ol"},"Install the relevant modules for the code we want to run."),(0,a.kt)("li",{parentName:"ol"},"Write ourselves a little script. "),(0,a.kt)("li",{parentName:"ol"},"Setup a schedule for the Runbook.")),(0,a.kt)("h2",{id:"setup-the-resource-group-and-automation-account"},"Setup the Resource Group and Automation Account."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to the Azure portal."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Search")," for Automation Account in the search bar."),(0,a.kt)("li",{parentName:"ol"},"Select the ",(0,a.kt)("strong",{parentName:"li"},"Automation Account")," option, ",(0,a.kt)("strong",{parentName:"li"},"Click create")," in the middle of the screen ",(0,a.kt)("strong",{parentName:"li"},"or Click +Add")," in the top left."),(0,a.kt)("li",{parentName:"ol"},"Fill in the necessary information.",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Resource Group Name (Create one if needs be)."),(0,a.kt)("li",{parentName:"ol"},"Name."),(0,a.kt)("li",{parentName:"ol"},"Region"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("img",{alt:"Basic info",src:n(2312).Z,width:"904",height:"570"}))))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Make sure you Select the same region as the resources you want to query, if the account is to query something else, like Azure AD or Office 365, the region is not so important.")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Select the ",(0,a.kt)("strong",{parentName:"li"},"Advanced tab")," and Select the best option for you.",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"System assigned"),", is attached to the automation account it lives and dies with the automation account resource."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"User assigned"),", is one you setup yourself in Azure AD and can be used by multiple resources and is completely seperate to your automation account."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("img",{alt:"Basic info",src:n(1251).Z,width:"792",height:"429"})))),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Review + Create")," to setup the resource.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You'll need to assign Azure ADroles and App Permissions to the System or User managed Identity, Microsoft have decided not to make this easy and it needs to be done via command line.")),(0,a.kt)("h2",{id:"setup-automation-runbook"},"Setup Automation Runbook"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Sign in to the Azure portal."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Search for")," and Select ",(0,a.kt)("strong",{parentName:"li"},"Automation Accounts"),"."),(0,a.kt)("li",{parentName:"ol"},"On the Automation Accounts page, ",(0,a.kt)("strong",{parentName:"li"},"Select your Automation account")," from the list."),(0,a.kt)("li",{parentName:"ol"},"From the Automation account, ",(0,a.kt)("strong",{parentName:"li"},"Select Runbooks")," under Process Automation to open the list of runbooks."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Click Create")," a runbook and fill in the information below.",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Name ."),(0,a.kt)("li",{parentName:"ol"},"Select its type."),(0,a.kt)("li",{parentName:"ol"},"Select the Runtime version"),(0,a.kt)("li",{parentName:"ol"},"Enter applicable Description"))),(0,a.kt)("li",{parentName:"ol"},"Click Create to create the runbook.")),(0,a.kt)("h2",{id:"install-any-modules"},"Install any Modules"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Sign in to the Azure portal."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Search for")," and Select ",(0,a.kt)("strong",{parentName:"li"},"Automation Accounts"),"."),(0,a.kt)("li",{parentName:"ol"},"On the Automation Accounts page, ",(0,a.kt)("strong",{parentName:"li"},"Select your Automation account")," from the list."),(0,a.kt)("li",{parentName:"ol"},"From the Automation account, ",(0,a.kt)("strong",{parentName:"li"},"Select Modules")," under Shared Resources.",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("img",{alt:"Modules blade location",src:n(9664).Z,width:"1824",height:"977"})))),(0,a.kt)("li",{parentName:"ol"},"In here you can see a list of currently installed modules and you can add more by Clicking on the +Add a module button.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You may find that you have to search around a bit for the module that you do actually want and when you do find the module you want, search for the command that you want to use, sometimes the module name is right but the command is missing!"),(0,a.kt)("p",{parentName:"admonition"},"Microsoft Graph is probably the most well rounded module but, it's quite finicky to use, otherwise stick with the Az Command line.")),(0,a.kt)("h2",{id:"test-script"},"Test Script"),(0,a.kt)("h3",{id:"create-the-script"},"Create the Script"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to your runbook."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Click Edit")," at the top."),(0,a.kt)("li",{parentName:"ol"},"Here you can ",(0,a.kt)("strong",{parentName:"li"},"enter your script"),".")),(0,a.kt)("p",null,"Useful options on the left hand side to note:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"CMDLETS"),", which you can use to find commands from the installed modules."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ASSETS"),", which will show you the various resources available to your runbooks which are saved within your automation account resource.")),(0,a.kt)("h3",{id:"test-script-1"},"Test Script"),(0,a.kt)("p",null,"Once your done and ready to test."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Click on Test pane")," at the top."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Click Start")," in the top left to being running the scrpt.")),(0,a.kt)("p",null,"I found it really hard to get my head around how this works for some reason. So expect that this may take quite a few tries to get right."),(0,a.kt)("admonition",{title:"Storage Account Key",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Before you can use the script as a base, you'll need to store the storage account key as a variable in your Automation account."),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"Open your ",(0,a.kt)("strong",{parentName:"li"},"Automation Account"),"."),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("strong",{parentName:"li"},"Variables")," under Shared Resources."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Add a variable"),"."),(0,a.kt)("li",{parentName:"ol"},"Create a new ",(0,a.kt)("strong",{parentName:"li"},"string variable"),".")),(0,a.kt)("p",{parentName:"admonition"},"See the script for how to reference these in your runbooks.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'# Ensures you do not inherit an AzContext in your runbook\nDisable-AzContextAutosave -Scope Process | Out-Null\n\n#Storage Account Information \n$StorageACCKey = Get-AutomationVariable -Name \'stgacckey01\' \n$ContainerName = "Enter the blob container name"\n\n# Connect using a Managed Service Identity\ntry {\n    Connect-AzAccount -Identity\n}\ncatch{\n    Write-Output "Unable to login. Aborting."; \n    exit\n}\n\n$Users = Get-AzADUser | Select-Object DisplayName, Id, Mail, UserPrincipalName\n\nWrite-Output $Users\n\n# Exports the data in the $Users variable into a local environmental variable that will store the information whilst running in the Automation account. \n$Users | Export-Csv "$Env:temp\\Users.csv" -notypeinformation\n\n# Creates a new context to enable connection to the storage account. \n$Context = New-AzureStorageContext -StorageAccountName "whautomationfiledump" -StorageAccountKey $StorageACCKey\n\n# This copes the csv file in the $Env:temp/MFAState.csv variable and copies it to the blob. \nSet-AzureStorageBlobContent -Context $Context -Container $ContainerName -File "$Env:temp\\Users.csv" -Blob "Users.csv" -force\n')),(0,a.kt)("admonition",{title:"In my experience",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The test window is not like a command promtp and will not output the commands running or anything at all apart from really confusing errors. Try to build error catching into your script, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"try, catch")," commands to write the errors to the promtp for debugging. More in this in the testing section at the bottom.")),(0,a.kt)("h2",{id:"setup-the-schedule"},"Setup the Schedule"),(0,a.kt)("p",null,"This has been mostly regurgitated from ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/automation/shared-resources/schedules#create-a-new-schedule-in-the-azure-portal"},"this Microsoft link here.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From your Automation account, on the left-hand pane ",(0,a.kt)("strong",{parentName:"li"},"Select Schedules")," under Shared Resources."),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Add a schedule"),"."),(0,a.kt)("li",{parentName:"ol"},"Select whether the schedule runs once or on a reoccurring schedule by Selecting Once or Recurring.",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"If you Select Once, ",(0,a.kt)("strong",{parentName:"li"},"specify a start time")," and then ",(0,a.kt)("strong",{parentName:"li"},"Select Create"),"."),(0,a.kt)("li",{parentName:"ol"},"If you Select Recurring, ",(0,a.kt)("strong",{parentName:"li"},"specify a start time"),". For Recur every, ",(0,a.kt)("strong",{parentName:"li"},"Select how often")," you want the runbook to repeat. Select by hour, day, week, or month."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Press Create")," to complete.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You must publish the runbook before you can assign the schedule to it.")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Head back to your Runbook."),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Link to schedule "),"at the top."),(0,a.kt)("li",{parentName:"ol"},"Click the option to ",(0,a.kt)("strong",{parentName:"li"},"Link a schedule to your runbook"),",  ",(0,a.kt)("strong",{parentName:"li"},"Select the schedule")," you created from the list."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Click OK")," to complete.")),(0,a.kt)("p",null,"Example schedule below"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Modules blade location",src:n(1527).Z,width:"371",height:"1117"})),(0,a.kt)("h2",{id:"testing"},"Testing"),(0,a.kt)("h3",{id:"testing-the-script"},"Testing the script"),(0,a.kt)("h4",{id:"error-handling"},"Error handling"),(0,a.kt)("p",null,"The test pane window for the most part will not output useful errors or show you how the script is running. I'd suggest building error handling and status updates into your script if you wish during debugging, it will help immensely."),(0,a.kt)("p",null,"An example of the ",(0,a.kt)("inlineCode",{parentName:"p"},"try, catch")," command sytax is below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'# Connect using a Managed Service Identity\ntry {\n    Connect-AzAccount -Identity\n}\ncatch{\n    Write-Output "Unable to login. Aborting."; \n    exit\n}\n')),(0,a.kt)("p",null,"I'd also suggest using ",(0,a.kt)("inlineCode",{parentName:"p"},"write-output")," all over the place to confirm progress and variables etc."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Shout out to the VS code module for Automation Accounts, it'll let you pull down the runbook contents and edit in VsCode and upload it again.")),(0,a.kt)("h3",{id:"confirm-the-data-export"},"Confirm the data export"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to your ",(0,a.kt)("strong",{parentName:"li"},"storage account"),"."),(0,a.kt)("li",{parentName:"ol"},"Click on the ",(0,a.kt)("strong",{parentName:"li"},"File shares or Containers option"),", wherever you saved your data to."),(0,a.kt)("li",{parentName:"ol"},"Click into the share\\container, ",(0,a.kt)("strong",{parentName:"li"},"find your file")," and Click on the ",(0,a.kt)("strong",{parentName:"li"},"3 dots")," to the right of it.",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("img",{alt:"Modules blade location",src:n(6947).Z,width:"512",height:"483"})))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Click View\\edit"),", it should display a basic output of the file.")),(0,a.kt)("h2",{id:"further-notes"},"Further notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Run As accounts are being deprecated, this method is by far the easiest to use when trying to pull info from AzureAD and Office 365.")))}p.isMDXComponent=!0},9664:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/autoacc-Module-install-000001-a747f8a1ea412b60a0fdcbd5c3045d6b.jpg"},1527:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/autoacc-Schedule-setup-001-cf4ff8d825f16c3129385f605c463dbc.jpg"},2312:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/autoacc-Setup-install-001-883816d3a91a9d1888fa1f5603876148.jpg"},1251:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/autoacc-Setup-install-002-5654d2460fa681b3c2f4a443ae875bb3.jpg"},6947:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/autoacc-testing-exporteddata-002-6b4454af095c3c05211ba1dedd81be21.jpg"}}]);
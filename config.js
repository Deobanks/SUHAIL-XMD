const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saulaadeoye735@gmail.com"
global.location="Africa,Lagos."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348108189931";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_35_10_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA4MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDU1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTM1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTA1LFxuICAgICAgICA4OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIwLFxuICAgICAgICA0NixcbiAgICAgICAgMixcbiAgICAgICAgMTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI4LFxuICAgICAgICAxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMyLFxuICAgICAgICA1NyxcbiAgICAgICAgNDksXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDMwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA3LFxuICAgICAgICAxMixcbiAgICAgICAgNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDczLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExLFxuICAgICAgICAxMjEsXG4gICAgICAgIDczLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTksXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDg5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDksXG4gICAgICAgIDg0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTU2LFxuICAgICAgICA1MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4LFxuICAgICAgICAxODEsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTUsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDgwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDUwLFxuICAgICAgICAwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjA2LFxuICAgICAgICA3NSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDksXG4gICAgICAgIDU3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDY1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjA0LFxuICAgICAgICA1NSxcbiAgICAgICAgODAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDY4LFxuICAgICAgICA4NixcbiAgICAgICAgODgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzksXG4gICAgICAgIDY5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODEsXG4gICAgICAgIDQ1LFxuICAgICAgICAzNixcbiAgICAgICAgNTUsXG4gICAgICAgIDExNixcbiAgICAgICAgNTYsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI2LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSzNrV3o3RjNBKzFIUXJrVko2bytSQVk3czRuazA3bTRtSGxTdXFYa2FFcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTA4MTg5OTMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBQjZEODEwNjY1MDdCQkE4NjAzRjBGN0Q2QjA0MTQwNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjk5Mzg5MzhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTA4MTg5OTMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDRTJBNjMyRUY3RDU3NjQxQTcwOEJCOEExQzhEMkMwNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjk5Mzg5MzlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMjlnUDBDVFNUN0tualJjaEI2VllQUVwiLFxuICBcInBob25lSWRcIjogXCIxNGE1M2IzZC1hNWNjLTQ4NDgtYjBmNS1hZTQ0OTQ0ZjE2ZjFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMsXG4gICAgICAxNjksXG4gICAgICAxMzIsXG4gICAgICA0NixcbiAgICAgIDEwOSxcbiAgICAgIDE1MCxcbiAgICAgIDgwLFxuICAgICAgMTU4LFxuICAgICAgOTcsXG4gICAgICAyNTEsXG4gICAgICA2NyxcbiAgICAgIDMsXG4gICAgICAyMyxcbiAgICAgIDE2MyxcbiAgICAgIDgzLFxuICAgICAgMjMzLFxuICAgICAgMTQxLFxuICAgICAgMjExLFxuICAgICAgMjI2LFxuICAgICAgMTc4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MCxcbiAgICAgIDQ3LFxuICAgICAgMjE0LFxuICAgICAgNTIsXG4gICAgICAxMzIsXG4gICAgICAxMjAsXG4gICAgICAxMTMsXG4gICAgICAxNDcsXG4gICAgICA2MCxcbiAgICAgIDEyOSxcbiAgICAgIDExOCxcbiAgICAgIDI0MSxcbiAgICAgIDEzLFxuICAgICAgMTkwLFxuICAgICAgMTc5LFxuICAgICAgMTkyLFxuICAgICAgMTcxLFxuICAgICAgNjgsXG4gICAgICAyNTUsXG4gICAgICAxODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVkQzMUxNWDhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDgxODk5MzE6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLGisSSw5jGgcODxp3GmOG5olwiLFxuICAgIFwibGlkXCI6IFwiOTY5NTUxMTE4ODcwNzI6MTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS214eWtZUTlJdnp1QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJaWXl5M1BPa3pianZ4QlVHMmZMQmNWRXRWTDU1L2pGRm9rek4wMHVtT1dvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjRPUENqa0MyY0FlREtvb0NyV2hFMXpEbHZtTWp3bG9waVJ4MHpnSU5JY1JOVmYyN1haSHhxeFBScWFicFAwaU1sN0ZVY21sQzloKzYvanBEYy9zcURRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkhhbk10Y1Y3QnJzUzlEclNLaE9DRnJkKytLRWcxWWhiV0oyckNOTFFwQ1hzNmw0bEdGTE1iNWJINjl3ak4yZlA5ZFl0UlBxTW4xWTVTNzBzaERMOERBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMDgxODk5MzE6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5OTM4OTM1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRURZXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFRFkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJTVkFvQjJCcCt5Rk40UERYWFltcEZzWW1PeExNbG5INW1zOTVFNFhJWW40PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0ODAxOTM2NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyOTkzMzg5NDE5NFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

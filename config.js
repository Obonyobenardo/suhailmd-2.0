const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




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

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_37_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxLFxuICAgICAgICA5NixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDksXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM2LFxuICAgICAgICA4OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDg2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDMwLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODUsXG4gICAgICAgIDI1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDUxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA4NixcbiAgICAgICAgMjUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDksXG4gICAgICAgIDUzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxLFxuICAgICAgICA4NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYwLFxuICAgICAgICA4NixcbiAgICAgICAgMTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY5LFxuICAgICAgICA0MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMixcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDY2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTExLFxuICAgICAgICA2NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDMzLFxuICAgICAgICAzNixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTksXG4gICAgICAgIDQyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTczLFxuICAgICAgICAxMDgsXG4gICAgICAgIDQwLFxuICAgICAgICA4NixcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJVVzJLRTNhL1EvSXRSNytPVksxVThiRW9hVHlTNkNsblgyZGFXUWM0Wmh3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIxcGQwelZwY1RlU19GTDhxc0l4bmh3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjE1OTkxMzgxLTgxZDMtNDVjZC05NDhlLTljYjhmNDE4ZDRjZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzIsXG4gICAgICA0MSxcbiAgICAgIDE2MSxcbiAgICAgIDQwLFxuICAgICAgMjI1LFxuICAgICAgMTkwLFxuICAgICAgMTMyLFxuICAgICAgMTA5LFxuICAgICAgMjEyLFxuICAgICAgMTE3LFxuICAgICAgMTQ1LFxuICAgICAgMjQ4LFxuICAgICAgNDcsXG4gICAgICA1MyxcbiAgICAgIDE5MSxcbiAgICAgIDQsXG4gICAgICA0NCxcbiAgICAgIDE5NCxcbiAgICAgIDIxNSxcbiAgICAgIDIyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzQsXG4gICAgICA0NyxcbiAgICAgIDEwOCxcbiAgICAgIDEzNCxcbiAgICAgIDE2NCxcbiAgICAgIDEwMCxcbiAgICAgIDEzNCxcbiAgICAgIDc4LFxuICAgICAgMTMzLFxuICAgICAgMzcsXG4gICAgICAxMTMsXG4gICAgICAxMTIsXG4gICAgICAxNjIsXG4gICAgICA2LFxuICAgICAgNTYsXG4gICAgICAxNDIsXG4gICAgICAxNDYsXG4gICAgICA2MCxcbiAgICAgIDk4LFxuICAgICAgNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRNlBBODZXNlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0Nzk5NDE0MjQ2OjQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDM0NTYxMjQwNjg1OTo0NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJeS9vSHNRcDk3V3VnWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlh0M0xoUkk2UWpVT3BLdUhYUG9vZ2RmaTFmNUorNzlaYzNHT1Y3SVVlRXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiK2lieU1kT0Z6MG9iVW1acDhVd1R5anFEdzRxbHVFWnA4aVF1MHplM2NMZmlOenpta29YeTJNZFBCa21jUTI3djlJam0rM2RKMTdnNko1UGk0eHNLRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZEtSWmNqT1Y4NkVIV1JKM2R2NThzWEwycGNUTTBhVzlFSTlabzF5WlBpSlQ5Q3hLS2JlTWRqMEFCWUpOUUlDaXMxOUJPQ1FMc2dYR2p5WVV6Q2N5QXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0Nzk5NDE0MjQ2OjQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM2Njg2NTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEMjFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUQyMS5qc29uIjogIntcImtleURhdGFcIjpcIlFSWE9vS2gxa3Q0aXEzUU56MkV5U3lhQnAyRnVPY1BOVE9abDQ3SGs0N289XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjU4NDgyMDUyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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

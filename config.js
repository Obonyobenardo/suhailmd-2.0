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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_30_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI2LFxuICAgICAgICA4OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDExNixcbiAgICAgICAgNzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDgzLFxuICAgICAgICA4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTA2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODgsXG4gICAgICAgIDk0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ1LFxuICAgICAgICAzMixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjU1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDgzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjMwLFxuICAgICAgICA5NixcbiAgICAgICAgMTIxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI2LFxuICAgICAgICA3NSxcbiAgICAgICAgNixcbiAgICAgICAgNDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE5LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc5LFxuICAgICAgICA4LFxuICAgICAgICAxMixcbiAgICAgICAgNzcsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMixcbiAgICAgICAgNixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDgsXG4gICAgICAgIDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTkxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTMzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3NixcbiAgICAgICAgNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMCxcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDcsXG4gICAgICAgIDM1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDc3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTg1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDYsXG4gICAgICAgIDk1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTcxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjE5LFxuICAgICAgICA2NSxcbiAgICAgICAgMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDUxLFxuICAgICAgICAxNSxcbiAgICAgICAgNyxcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAzNixcbiAgICAgICAgMjAsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjksXG4gICAgICAgIDgyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0LFxuICAgICAgICA5MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDgzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQzLFxuICAgICAgICA1MixcbiAgICAgICAgMjExLFxuICAgICAgICAxNDUsXG4gICAgICAgIDk0LFxuICAgICAgICA0OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQzLFxuICAgICAgICA0MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE5LFxuICAgICAgICA1NixcbiAgICAgICAgMTczLFxuICAgICAgICA0MSxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiS0kyZ0VnenlQQmNHQ211bmhUUTNwdFRYTW13VDBGdmhpVnNSczRuaENKRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOEkyblpPOTFTX3EzbkdLQWtlbHRDUVwiLFxuICBcInBob25lSWRcIjogXCIzY2JkNGViNi00MWEwLTQ3NTEtOThmMS1jN2QzMTYzNTk1YjVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOCxcbiAgICAgIDE5MixcbiAgICAgIDk4LFxuICAgICAgNzIsXG4gICAgICAxLFxuICAgICAgNDEsXG4gICAgICAzMSxcbiAgICAgIDIwNyxcbiAgICAgIDIzLFxuICAgICAgNDgsXG4gICAgICAxMSxcbiAgICAgIDE0MixcbiAgICAgIDE2MSxcbiAgICAgIDEwLFxuICAgICAgNixcbiAgICAgIDIwMyxcbiAgICAgIDEwMSxcbiAgICAgIDcyLFxuICAgICAgNDksXG4gICAgICAxNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAwLFxuICAgICAgMTE0LFxuICAgICAgNTIsXG4gICAgICAxNjksXG4gICAgICA5NyxcbiAgICAgIDY5LFxuICAgICAgMjUwLFxuICAgICAgNTIsXG4gICAgICA1NSxcbiAgICAgIDIxNSxcbiAgICAgIDE5LFxuICAgICAgOTgsXG4gICAgICAyNSxcbiAgICAgIDE1NSxcbiAgICAgIDIzNixcbiAgICAgIDE1MSxcbiAgICAgIDE0LFxuICAgICAgMTEwLFxuICAgICAgMTE3LFxuICAgICAgMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSDdIUVdWUlBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc5OTQxNDI0Njo0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjAzNDU2MTI0MDY4NTk6NDVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXUvb0hzUS9MN1d1Z1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYdDNMaFJJNlFqVU9wS3VIWFBvb2dkZmkxZjVKKzc5WmMzR09WN0lVZUV3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImQ5OUlldzY5dEUzNm92YlhiV0RlTzRXaUpNU2IrOXErSkdMRnh6Y21zSWxWa1NpVGRKOUdFYXN0R3dTYWk0MlpaZ0JrUTVUZ1p2akVQQk1ld2w4ZUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImdoQ1lvYW5COUFic0MzNU1za3dqd3hia0g1c0xpaGFZZzJld252bDRwVmExaDVCcFpSLzZPK0VBOXB1MEc1K0xyaks3eEkwUU14NytPTkZqL2hzbEFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc5OTQxNDI0Njo0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNjY0NjQxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRDIxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEMjEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJRUlhPb0toMWt0NGlxM1FOejJFeVN5YUJwMkZ1T2NQTlRPWmw0N0hrNDdvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI1ODQ4MjA1MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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

const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    pattern: "bing",
    desc: "bing chat.",
    category: "ai",
    react: "🚀",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let data = await fetchJson(`https://gpt4.guruapi.tech/bing?q=${q}`)
return reply(`${data.data}`)
 }catch(e){
  console.log(e)
  reply(`${e}`)
}
})

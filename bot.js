﻿const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "1";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "420170369249574912"; // ايدي السررفر
var channel = "510422575873261569";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**sb7an allh , sb7an allh , sb7an allh , sb7an allh , sb7an allh , sb7an allh , sb7an allh , sb7an allh , sb7an allh , sb7an allh , sb7an allh , sb7an allh , sb7an allh , sb7an allh , sb7an allh , sb7an allh , sb7an allh , sb7an allh , **')
    },305);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 
client.login("NTI2MzIzMDk2NDUwMjM2NDE2.DwDzXg.X5ByfZ07YnOxK_elSfmjGTD2TuI");

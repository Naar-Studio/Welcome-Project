const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
const { CanvasSenpai } = require("canvas-senpai");
const canva = new CanvasSenpai();
const db = require('quick.db');
/* Naar - Team */

client.on('message', message => {
  if(message.content.startsWith(prefix + "set-welcome")){
    if(!message.guild) return;
    if(message.author.bot) return;
    if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Dont Have Prems \`MANAGE_GUILD\`**')
    let ch = message.mentions.channels.first()
    if(!ch) return message.channel.send('**Please Mention This Room**')
    db.set(`ch-${message.guild.id}`, ch)
    message.channel.send(`**Done Select This Room ${ch}**`)

//Naar Team 
client.on('guildMemberAdd', async member => {
    if (!ch) return;
   let data = await canva.welcome(member, { link: "https://wallpapercave.com/wp/wp5128415.jpg" })
 
    const attachment = new Discord.MessageAttachment(
      data,
      "welcome-image.png"
    );
 let embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('**New Member **')
.setDescription (`Welcome to the ${member.guild.name}, ${member.user.username} , ${member.guild.memberCount}`)
ch.send(attachment)
ch.send(embed)
   });
  }
});


/* Naar - Team */ 
require('./server')();
client.login(process.env.token);
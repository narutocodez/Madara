module.exports={ name: 'sg',execute(client, message, args){if(message.member.hasPermission("ADMINISTRATOR")){const Discord = require('discord.js');guild=message.guild;channel=guild.channels.cache.get("860264652863438898");args=message.content.split(" ").splice(1);suggestion=args.join(" ");message.delete();const embed=new Discord.MessageEmbed() .setColor('RANDOM') .setTitle(`Madara's Suggestions`) .setDescription(suggestion) .setFooter(`Suggested by ${message.author.tag}`);channel.send(embed).then((msg) =>{msg.react('✅').then(() => msg.react('❌'));}).catch((err)=>{throw err;});}}};
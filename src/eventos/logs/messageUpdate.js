const Discord = require("discord.js");
const db = require('quick.db');

module.exports = {
  name: 'messageUpdate',
  execute: async(oldMessage, newMessage, bot) => {
  const canalogs = db.get(`canalogs_${oldMessage.guild.id}`);
	const canal = oldMessage.guild.channels.cache.get(`${canalogs}`);
  
  let embed = new Discord.MessageEmbed()
    .setTitle(oldMessage.author.tag)
    .setColor('#15226D')
    .setDescription(`**Nova mensagem de editada por ${newMessage.author} **\n\n**Canal da mensagem:** ${oldMessage.channel}\n\n**Mensagem antiga:**\n\`${oldMessage.content}\` \n**Nova mensagem:**\n\`${newMessage.content}\``)
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL({format: "png"}))
    .setTimestamp()
  canal.send(embed)
  }
}
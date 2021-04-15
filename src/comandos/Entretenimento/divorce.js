const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  config: {
    name: "divorce",
    aliases: ['divorce'],
    description: "se separar de um membro. ",
    usage: "divorce"
  },
  run: async (bot, message, args) => {
    let user = message.author;
    let membro = db.get(`casal_${user.id}`)
    let marry = db.get(`marry_${user.id}`)
    if(marry === null) return message.channel.send('**você já está solteiro**').then(msg => {
      msg.delete({ timeout: 10000 })})
    
  const embed = new Discord.MessageEmbed()
     .setColor('#15226D')
     .setDescription(`💔 | você se divorciou de \`${membro.tag}\``)
     message.channel.send(embed).then(msg => {
      msg.delete({ timeout: 15000 })})
     db.delete(`marry_${user.id}`);
     db.delete(`marry_${membro.id}`);
     db.delete(`casalperfil_${user.id}`)
     db.delete(`casalperfil_${membro.id}`)
  }
} 
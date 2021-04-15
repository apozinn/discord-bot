const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
  config: {
    name: "transferir",
    aliases: ['transferir'],
    description: "transfira uma quantia de dinheiro a um membro",
    usage: "transferir"
  },
  run: async (bot, message, args) => {
    let user = message.author;
    let member = message.mentions.users.first()
    if (!member) return message.channel.send("**é necessário mencionar um membro - {quantia} {menção}**")
    let quantia = args[0];
    if(quantia < 0) return message.channel.send('**você pode usar apenas números positivos**')
    if (!quantia) return message.channel.send("**é necessário uma quantia - {quantia} {menção}**")
    if (isNaN(quantia)) return message.reply('**você pode colocar apenas números!**'); 
    let money = await db.fetch(`money_${message.guild.id}_${user.id}`)
     if(money < quantia) return message.channel.send('**você não tem dinheiro o suficiente para transferir**')
     db.add(`money_${message.guild.id}_${member.id}`, quantia)
    db.subtract(`money_${message.guild.id}_${user.id}`, quantia)

    const Embed = new Discord.MessageEmbed()
      .setColor('#15226D')
      .setDescription(`**💵 | você transferiu R$ ${quantia} para ${member} com sucesso**`)
      .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ format: "png" }))
      .setTimestamp()

    message.channel.send(Embed);
  }
}

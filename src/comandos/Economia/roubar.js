const Discord = require('discord.js')
const db = require('quick.db');
const ms = require('parse-ms');

module.exports = {
  config: {
    name: "roubar",
    aliases: ['roubo'],
    description: "rouba outro membro do servidor",
    usage: "roubar"
  },
  run: async (bot, message, args) => {
    let user = message.author;
    let member = message.mentions.users.first(2)[0]
    if (!member) return message.reply('**mencione um membro**')
    let money = await db.fetch(`money_${message.guild.id}_${user.id}`)
    let proteção = await db.fetch(`money_${message.guild.id}_${member.id}`)
    if(proteção < 1) return message.channel.send('**você não pode roubar esse membro, ele não tem dinheiro fora do banco**') 

    let timeout = 600000;
    let author = await db.fetch(`roubo_${message.guild.id}_${user.id}`);

    if (author !== null && timeout - (Date.now() - author) > 0) {
      let time = ms(timeout - (Date.now() - author));
      const espera = new Discord.MessageEmbed()
        .setColor('#15226D')
        .setDescription(`**🕒 | você fez um assalto recentemente, e agora está fugindo da polícia, espere ${time.hours}hrs e ${time.minutes}min para fazer outro assalto**`)
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ format: "png" }))
        .setTimestamp()
      return message.channel.send(espera)
    } else {
      let saque = Math.floor(Math.random() * 100) + 1;
      db.add(`money_${message.guild.id}_${user.id}`, saque)
      db.subtract(`money_${message.guild.id}_${member.id}`, saque)
      db.set(`roubo_${message.guild.id}_${user.id}`, Date.now())
      const embed = new Discord.MessageEmbed()
        .setColor('#15226D')
        .setDescription(`**🔫 | ${user} roubou ${member} com uma pistola e ganhou ${saque}**`)
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ format: "png" }))
        .setTimestamp()
      message.channel.send(embed)
    }
  }
}

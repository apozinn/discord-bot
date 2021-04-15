const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
    config: {
      name: "setautorole",
      aliases: ['setar'],
      description: "seta a tag de novatos",
      usage: "setautole"
    },
    run: (bot, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('**você não tem permissão para isso**');
    let role = message.mentions.roles.first()

    if(!role) {
      const embed1 = new Discord.MessageEmbed()
     .setColor('#15226D')
     .setDescription('**⭕ | mencione a tag que desejar setar para os novatos**')
      return message.reply(embed1)
    }

    db.set(`autorole_${message.guild.id}`, role.id)
    const embed2 = new Discord.MessageEmbed()
        .setTitle('nova tag de novatos:')
        .setColor('#15226D')
        .setDescription(`**✅ | tag de novatos configurada como ${role}**`)
        .setFooter(`${message.guild.name}`, message.guild.iconURL({ format: "png"}))
        .setTimestamp()
    message.channel.send(embed2)
  }
}
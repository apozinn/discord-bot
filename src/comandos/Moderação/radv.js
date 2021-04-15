const Discord = require('discord.js')
const db = require("quick.db")

module.exports = {
    config: {
      name: "radv",
      aliases: ['retiraradv'],
      description: "retirar uma adv",
      usage: "{prefix}radv"
    },
    run: async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_ROLES")) {
      const embed1 = new Discord.MessageEmbed()
     .setColor('#15226D') 
    .setDescription('**⭕ | você não tem permissão para retirar uma adv de alguém**')
      return message.channel.send(embed1)
    }

    const user = message.mentions.members.first()

    if (!user) {
      const embed2 = new Discord.MessageEmbed()
     .setColor('#15226D')
    .setDescription('**⭕ | mencione o membro que deseja retirar as advertências**')
      return message.channel.send(embed2)
    }

    if (message.mentions.users.first().bot) {
      return message.channel.send("**você não pode retirar advertências de bots**")
    }

    if (message.author.id === user.id) {
     const embed3 = new Discord.MessageEmbed()
    .setColor('#15226D')
   .setDescription('**⭕ | você não pode tirar suas próprias advertências**')
      return message.channel.send(embed3)
    }

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    let advs = db.get(`advs_${message.guild.id}_${user.id}`) 

    if (warnings === null) {
      const embed4 = new Discord.MessageEmbed()
     .setColor('#15226D')
    .setDescription('**⭕ | este membro não tem nenhuma advertência**')
      return message.channel.send(embed4)
    }

    db.delete(`warnings_${message.guild.id}_${user.id}`)
    db.delete(`advs_${message.guild.id}_${user.id}`)
    
    const embed5 = new Discord.MessageEmbed() 
   .setColor('#15226D')
  .setDescription(`**✅ | todas as advertências de ${user} foram retiradas com sucesso!**`)
    await message.channel.send(embed5)
    
  }
}
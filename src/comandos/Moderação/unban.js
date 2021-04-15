const Discord = require('discord.js');

module.exports = {
  config: {
    name: "unban",
    aliases: ['tirarBan'],
    description: "tirar o Ban de um usuário",
    usage: "unban"
  },
  run: async (bot, message, args) => {

    let mod = message.author;
    let id = args[0];

    if (!message.member.hasPermission("BAN_MEMBERS")) {
      const embed1 = new Discord.MessageEmbed()
        .setColor('#15226D')
        .setDescription('**⭕ | voce nao tem permissao para usar esse comando**')
      return message.channel.send(embed1)
    }

    if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
      const embed2 = new Discord.MessageEmbed()
        .setColor('#15226D')
        .setDescription('**⭕ | eu nao tenho permissao para isso**')
      return message.channel.send(embed2)
    }

    if (!id) {
      const embed3 = new Discord.MessageEmbed()
        .setColor('#15226D')
        .setDescription('**⭕ | mencione o ID do membro que deseja desbanir**')
      return message.channel.send(embed3)
    }

    let userID = args[0]
    message.guild.fetchBans().then(bans => {
      if (bans.size == 0) return
      let bUser = bans.find(b => b.user.id == userID)
      if (!bUser) return
      message.guild.members.unban(bUser.user)
    })

    const embed4 = new Discord.MessageEmbed()
      .setTitle('⚠ | unban')
      .setColor('#15226D')
      .setThumbnail(message.author.displayAvatarURL({ format: "png" }))
      .setDescription(`**👤 membro desbanido:** <@${userID}>\n*• ID:* ${userID}\n**👤 desbanido por:** ${message.author.tag}`)
      .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ format: "png" }))
      .setTimestamp()

    message.channel.send(embed4)
  }

}
const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  config: {
    name: "advs",
    aliases: ['advertirstaff'],
    description: "adverti um staff",
    usage: "advs"
  },
  run: async (bot, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) {
      const embed1 = new Discord.MessageEmbed()
        .setColor('#15226D')
        .setDescription('**⭕ | Você não tem permissão para usar esse comando**')
      return message.channel.send(embed1)
    }

    let member = message.author;
    const user = message.mentions.members.first()

    if (!user) {
      const embed2 = new Discord.MessageEmbed()
        .setColor('#15226D')
        .setDescription('**⭕ | Mencione o staff a ser Advertido**')
      return message.channel.send(embed2)
    }

    if (message.mentions.users.first().bot) {
      const embed3 = new Discord.MessageEmbed()
        .setColor('#15226D')
        .setDescription('**⭕ | Não é possível dar uma advertência em um bot**')
      return message.channel.send(embed3)
    }

    if (message.author.id === user.id) {
      const embed4 = new Discord.MessageEmbed()
        .setColor('#15226D')
        .setDescription('**⭕ | Não é possível dar uma advertência em você mesmo**')
      return message.channel.send(embed4)
    }

    if (user.id === message.guild.owner.id) {
      const embed5 = new Discord.MessageEmbed()
        .setColor('#15226D')
        .setDescription('**⭕ | Este membro tem um cargo maior que o seu**')
      return message.channel.send(embed5)
    }

    const reason = args.slice(1).join(" ")

    if (!reason) {
      const embed6 = new Discord.MessageEmbed()
        .setColor('#15226D')
        .setDescription('**⭕ | É necessário um motivo para a advertência**')
      return message.channel.send(embed6)
    }

    let advs = db.get(`advs_${message.guild.id}_${user.id}`)

    if (advs === 3) {
      const embed7 = new Discord.MessageEmbed()
        .setColor('#15226D')
        .setDescription(`**⚠ | ${user} Chegou ao limite de 3 advertências staff**`)
      return message.channel.send(embed7)
    }
    db.add(`advs_${message.guild.id}_${user.id}`, 1)

    let embed8 = new Discord.MessageEmbed()
      .setTitle('⚠ Ads | Advertência staff')
      .setColor('#15226D')
      .setThumbnail(user.user.displayAvatarURL({ format: "png" }))
      .setDescription(`**👤 | Staff advertido:
ㅤ• Tag: ${user}\n\`(${user.id})\`

👤 | Moderador:
ㅤ• Tag: ${member}

• Motivo:** \`${reason}\``)

      .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ format: "png" }))
      .setTimestamp()

    await message.channel.send(embed8)
  }
}
const { MessageEmbed } = require("discord.js")

module.exports = {
  config: {
    name: "lock",
    aliases: ['trancar'],
    description: "chega um canal do servidor",
    usage: "d!lock"
  },
  run: async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) {
      const embed1 = new MessageEmbed()
     .setColor('#15226D')
    .setDescription('**⭕ | você não tem permissão para usar esse comando**')
    return message.reply(embed1)} 

    const channel = message.channel.id

    let embed2 = new MessageEmbed()
      .setDescription(`**🔒| O canal <#${channel}> foi bloqueado com sucesso!**`)
     .setColor('#15226D')
      .setFooter(`requisitado por: ${message.author.tag}`, message.author.displayAvatarURL({ format: "png" }));
    message.channel.updateOverwrite(message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == "@everyone"), {
      SEND_MESSAGES: false,
      ADD_REACTIONS: false
    })
    await message.channel.send(embed2)
  }
}

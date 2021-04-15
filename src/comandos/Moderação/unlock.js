const { MessageEmbed } = require("discord.js")

module.exports = {
    config: {
        name: "unlock",
        aliases: ['destrancar'],
        description: "desbloquea um chat",
        usage: "unlock"
    },
    run: async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_CHANNELS")) {

    const embed1 = new MessageEmbed()
      .setColor('#15226D') 
      .setDescription('**⭕ | você não tem permissão para usar este comando**')

    return message.reply(embed1)

    }
    
    const channel = message.channel.id
   
    let embed = new MessageEmbed()
      .setDescription(`**🔓| O canal <#${channel}> foi desbloqueado com sucesso!**`)
      .setColor('#15226D')
      .setFooter(`requisitado por: ${message.author.tag}`, message.author.displayAvatarURL({ format: "png" }));
    message.channel.updateOverwrite(message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == "@everyone"),{
            SEND_MESSAGES:true,
            ADD_REACTIONS:true
    })
    await message.channel.send(embed)
  }
}

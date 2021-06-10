const Discord = require("discord.js")

module.exports = {
    config: {
      name: "sugestão",
      aliases: ['sugerir'],
      description: "mande uma sugestão para o servidor",
      usage: "{prefix}sugestão"
    },
    run: async (bot, message, args) => {
    
    let user = message.author;
    let suggest = args.slice().join(' ');
    if(!suggest) {
      
      const embed1 = new Discord.MessageEmbed()
     .setColor('#15226D')
     .setDescription('**⭕ | É necessario uma mensagem para ser enviada como sugestão**')
      return message.channel.send(embed1)
    }
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "sugestão" || x.name === "sugestões"))
    
    
    if(!channel) {
      const embed70 = new Discord.MessageEmbed()
      .setColor('#15226D')
      .setDescription('**⭕ | Não foi possivel encontrar o canal de sugestões**')
       return message.channel.send(embed70)
    }
                                                    
    
          let embed2 = new Discord.MessageEmbed()
          .setTitle('⚡ Nova sugestão!')
          .setThumbnail(message.author.avatarURL())
          .setColor("#01F1F9")
          .addField(`💡 Sugestão:`, `${suggest}`)
          .addField(`💁 Enviada Por:`, `\`${user.tag}\``)
          .setFooter(`${user.username}`, message.author.displayAvatarURL({format: "png"}))
           .setTimestamp()
    
    
    channel.send(embed2).then(m => {
      m.react("✅")
      m.react("❌")
    }).catch(err => {})
    
    
    message.channel.send(`${message.author} **Sua sugestão foi enviada com sucesso em ${channel}**`).then(msg => {
      msg.delete({timeout: 5000})
      message.delete()
    })
    
  }
}

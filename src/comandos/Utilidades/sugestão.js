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
    .setDescription('**⭕ | é uma mensagem para ser enviada como sugestão**')
      return message.channel.send(embed1)
    }
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "sugestão" || x.name === "sugestões"))
    
    
    if(!channel) {
      return message.channel.send("**não foi possível encontrar um canal de sugestões**")
    }
                                                    
    
          let embed2 = new Discord.MessageEmbed()
          .setTitle('⚡ nova sugestão!')
          .setThumbnail(message.author.avatarURL())
          .setColor("#01F1F9")
          .addField(`💡 sugestão:`, `${suggest}`)
          .addField(`💁 enviada por:`, `\`${user.tag}\``)
          .setFooter(`${user.username}`, message.author.displayAvatarURL({format: "png"}))
           .setTimestamp()
    
    
    channel.send(embed2).then(m => {
      m.react("✅")
      m.react("❌")
    }).catch(err => {})
    
    
    let sugestao = new Discord.MessageEmbed()
    .setColor('#15226D')
    .setDescription(`**sua sugestão foi enviada em ${channel}**`)
    
    
    message.channel.send(sugestao).then(msg => {
      msg.delete({timeout: 500})
    })
    
  }
}

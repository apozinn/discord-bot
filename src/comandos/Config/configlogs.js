const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  config: {
    name: "setlogs",
    aliases: ['logs'],
    description: "setar o canal de logs",
    usage: "{prefix}setlogs"
  },
  run: (bot, message, args) => {
    
 if(args.slice(0).join(' ') === 'off'){
    
    const embed2 = new Discord.MessageEmbed()
        .setColor('#15226D')
        .setDescription('**⚠ | sistema de logs desativado com sucesso!**')
       
      return message.channel.send(embed2)
      db.delete(`logschannel_${message.guild.id}`)

      }  

    let channel = message.mentions.channels.first();
      if(!channel) {
        
        const embed1 = new Discord.MessageEmbed()
        .setColor('#15226D')
        .setDescription('**⭕ | é necessário mencionar um chat para os logs**')

        return message.channel.send(embed1)

    }
    
    const embed3 = new Discord.MessageEmbed()
     .setTitle(`painel de logs`)
        .setColor('#15226D')
        .setThumbnail(message.guild.iconURL({ dynamic: true })) 
        .setDescription(`**💬 chat de logs:** \n${channel}\n**🔰 status atual:** \n\`${status}\``)
        .setFooter(`${message.guild.name} `, message.guild.iconURL({format: "png"}))
        .setTimestamp() 
        
    message.channel.send(embed3)

    let status = db.get(`logschannel_${message.guild.id}`)
    db.set(`logschannel_${message.guild.id}`, channel)

  }
}
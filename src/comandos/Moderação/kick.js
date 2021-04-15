const Discord = require('discord.js')

module.exports = {
    config: {
      name: "kick",
      aliases: ['kickar'],
      description: "kickar um membro",
      usage: "{prefix}kick"
    },
    run: async (bot, message, args) => {
    
    if(!message.member.hasPermission("KICK_MEMBERS")) {
      const embed1 = new Discord.MessageEmbed()
        .setColor('#15226D')
        .setDescription('**⭕ | você não tem permissão para kickar um usuário**')
      return message.channel.send(embed1)
    }
    
    if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
      return message.channel.send(`${message.author.username}** eu não tenho permissão pra realizar esse comando**`)
    }
    let user = message.author;
    let membro = message.mentions.members.first();
    let motivo = args.slice(1).join(' ');
    
    if(!membro) {
      const embed2 = new Discord.MessageEmbed() 
        .setColor('#15226D')
        .setDescription('**⭕ | mencione o membro que deseja kickar**')
      return message.channel.send(embed2)
    }
    
    if(membro.id === message.author.id) {
     const embed3 = new Discord.MessageEmbed()
       .setColor('#15226D')
       .setDescription('**⭕ | não é possível kickar você mesmo**')
     return message.channel.send(embed3)
    }
    
  if(!motivo) {
   const embed4 = new Discord.MessageEmbed()
      .setColor('#15226D')
      .setDescription('**⭕ | é necessário um motivo para o kick**')
    return message.channel.send(embed4)
  }
    
    const embed5 = new Discord.MessageEmbed()
        .setTitle('⚠ | Membro kick')
        .setColor('#15226D')
        .setThumbnail(message.author.displayAvatarURL({format: "png"}))
        .addField('👤 membro kickado:', `*• tag:* ${message.mentions.users.first().tag}\n*• ID:* \`(${membro.id})\``)
        .addField('👤 kickado por:', `*• tag:* ${user.tag}\n*• ID:* \`(${user.id})\``)
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))
        .setTimestamp()
    
    message.channel.send(embed5)
    
    membro.kick();
  }
}
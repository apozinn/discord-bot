const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
      name: "mute",
      aliases: ['mutar'],
      description: "mute um membro do servidor",
      usage: "{prefix}mute"
    },
    run: async (bot, message, args) => {    if (!message.member.hasPermission("MANAGE_ROLES")) {
      const embed1 = new MessageEmbed()
     .setColor('#15226D')
    .setDescription('**⭕ | você não tem permissão para mutar um usuário**')
      return message.channel.send(embed1);
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("**eu não tenho permissão de gerenciar cargos**");
    }

    const user = message.mentions.members.first();
    
    if(!user) {
      const embed2 = new MessageEmbed()
     .setColor('#15226D')
    .setDescription('**⭕ | mencione o membro a ser mutado**')
      return message.channel.send(embed2)
    }
    
    if(user.id === message.author.id) {
    const embed3 = new MessageEmbed()
   .setColor('#15226D')
  .setDescription('**⭕ | não é possível mutar você mesmo**')
      return message.channel.send(embed3);
    }
    
    
    let motivo = args.slice(1).join(" ")
    
    
    if(!motivo) {
      const embed4 = new MessageEmbed()
     .setColor('#15226D')
    .setDescription('**⭕ | é necessário mencionar um motivo para o mute**')
      return message.channel.send(embed4)
    }
    
    
    let muterole = message.guild.roles.cache.find(x => x.name === "Mutado")
    
    
      if(!muterole) {
        const embed5 = new MessageEmbed()
       .setColor('#15226D')
     .setDescription('**⭕ | não foi possível encontrar a tag de mute, crie uma tag {Mutado}**')
      return message.channel.send(embed5)
    }
    
    
   if(user.roles.cache.has(muterole)) {
    const embed6 = new MessageEmbed()
   .setColor('#15226D')
  .setDescription('**⭕ | esse membro já está mutado**')
      return message.channel.send(embed6)
    }
    
  
    
    
    user.roles.add(muterole)
    
    const embed7 = new MessageEmbed()
        .setTitle('⚠ | Membro mutado')
        .setColor('#15226D')
        .setThumbnail(message.author.displayAvatarURL({format: "png"}))
        .addField('👤 Membro mutado:', `${user}`)
       .addField('👤 Mutado por:', `${message.author}\n*• Motivo:* ${motivo}`)
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))
        .setTimestamp()
      
      await message.channel.send(embed7)

  }
};
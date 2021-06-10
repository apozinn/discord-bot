const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
      name: "mute",
      aliases: ['mutar'],
      description: "mute um membro do servidor",
      usage: "d!mute"
    },
    run: async (bot, message, args) => {    if (!message.member.hasPermission("MANAGE_ROLES")) {
      const embed1 = new MessageEmbed()
     .setColor('#15226D')
    .setDescription('**⭕ | Você não tem permissão para mutar um usuário**')
      return message.channel.send(embed1);
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("**Eu não tenho permissão para mutar membros**");
    }

    const user = message.mentions.members.first();
    
    if(!user) {
      const embed2 = new MessageEmbed()
     .setColor('#15226D')
    .setDescription('**⭕ | Mencione o membro a ser mutado**')
      return message.channel.send(embed2)
    }
    
    if(user.id === message.author.id) {
    const embed3 = new MessageEmbed()
   .setColor('#15226D')
  .setDescription('**⭕ | Não é possível mutar você mesmo**')
      return message.channel.send(embed3);
    }
    
    
    let motivo = args.slice(1).join(" ")
    
    
    if(!motivo) {
      const embed4 = new MessageEmbed()
     .setColor('#15226D')
    .setDescription('**⭕ | É necessário mencionar um motivo para o mute**')
      return message.channel.send(embed4)
    }
    
    
    let muterole = message.guild.roles.cache.find(x => x.name === "Mutado")
    
    
      if(!muterole) {
      message.guild.roles.create({
        data: {
          name: 'Mutado',
          color: null,
      }
      }).then(console.log).catch(console.error)
    }
    
    
   if(user.roles.cache.has(muterole)) {
    const embed6 = new MessageEmbed()
   .setColor('#15226D')
  .setDescription('**⭕ | Esse membro já está mutado**')
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
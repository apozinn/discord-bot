const Discord = require('discord.js');

module.exports = {
    config: {
      name: "unmute",
      aliases: ['retirarmute'],
      description: "retira o mute de um membro",
      usage: "{prefix}unmute"
    },
    run: async (bot, message, args) => {    if (!message.member.hasPermission("MANAGE_ROLES")) {
      const embed1 = new Discord.MessageEmbed()
     .setColor('#15226D')
    .setDescription('**⭕ | você não tem permissão para usar esse comando**')
      return message.channel.send(embed1);
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("**eu não tenho permissão pra esse comando**");
    }

    const user = message.mentions.members.first();

    if (!user) {
      const embed2 = new Discord.MessageEmbed() 
     .setColor('#15226D')
    .setDescription('**⭕ | mencione o membro que deseja desmutar**')
      return message.channel.send(embed2);
    }
    
    let muterole = message.guild.roles.cache.find(x => x.name === "Mutado")
    
    
 if(user.roles.cache.has(muterole)) {
      const embed3 = new Discord.MessageEmbed()
     .setColor('#15226D')
    .setDescription('**⭕ | o membro citado não está mutado**')
      return message.channel.send(embed3)
    }
    
    
    user.roles.remove(muterole)
    
    const embed4 = new Discord.MessageEmbed() 
  .setColor('#15226D')
 .setDescription(`**✅ | ${user} foi desmutado com sucesso!**`)
.setFooter(`${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))
.setTimestamp()
    await message.channel.send(embed4)

  }
};
 

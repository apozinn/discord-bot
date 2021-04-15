const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
    config: {
        name: "adv",
        aliases: ['advertir'],
        description: "adverti um usuário",
        usage: "adv"
    },
    run: async (bot, message, args) => {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      const embed1 = new Discord.MessageEmbed()
     .setColor('#15226D')
    .setDescription('**⭕ | você não tem permissão para usar esse comando**')
      return message.channel.send(embed1)
    }
    
    let member = message.author;
    const user = message.mentions.members.first()
    
    if(!user) {
      const embed2 = new Discord.MessageEmbed()
     .setColor('#15226D')
    .setDescription('**⭕ | mencione o usuário a ser Advertido**')
      return message.channel.send(embed2)
    }
    
    if(message.mentions.users.first().bot) {
      const embed3 = new Discord.MessageEmbed()
     .setColor('#15226D')
    .setDescription('**⭕ | não é possível dar uma advertência em um bot**')
      return message.channel.send(embed3)
    }
    
    if(message.author.id === user.id) {
      const embed4 = new Discord.MessageEmbed()
     .setColor('#15226D')
    .setDescription('**⭕ | não é possível dar uma advertência em você mesmo**')
      return message.channel.send(embed4)
    }
    
    if(user.id === message.guild.owner.id) {
        const embed5 = new Discord.MessageEmbed()
       .setColor('#15226D')
      .setDescription('**⭕ | este membro tem um cargo maior que o seu**')
      return message.channel.send(embed5)
    }
    
    const reason = args.slice(1).join(" ")
    
    if(!reason) {
     const embed6 = new Discord.MessageEmbed()
    .setColor('#15226D')
   .setDescription('**⭕ | é necessário um motivo para a advertência**')
      return message.channel.send(embed6)
    }
    
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    if(warnings === 3) {
    const embed7 = new Discord.MessageEmbed()
   .setColor('#15226D')
  .setDescription(`**⚠ | ${user} chegou ao limite de 3 advertências**`)
      return message.channel.send(embed7)
    }
        db.add(`warnings_${message.guild.id}_${user.id}`, 1)
        
   let embed8 = new Discord.MessageEmbed()
       .setTitle('⚠ Warn | Advertência')
       .setColor('#15226D')
       .setThumbnail(user.user.displayAvatarURL({format: "png"}))
       .setDescription(`**👤 | Usuário advertido:
ㅤ• Tag: ${user}\n\`(${user.id})\`

👤 | Advertido por:
ㅤ• Tag: ${member}

• Motivo:** \`${reason}\``) 
       
       .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))
       .setTimestamp()
      
      await message.channel.send(embed8)
    }
  }
const Discord = require('discord.js');

module.exports = {
    config: {
        name: "ban",
        aliases: ['banir'],
        description: "banir um usuário do servidorr",
        usage: "d!ban"
    },
    run: async (bot, message, args) => {
  
    let user = message.author;
    let membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    
    if (!membro) {
      const embed1 = new Discord.MessageEmbed()
      .setColor('#15226D')
     .setDescription('**⭕ | Mencione o usuário a ser banido**')
      return message.reply(embed1)} 
    
    if(membro === message.member) {
      const embed2 = new Discord.MessageEmbed()
     .setColor('#15226D')
    .setDescription('**⭕ | Não é possível banir você mesmo**')
      return message.reply(embed2)} 
 
    let motivo = args.slice(1).join(" ");
    if(!motivo) {
     const embed3 = new Discord.MessageEmbed()
            .setColor('#15226D')
            .setDescription('**⭕ | É necessário mencionar um motivo para o ban**')
      return message.channel.send(embed3)} 
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(``)
    
    if(!message.member.hasPermission("BAN_MEMBERS")) {
     const embed4 = new Discord.MessageEmbed()
       .setColor('#15226D')
       .setDescription('**⭕ | Você não tem permissão para banir membros**')
      return message.channel.send()} 
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('**Eu não tenho permissão pra banir um membro.**')
 
      const embed5 = new Discord.MessageEmbed()
       .setTitle('⚠ | Confirme o banimento')
       .setColor('#15226D')
       .addField('• Deseja banir o usuário abaixo?', `${membro}`)
       .addField('• Motivo:', `\`${motivo}\``)
       .setFooter(`requisitado por: ${message.author.tag}`, message.author.displayAvatarURL({ format: "png" }));
 
        message.channel.send(embed5).then(msg => {
        msg.react("❌")
 
      let filtro = (reaction, usuario) => reaction.emoji.name === "❌" && usuario.id === message.author.id;
      let coletor = msg.createReactionCollector(filtro, {max: 1})
 
      coletor.on("collect", cp => {
            cp.remove(message.author.id); {
       let embed6 = new Discord.MessageEmbed()
           .setTitle('⚠ | Membro ban')
           .setColor('#15226D')
           .setThumbnail(message.author.displayAvatarURL({ format: "png" }))
           .addField('👤 | Usuário banido:', `*• Tag:* ${message.mentions.users.first().tag}\n\`(${membro.id})\``)
           .addField('👤 | Banido por:', `*• Tag:* ${user.tag}\n\`(${user.id})\``)
           .addField('✏ | Motivo:', `**${motivo}**`) 
           .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))
           .setTimestamp()
        message.channel.send(embed6);
            }
            membro.ban();
        })
    })
  }
}

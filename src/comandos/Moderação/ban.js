const Discord = require('discord.js');

module.exports = {
    config: {
        name: "ban",
        aliases: ['banir'],
        description: "banir um usuário do servidorr",
        usage: "{prefix}ban"
    },
    run: async (bot, message, args) => {
  
    let user = message.author;
    let membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    
    if (!membro) {
      const embed1 = new Discord.MessageEmbed()
      .setColor('#15226D')
     .setDescription('**⭕ | mencione o usuário a ser banido**')
      return message.reply(embed1)} 
    
    if(membro === message.member) {
      const embed2 = new Discord.MessageEmbed()
     .setColor('#15226D')
    .setDescription('**⭕ | não é possível banir você mesmo**')
      return message.reply(embed2)} 
 
    let motivo = args.slice(1).join(" ");
    if(!motivo) {
     const embed3 = new Discord.MessageEmbed()
            .setColor('#15226D')
            .setDescription('**⭕ | é necessário mencionar um motivo para o ban**')
      return message.channel.send(embed3)} 
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(``)
    
    if(!message.member.hasPermission("BAN_MEMBERS")) {
     const embed4 = new Discord.MessageEmbed()
       .setColor('#15226D')
       .setDescription('**⭕ | você não tem permissão para banir membros**')
      return message.channel.send()} 
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('**eu não tenho permissão pra banir um membro.**')
 
      const embed5 = new Discord.MessageEmbed()
       .setTitle('⚠ | Confirme o banimento')
       .setColor('#15226D')
       .addField('• deseja banir o usuário abaixo?', `${membro}`)
       .addField('• motivo:', `\`${motivo}\``)
       .setFooter(`requisitado por: ${message.author.tag}`, message.author.displayAvatarURL({ format: "png" }));
 
        message.channel.send(embed5).then(msg => {
        msg.react("❌")
 
      let filtro = (reaction, usuario) => reaction.emoji.name === "❌" && usuario.id === message.author.id;
      let coletor = msg.createReactionCollector(filtro, {max: 1})
 
      coletor.on("collect", cp => {
            cp.remove(message.author.id); {
       let embed6 = new Discord.MessageEmbed()
           .setTitle('⚠ | membro ban')
           .setColor('#15226D')
           .setThumbnail(message.author.displayAvatarURL({ format: "png" }))
           .addField('👤 | Usuário banido:', `*• tag:* ${message.mentions.users.first().tag}\n\`(${membro.id})\``)
           .addField('👤 | banido por:', `*• tag:* ${user.tag}\n\`(${user.id})\``)
           .addField('✏ | motivo:', `**${motivo}**`) 
           .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))
           .setTimestamp()
        message.channel.send(embed6);
            }
            membro.ban();
        })
    })
  }
}

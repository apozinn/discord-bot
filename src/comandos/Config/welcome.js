const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
    config: {
      name: "setwelcome",
      aliases: ['setar'],
      description: "configurar o welcome do servidor",
      usage: "setwelcome"
    },
    run: (bot, message, args) => {
    
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('**você não tem permissão para isso**');
    
    let channel = message.mentions.channels.first()
    if(!channel) { 
      
      const embed1 = new Discord.MessageEmbed()
     .setColor('#15226D')
     .setDescription('**⭕ | é necessário mencionar um chat para o welcome -** \`{chat}\` \`{mensagem}\`')

      return message.channel.send(embed1)} 
    let mensagem = args.slice(1).join(' ');
    if(!mensagem) {
      
      const embed2 = new Discord.MessageEmbed()
    .setTitle('⭕ | é necessário uma mensagem')
     .setColor('#15226D')
     .addField('📛 | parâmetros da mensagem:', '👤 {user} - menciona o usuário que entrou\n💁 {server} - mencione o nome do servidor}')
    
      return message.channel.send(embed2)}
      
    db.set(`channelwel_${message.guild.id} `, channel.id)
    db.set(`mensagemwel_${message.guild.id}`, message.content)
    
    const embed3 = new Discord.MessageEmbed()
        .setTitle(`painel de welcome`)
        .setColor('#15226D')
        .setThumbnail(message.guild.iconURL({ dynamic: true })) 
        .setDescription(`**💬 chat de welcome:** \n${channel}\n**🔰 mensagem de welcome:** \n\`${mensagem}\``)
        .setFooter(`${message.guild.name} `, message.guild.iconURL({format: "png"}))
        .setTimestamp()
        
    message.channel.send(embed3)
  }
}
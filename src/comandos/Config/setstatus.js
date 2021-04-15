const Discord = require("discord.js")
const db = require("quick.db")
const config = require('./config.json')

module.exports = {
    config: {
      name: "setstatus",
      aliases: ['setar'],
      description: "mudar o status do bot",
      usage: "setstatus"
    },
    run: (bot, message, args) => {
    let user = message.author;
    let owner = config.owner;
    if(user.id != owner) return message.channel.send('**você não tem permissão para alterar o status do bot**')
    
    let status = args.slice().join(``);

    if(!status) {
      const embed1 = new Discord.MessageEmbed()
     .setColor('#15226D')
    .setDescription('**⭕ | é necessário uma mensagem pro status do bot**')
      return message.channel.send(embed1)
    }

    db.set(`status_${message.client.id}`, message.id)
      const embed2 = new Discord.MessageEmbed()
       .setTitle('painel de status')
       .setColor('#15226D')
       .setThumbnail(message.client.displayAvatarURL({format: "png"}))
       .setDescription(`**📮 | status 1:** \n\`${status}\`\n**📮 | status 2:** \n\`out\``)
       .setFooter(`${message.client.name}`, message.client.displayAvatarURL({format: "png"}))
       .setTimestamp()
       
    message.channel.send(embed2)
  }
}
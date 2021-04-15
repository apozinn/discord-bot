const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "anúncio",
        aliases: ['anunciar'],
        description: "anunciar uma mensagem",
        usage: 'anunciar'
    },
    run: async (bot, message, args) => {
    let channel = message.mentions.channels.first()
    if (!channel){
      const embed1 = new Discord.MessageEmbed()
     .setColor('#15226D')
     .setDescription('**⭕ | é necessário um chat para anunciar a sua mensagem - \`{chat}\` \`{mensagem}\`**')
    return message.channel.send(embed1)
    }
    let mensagem = args.slice(1).join(' ');
    if (!mensagem){
      const embed2 = new Discord.MessageEmbed()
     .setColor('#15226D')
     .setDescription('**⭕ | é necessário um mensagem para anunciar a sua mensagem - \`{chat}\` \`{mensagem}\`**')
    return message.channel.send(embed2)
    }
     const anuncio = new MessageEmbed()
      .setTitle(`Novo anúncio por ${message.author.tag}`)
      .setDescription(`${mensagem}`)
      .setColor('RANDOM')
      .setFooter(`${message.guild.name}`, message.guild.iconURL({ format: "png" }))
      .setTimestamp()
      
    channel.send(anuncio);
    message.delete();
  },
};

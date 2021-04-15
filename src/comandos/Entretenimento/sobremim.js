const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  config: {
    name: "sobremim",
    aliases: ['sobrevc'],
    description: "escolha uma frase pra por na sua bio",
    usage: "sobremim"
  },
  run: async (bot, message, args) => {
    let user = message.author;
    let mensagem = args.slice().join(' ');
    if(!mensagem){
      const embed1 = new Discord.MessageEmbed()
     .setColor('#15226D')
    .setDescription('**⭕ | é necessário uma mensagem para sua biografia**')
   return message.channel.send(embed1)
    }
    
  const embed2 = new Discord.MessageEmbed()
        .setColor('#15226D')
        .setDescription(`💙 | você setou sua biografia como \`${mensagem}\``)
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))
        .setTimestamp()
        
     message.channel.send(embed2)
     
     db.set(`bio_${user.id}`, mensagem);
  }
} 
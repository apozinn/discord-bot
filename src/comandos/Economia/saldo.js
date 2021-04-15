const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    config: {
        name: "saldo",
        aliases: ['saldo'],
        description: "veja o saldo total de dinheiro de um usuário",
        usage: "saldo"
    },
    run: async (bot, message, args) => {
   let user = message.mentions.users.first() || bot.users.cache.get(args[0]) || message.author;
    
        let money = await db.fetch(`money_${message.guild.id}_${user.id}`)
        let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
        let total = (money + bank)
        if(money === null) money = "0"
        if(bank === null) bank = "0"

     const Embed = new Discord.MessageEmbed()
      .setTitle(`💰 | saldo de ${message.author.tag}`)
      .setThumbnail(message.author.displayAvatarURL({ format: "png"}))
       .setColor('#15226D')
       .addField(`💵 | carteira:`, `R$ ${money}`)
       .addField(`💵 | banco:`, `R$ ${bank}`)
       .addField(`💳 | total:`, `R$ ${total}`)
       .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ format: "png" }))
       .setTimestamp()

        message.channel.send(Embed);
    }
}
 
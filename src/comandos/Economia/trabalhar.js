const Discord = require('discord.js')
const db = require('quick.db');
const ms = require('parse-ms');

module.exports = {
    config: {
        name: "trabalhar",
        aliases: ['trabalho'],
        description: "trabalhe para ganhar dinheiro",
        usage: "trabalhar"
    },
    run: async (bot, message, args) => {
        let user = message.author;
        let timeout = 3600000;
        let xp = await db.fetch(`xp_${message.guild.id}_${user.id}`)
        let xps = 10;
        let author = await db.fetch(`worked_${message.guild.id}_${user.id}`);
        if(xp === null) xp = "10"
        if(author !== null && timeout - (Date.now() - author) > 0){
            let time = ms(timeout - (Date.now() - author));
       const work = new Discord.MessageEmbed()
          .setColor('#15226D')
          .setDescription(`**🕒 | espere ${time.minutes} minutos para trabalhar de novo**`)
          .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ format: "png" }))
          .setTimestamp()
        return message.channel.send(work)
        } else {
            let amount = 600;
            db.add(`xp_${message.guild.id}_${user.id}`, xps);
            db.add(`money_${message.guild.id}_${user.id}`, amount)
            db.set(`worked_${message.guild.id}_${user.id}`, Date.now())

  const embed = new Discord.MessageEmbed()
       .setColor('#15226D')
       .setDescription(`**💵 | você trabalhou como faxineiro e ganhou R$ ${amount} e \`${xp}\` de xp**`)
       .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ format: "png" }))
       .setTimestamp()
            message.channel.send(embed)
        }
    }
}

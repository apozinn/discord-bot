const db = require('quick.db');
const ms = require('parse-ms');
const Discord = require('discord.js')

module.exports = {
    config: {
        name: "daily",
        aliases: ['daily'],
        description: "receba uma quantia diária",
        usage: "daily"
    },
    run: async (bot, message, args) => {
    let user = message.author;
    let timeout = 86400000;
    let amount = 1000;

    let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
      let time = ms(timeout - (Date.now() - daily));
      const cooldown = new Discord.MessageEmbed()
        .setColor('#15226D')
        .setDescription(`**você já recebeu o seu daily de hoje, volte em ${time.hours}hrs e ${time.minutes}min**`)
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ format: "png" }))
         .setTimestamp()
      return message.channel.send(cooldown)
    } else {
      db.add(`money_${message.guild.id}_${user.id}`, amount);
      db.set(`daily_${message.guild.id}_${user.id}`, Date.now());
      const embed = new Discord.MessageEmbed()
     .setColor('#15226D')
     .setDescription(`**💵 | você recebeu R$ ${amount} hoje, volte amanhã para ganhar mais**`)
     .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ format: "png" }))
      .setTimestamp() 
    
    message.channel.send(embed)
    }
  }
}

const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    config: {
        name: "depositar",
        aliases: ['deposit'],
        description: "depositar dinheiro na conta bancária",
        usage: "depositar"
    },
    run: async (bot, message, args) => {
      let user = message.author;
    
       let money = await db.fetch(`money_${message.guild.id}_${message.author.id}`)
       let bank = await db.fetch(`bank_${message.guild.id}_${message.author.id}`)
       let quantia = args[0];
       if(!args[0]) return message.channel.send("**é necessário uma quantia**")
       if(quantia < 0) return message.channel.send('**você pode usar apenas números positivos**')
       if (isNaN(quantia)) return message.reply('**você pode colocar apenas números!**'); 
    
       
       if(money < quantia) return message.channel.send('**você não tem dinheiro o suficiente para depositar**');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, quantia);
            db.add(`bank_${message.guild.id}_${message.author.id}`, quantia)
            
        const Embed = new Discord.MessageEmbed()
          .setColor('#15226D')
          .setDescription(`**💵 | você depositou R$ ${quantia} na sua conta bancária**`)
          .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ format: "png" }))
          .setTimestamp()
   message.channel.send(Embed)
    }
}

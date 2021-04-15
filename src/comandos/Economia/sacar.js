const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    config: {
        name: "sacar",
        aliases: ['sacar'],
        description: "sacar dinheiro do banco",
        usage: "sacar"
    },
    run: async (bot, message, args) => {
    
       let money = await db.fetch(`money_${message.guild.id}_${message.author.id}`)
       let bank = await db.fetch(`bank_${message.guild.id}_${message.author.id}`)
       let quantia = args.slice(0).join(' ');
       
        if (!quantia) return message.reply('**é necessário uma quantia para ser sacada**');
        if(quantia < 0) return message.channel.send('**você pode usar apenas números positivos**')
        if (isNaN(quantia)) return message.reply('você só pode colocar apenas números!');
       
       if(bank < quantia) return message.channel.send('**você não tem dinheiro o suficiente para sacar**');
            db.subtract(`bank_${message.guild.id}_${message.author.id}`, quantia);
            db.add(`money_${message.guild.id}_${message.author.id}`, quantia)
            
        const Embed = new Discord.MessageEmbed()
          .setColor('#15226D')
          .setDescription(`**💵 | você sacou R$ ${quantia} da sua conta bancária com sucesso**`)
          .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ format: "png" }))
          .setTimestamp()
        message.channel.send(Embed)
    }
}

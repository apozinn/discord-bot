const Discord = require('discord.js');

module.exports = {
    config: {
        name: "loja",
        aliases: ['loja'],
        description: "Mostra a loja",
        usage: "loja"
    },
    run: async (bot, message, args) => {

     const embed = new Discord.MessageEmbed()
       .setTitle(`${message.guild.name}'Store`)
       .setColor('#15226D')
       .setThumbnail(bot.user.displayAvatarURL({ format: "png"}))
       .setDescription(`**🚙 | carro -  R$ 10,000**\n**🕒 | relógio - R$ 750,00**\n**🔫 | pistola - R$ 5,000**`)
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ format: "png" }))
         .setTimestamp()

        message.channel.send(embed);
    }
}

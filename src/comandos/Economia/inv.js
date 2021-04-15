const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    config: {
        name: "inv",
        aliases: ['inventario'],
        description: "Mostra o seu inventário",
        usage: "inv"
    },
    run: async (bot, message, args) => {
        let items = await db.fetch(message.author.id);
        if(items === null) items = "vazio"

        const Embed = new Discord.MessageEmbed()
        .setTitle(`🎒 | inventário de - ${message.author.username}`)
        .setColor('#15226D')
        .setThumbnail(message.author.displayAvatarURL({ format: "png"}))
        .setDescription(`**${items}**`)
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ format: "png" }))
         .setTimestamp()

        message.channel.send(Embed);
    }
}

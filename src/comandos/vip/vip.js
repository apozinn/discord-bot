const Discord = require('discord.js');
const db = require('discord.js');

module.exports = {
    config: {
        name: "vip",
        aliases: [''],
        description: "configure a sua tag vip",
        usage: "d!vip"
    },
    run: async (bot, message, args) => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username}'vip`)
        .setColor('#15226D')
        .setThumbnail(message.author.avatarURL({ format: "png"}))
        .setDescription(`0`)
        .setFooter(`requisitado por: ${message.author.tag}`, message.author.avatarURL({ format: 'png'}))
        .setTimestamp()
    message.channel.send(embed)
    }
}
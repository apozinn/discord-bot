const Discord = require('discord.js')
const config = require('../../../config.json')

module.exports = {
    config: {
        name: "owner",
        aliases: ['owner'],
        description: "mostra o dono do bot",
        usage: "owner"
    },
    run: async (bot, message, args) => {
        let owner = config.owner;

        const embed = new Discord.MessageEmbed()
            .setColor('#15226D')
            .setDescription(`**👑 o dono é o <@${owner}>**`)
        message.channel.send(embed)

    }
} 
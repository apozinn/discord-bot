const Discord = require('discord.js');

module.exports = {
    config: {
      name: "say",
      aliases: ['dizer'],
      description: "faça o bot dizer uma mensagem",
      usage: "{prefix}say"
    },
    run: async (bot, message, args) => {        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('**você precisa de permissão para isso!**');
        if (!message.guild.me.hasPermission("ADMINISTRATOR")) return message.reply('**eu preciso de permissão para isso!**');

        let falar = args.slice(0).join(' ');
        if (!falar) return message.reply('**você precisa botar algo para eu falar!**')

        message.channel.send(falar)
    }
}
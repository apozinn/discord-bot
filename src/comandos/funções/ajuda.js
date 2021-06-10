const Discord = require("discord.js");

module.exports = {
    config: {
        name: "ajuda",
        aliases: ['ajuda'],
        description: "ajuda",
        usage: "d!ajuda"
    },
    run: async(bot, message, args) => {
           const embed = new Discord.MessageEmbed()
            .setAuthor(`${bot.user.username} • Ajuda`, bot.user.displayAvatarURL({ format: "png"}))
            .setColor('#15226D')
            .setThumbnail(bot.user.displayAvatarURL({ format: "png"}))
            .setDescription(`tendo dificuldade em algum comando, ou tendo alguma duvida? abaixo estarão os links de suporte!`)
            .addField('<:emojiseta2:827566704552968203> Servidor de suporte:', `[discord.gg/suporte](https://discordapp.com)`)
            .addField('<:emojiseta2:827566704552968203> Lista de comandos:', `[https:gloomy/comandos.com](https://discordapp.com)`)
            .setFooter(`requisitado por: ${message.author.username}`, message.author.displayAvatarURL({format: "png"}))
        message.channel.send(embed)
        }
    }                                                                                                   
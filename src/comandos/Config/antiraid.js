const Discord = require("discord.js");
const db = require('quick.db')

module.exports = {
    config: {
        name: "antaraid",
        aliases: ['antraid', 'antiraindg'],
        description: "sistema de antiraid",
        usage: "d!antiraid"
    },
    run: async(bot, message, args) => {

        let antifakes = db.get(`antifakes_${message.guild.id}`)
        let antilinks = db.get(`antilinks_${message.guild.id}`)
        let antispam = db.get(`antispam_${message.guild.id}`)

        if (antifakes === null) antifakes = "desativado"
        if (antilinks === null) antilinks = "desativado"
        if (antispam === null) antispam = "desativado"


        let embed = new Discord.MessageEmbed()
            .setAuthor(`${bot.user.username} • Antiraid `, bot.user.displayAvatarURL({ format: "png" }))
            .setThumbnail(bot.user.displayAvatarURL({ format: "png" }))
            .setColor('#15226D')
            .addField(`(${antiban}) - Defesas contra banimentos\n(${antikick})(${anticargos}) - Defesas contra remoção de cargos\n(${anticanal}) - Defesa contra canais deletados`, 'qualquer duvida entre no servidor ')
            .setFooter(`requisitado por: ${message.author.tag}`, message.author.avatarURL({ format: "png" }))

        message.channel.send(embed).then(msg => {

            let filtro = (reaction, usuario) => reaction.emoji.name === "1️⃣" && usuario.id === message.author.id;
            let coletor = msg.createReactionCollector(filtro, { max: 1 })
    
            coletor.on("collect", cp => {
                
            })
        })

    }
}
const Discord = require("discord.js");
const db = require('quick.db')

module.exports = {
    config: {
        name: "defesas",
        aliases: ['defesas', 'proteção'],
        description: "sistema de defesa do servidor",
        usage: "d!defesas"
    },
    run: async(bot, message, args) => {
        
            let antifakes = db.get(`antifakes_${message.guild.id}`)
            let antilinks = db.get(`antilinks_${message.guild.id}`)
            let antispam = db.get(`antispam_${message.guild.id}`)
       
            if(antifakes === null) antifakes = "desativado"
            if(antilinks === null) antilinks = "desativado"
            if(antispam === null) antispam = "desativado"
      

        let embed = new Discord.MessageEmbed()
            .setAuthor(`${bot.user.username} • Defesas`, bot.user.displayAvatarURL({format: "png"}))
            .setThumbnail(bot.user.displayAvatarURL({format: "png"}))
            .setColor('#15226D')
            .addField('Status atual do sistema:', `(${antifakes}) Defesa contra contas criadas recentemente\n(${antilinks}) Defesa contras links de outros servidores\n(${antispam}) Defesas contra flood em chats\n\n**Configure os sistemas:**\n1 - Ative/desative o sistema de antifakes\n2 - ative/desative o sistema de antilinks\n3 - ative/desative o sistema de antispam`)
            .setFooter(`requisitado por: ${message.author.tag}`, message.author.avatarURL({format: "png"}))
        
        message.channel.send(embed).then(msg => {

            msg.react()
            msg.react()
            msg.react()
            msg.react()

            let filtro = (reaction, usuario) => reaction.emoji.name === "" && usuario.id === message.author.id;
            let coletor = msg.createReactionCollector(filtro, { max: 1 })
    
            coletor.on("collect", cp => {

                let embed1 = new Discord.MessageEmbed()
                .setAuthor(`${bot.user.username} • Defesas`, bot.user.displayAvatarURL({format: "png"}))
                .setThumbnail(bot.user.displayAvatarURL({format: "png"}))
                .setColor('#15226D')
                .addField('Status atual do sistema:', `(${antifakes}) Defesa contra contas criadas recentemente\n(${antilinks}) Defesa contras links de outros servidores\n(${antispam}) Defesas contra flood em chats\n\n**Configure os sistemas:**\n1 - Ative/desative o sistema de antifakes\n2 - ative/desative o sistema de antilinks\n3 - ative/desative o sistema de antispam`)
                .setFooter(`requisitado por: ${message.author.tag}`, message.author.avatarURL({format: "png"}))

                msg.edit(embed1)
                msg.react()
                msg.react()
                msg.react()
                msg.react()
                db.set(`antifakes_${messsage.guild.id}`, "ativado")
                
            })
            let filtro2 = (reaction, usuario) => reaction.emoji.name === "" && usuario.id === message.author.id;
            let coletor2 = msg.createReactionCollector(filtro2, { max: 1 })
    
            coletor2.on("collect", cp => {

                let embed2 = new Discord.MessageEmbed()
                .setAuthor(`${bot.user.username} • Defesas`, bot.user.displayAvatarURL({format: "png"}))
                .setThumbnail(bot.user.displayAvatarURL({format: "png"}))
                .setColor('#15226D')
                .addField('Status atual do sistema:', `(${antifakes}) Defesa contra contas criadas recentemente\n(${antilinks}) Defesa contras links de outros servidores\n(${antispam}) Defesas contra flood em chats\n\n**Configure os sistemas:**\n1 - Ative/desative o sistema de antifakes\n2 - ative/desative o sistema de antilinks\n3 - ative/desative o sistema de antispam`)
                .setFooter(`requisitado por: ${message.author.tag}`, message.author.avatarURL({format: "png"}))

                msg.edit(embed2)
                msg.react()
                msg.react()
                msg.react()
                msg.react()
                db.set(`antilinks_${messsage.guild.id}`, "ativado")
               
            })
            let filtro3 = (reaction, usuario) => reaction.emoji.name === "" && usuario.id === message.author.id;
            let coletor3 = msg.createReactionCollector(filtro3, { max: 1 })
    
            coletor3.on("collect", cp => {

                let embed3 = new Discord.MessageEmbed()
                .setAuthor(`${bot.user.username} • Defesas`, bot.user.displayAvatarURL({format: "png"}))
                .setThumbnail(bot.user.displayAvatarURL({format: "png"}))
                .setColor('#15226D')
                .addField('Status atual do sistema:', `(${antifakes}) Defesa contra contas criadas recentemente\n(${antilinks}) Defesa contras links de outros servidores\n(${antispam}) Defesas contra flood em chats\n\n**Configure os sistemas:**\n1 - Ative/desative o sistema de antifakes\n2 - ative/desative o sistema de antilinks\n3 - ative/desative o sistema de antispam`)
                .setFooter(`requisitado por: ${message.author.tag}`, message.author.avatarURL({format: "png"}))

                msg.edit(embed3)
                msg.react()
                msg.react()
                msg.react()
                msg.react()
                db.set(`antiflood_${messsage.guild.id}`, "ativado")
               
            })
            let filtro4 = (reaction, usuario) => reaction.emoji.name === "" && usuario.id === message.author.id;
            let coletor4 = msg.createReactionCollector(filtro4, { max: 1 })
    
            coletor4.on("collect", cp => {
               
            })
        })           
        }
    }                                                                                                   
const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    config: {
        name: "settags",
        aliases: ['setar'],
        description: "setar as tags das abas de registro",
        usage: "d!settags {tag} {aba}"
    },
    run: async (bot, message, args) => {
    
        let tag = args[0]
        if(!tag) {
            const embed1 = new Discord.MessageEmbed()
                .setColor('#15226D')
                .setDescription('**⭕ | mencione uma tag para ser setada em uma aba - \`{tag} {aba}\`**')
            return message.channel.send(embed1)
        }
        let aba = args[1]
        if(!aba) {
            const embed2 = new Discord.MessageEmbed()
                .setColor('#15226D')
                .setDescription('**⭕ | mencione a aba que a tag sera setada - \`{tag} {aba}\`**')
           return message.channel.send(embed2)
        }

        const embed3 = new Discord.MessageEmbed()
            .setTitle('tag setada!')
            .setColor('#15226D')
            .setThumbnail(message.guild.iconURL({format: "png"}))
            .setDescription('**✔ tag setada com sucesso:**')
            .addField(`🔖 tag:`, `${tag}`)
            .addField(`📃 aba:`, `\`${aba}\``)
            .setFooter(`${message.guild.name}`, message.guild.iconURL({format: "png"}))
            .setTimestamp()

        message.channel.send(embed3)

        db.set(`tagregistro_${message.guild.id}`, tag)
        db.set(`setaba_${message.guild.id}`, aba)
    }
}
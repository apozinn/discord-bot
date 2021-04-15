const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    config: {
        name: "registros",
        aliases: ['regs'],
        description: "mostra os registros feitos por um membro",
        usage: "registros"
    },
    run: async (bot, message, args) => {
        
        let user = message.author;

        let registros = db.get(`registros_${message.guild.id}_${user.id}`)
        if(registros === null) registros = "0"

        const embed = new Discord.MessageEmbed()
            .setTitle(`📃 | registros de ${user.tag}`)
            .setColor('#15226D')
            .setThumbnail(message.author.avatarURL({format: "png"}))
            .addField('membros registrados:', `\`\`\`
            # ${registros} \`\`\`
            `)
            .setFooter(`${message.author.tag}`, message.author.avatarURL({format: "png"}))
            .setTimestamp()
            
        message.channel.send(embed)
    }
}
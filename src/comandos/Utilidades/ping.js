const Discord = require('discord.js');

module.exports = {
    config: {
        name: "ping",
        aliases: ['pingar'],
        description: "Mostra o ping do bot!",
        usage: "/ping"
    },
    run: async (bot, message, args) => {
        const ping = new Discord.MessageEmbed()
       .setTitle("**ping 🏓**")
            .setDescription(`⏳a latência do bot está em **${bot.ws.ping}ms**`)
           .setColor("#01F1F9")
            .setFooter(`${message.author.username}`, message.author.displayAvatarURL({format: "png"})); 
            
        message.channel.send(ping)
    }
} 
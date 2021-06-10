const Discord = require('discord.js')
const Levels = require("discord-xp");
const canvacord = require("canvacord");

module.exports = {
    config: {
        name: "rank",
        aliases: ['rank level', 'member rank'],
        description: "veja o seu rank no servidor",
        usage: "d!rank"
    },
     run: async (bot, message, args) => {
        
        const target = message.mentions.users.first() || message.author; 

        const user = await Levels.fetch(target.id, message.guild.id); 

        const neededXp = Levels.xpFor(parseInt(user.level) + 1);
        
        if (!user) return message.reply("**você ainda não tem xp, envie mensagens para ganhar!**"); 

         const rank = new canvacord.Rank()
             .setAvatar(`${message.author.displayAvatarURL({ dynamic: false, format: "png"})}`)
             .setCurrentXP(user.xp)
             .setLevel(user.level)
             .setRequiredXP(neededXp)
             .setStatus(`${message.author.presence.status}`)
             .setProgressBar('#15226D', "COLOR")
             .setUsername(`${message.author.username}`)
             .setDiscriminator(`${message.author.discriminator}`);
         
         rank.build()
             .then(data => {
                 const attachment = new Discord.MessageAttachment(data, "RankCard.png");
                 message.channel.send(attachment);
             });
     }
}
const Discord = require('discord.js');

module.exports = {
  config: {
    name: "div",
    aliases: ['divulgação'],
    description: "mostrar o número de usuários recrutados de um membro!",
    usage: "div"
  },
  run: async (bot, message, args) => {
    
    let user = message.author;
        message.guild.fetchInvites()
        .then

        (invites =>
            {
                const userInvites = invites.array().filter(o => o.inviter.id === user.id);
                var userInviteCount = 0;
                for(var i=0; i < userInvites.length; i++)
                {
                    var invite = userInvites[i];
                    userInviteCount += invite['uses'];
                }
          const embed = new Discord.MessageEmbed()
         .setTitle(`Nick: ${user.tag}`)
         .setColor('#15226D')
        .setThumbnail(message.author.displayAvatarURL({ format: "png"}))
         .addField('🏆MEMBROS RECRUTADOS🏆:', `\`\`\`
         # ${userInviteCount} membros \`\`\`
         `)
        .setFooter(`${message.guild.name}`, message. guild.iconURL({ format: "png" }))
        .setTimestamp()
        
          message.channel.send(embed) 
              
            }
        )
    }
}
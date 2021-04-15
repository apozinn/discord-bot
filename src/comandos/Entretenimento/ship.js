const Discord = require('discord.js');

module.exports = {
    config: {
        name: "ship",
        aliases: ['shipar'],
        description: "shipar dois membros do servidor",
        usage: "ship @menção"
    },
    run: async (bot, message, args) => {

    let user = message.mentions.users.first(2)[0] || this.client.users.cache.get(args[0])
      if(!member) return message.channel.send('**mencione o membros a serem shippados!**') 
    let target = message.mentions.users.first(2)[1] || this.client.users.cache.get(args[1])
 
    if(!user) user = message.author;
    if(!target) target = this.client.user;

    function progressBar(progress, maxProgress, size) {
        const progressT = Math.round((size * progress) / maxProgress)
        const progressEmpty = size - progressT;

        const progressText = `█`.repeat(progressT);
        const progressEmptyText = `:`.repeat(progressEmpty)

        return progressText + progressEmptyText;
    }
    let ship = Math.round(Math.random() * 100);
    let max = target.username.length
    let min = max - (max > 5 ? 5 : 3)

      const embed = new Discord.MessageEmbed()
          .setTitle('💕 | será que teremos um novo casal?')
          .setColor('#15226D')
          .setDescription(`> \`${user.username}\` + \`${target.username}\` = **${user.username.slice(0, 5)}${target.username.slice(min, max)}**\n\n> Eles tem **\`${ship}%\`** de chance de ficarem juntos.\n> \`${ship}%[${progressBar(ship, 100, 30)}]\``)
         .setImage('https://cdn.discordapp.com/attachments/676221874203525130/821003111598391326/6c22de43a76dcb6c0df4b1882037c5b4d14c460c_hq.gif')
          .setFooter(`casal shippado por: ${message.author.tag}`, message.author.displayAvatarURL({ format: "png" }))
    message.channel.send(embed) 

  }
};

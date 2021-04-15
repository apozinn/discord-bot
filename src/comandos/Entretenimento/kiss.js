const Discord = require('discord.js');

module.exports = {
  config: {
    name: "kiss",
    aliases: ['beijar'],
    description: "beijar um membro",
    usage: "kiss"
  },
  run: async (bot, message, args) => {

    let user = message.author;
    let member = message.mentions.users.first()
    if (!member) return message.channel.send('**mencione o membro que você quer beijar**')

    const embed = new Discord.MessageEmbed()
      .setColor('#15226D')
      .setDescription(`**💋 | ${user} beijou ${member}!**`)
      .setImage('https://cdn.discordapp.com/attachments/676221874203525130/821003111187218452/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f.gif')

    message.channel.send(embed)

  }
}
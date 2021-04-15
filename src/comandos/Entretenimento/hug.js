const Discord = require('discord.js');

module.exports = {
  config: {
    name: "hug",
    aliases: ['hug'],
    description: "abraçar um membro",
    usage: "hug"
  },
  run: async (bot, message, args) => {

    let user = message.author;
    let member = message.mentions.users.first()
    if (!member) return message.channel.send('**mencione o membro que você quer abraçar**')

    const embed = new Discord.MessageEmbed()
      .setColor('#15226D')
      .setDescription(`**💘 | ${user} abraçou ${member}!**`)
      .setImage('https://cdn.discordapp.com/attachments/775871873333723146/820988059084259338/08de7ad3dcac4e10d27b2c203841a99f.gif')

    message.channel.send(embed)

  }
}
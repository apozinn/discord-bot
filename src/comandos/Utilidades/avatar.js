const Discord = require('discord.js');

module.exports = {
  config: {
    name: "avatar",
    aliases: ['avatar'],
    description: "mostrar o avatar de um membro!",
    usage: "d!avatar"
  },
  run: async (bot, message, args) => {
let user = message.mentions.users.first() || bot.users.cache.get(args[0]) || message.author;

  let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });

  let embed = new Discord.MessageEmbed()
    .setColor(`#15226D`)
    .setTitle(`Avatar de ${user.username}`)
    .setImage(avatar)
    .setFooter(`requisitado por: ${message.author.tag}`, message.author.displayAvatarURL({ format: "png" }));
  await message.channel.send(embed);
  }
}

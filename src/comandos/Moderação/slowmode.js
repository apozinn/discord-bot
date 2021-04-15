const { MessageEmbed } = require('discord.js');
const ms = require('ms');

module.exports = {
    config: {
      name: "slowmode",
      aliases: ['desacelerar'],
      description: "seta um slowmode no chat",
      usage: "d!slowmode"
    },
    run: async (bot, message, args) => {
    if (!message.member.hasPermission('MANAGE_CHANNELS')) {
      const embed76 = new MessageEmbed()
        .setColor('#15226D')
        .setDescription('**⭕ | voce nao tem permissao para usar esse comando**')
      return message.channel.send(embed76).then(m => m.delete({ timeout: 5000 }))}

    if (!args[0]) {
      const embed49 = new MessageEmbed()
        .setColor('#15226D')
        .setDescription('**⭕ | mencione um tempo válido entre \`{5s e 6h}\`**')
      return message.channel.send(embed49).then(m => m.delete({ timeout: 5000 }))}

    const currentCooldown = message.channel.rateLimitPerUser;

    const embed = new MessageEmbed()
      .setFooter(`requisitado por: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));

    if (args[0] === 'off') {

      if (currentCooldown === 0) {
        const embed9 = new MessageEmbed()
          .setColor('#15226D')
          .setDescription('**⭕ | o slowmode ja esta desligado**')
        return message.channel.send(embed9).then(m => m.delete({ timeout: 5000 }))}

      embed.setTitle('slowmode on')
        .setColor('#15226D')
      return message.channel.setRateLimitPerUser(0)

    }

    const time = ms(args[0]) / 1000;

    if (isNaN(time)) {
      const embed38 = new MessageEmbed()
        .setColor('#15226D')
        .setDescription('**⭕ | mencione um tempo válido entre \`{5s e 6h}\`**')
      return message.channel.send(embed38).then(m => m.delete({ timeout: 5000 }))}

    if (time > 21600) {
      const embed00 = new MessageEmbed()
        .setColor('#15226D')
        .setDescription('**⭕ | o maximo de tempo permitido é 6h**')
      return message.channel.send(embed00).then(m => m.delete({ timeout: 5000 }))}

    if (currentCooldown === time) {
      const embed56 = new MessageEmbed()
        .setColor('#15226D')
        .setDescription('**⭕ | o slowmode ja esta setado nesse tempo**')
      return message.channel.send(embed56)}

    embed.setDescription(`**✅ | slowmode configurado para \`${args[0]}\` com sucesso**`)
      .setColor('#15226D')
     .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({format: "png"})) 
   .setTimestamp()

    message.channel.setRateLimitPerUser(time).then(m => m.send(embed));

  }
}

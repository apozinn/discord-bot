const Discord = require('discord.js');
const moment = require('moment');
moment.updateLocale('pt-BR');

module.exports = {
    config: {
      name: "serverinfo",
      aliases: ['servidor'],
      description: "Mostra as informações do servidor",
      usage: "serverinfo"
    },
    run: async (bot, message, args) => {    let membros = message.guild.members.cache
    let texto = message.guild.channels.cache.filter(ch => ch.type === 'text')
    let voz = message.guild.channels.cache.filter(bh => bh.type === 'voice')
    let posseid = message.guild.owner.id;
    let posse = message.guild.owner;
    const embed = new Discord.MessageEmbed()
      .setTitle(`☄ ${message.guild.name} ☄`)
    .setColor('#15226D')
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .addField(`👑 posse:`, `${posse}\n\`(${posseid})\``)
      .addField(`® ID do servidor:`, `\`${message.guild.id}\``)
      .addField(`👤 quantidade de membros:`, `\`${message.guild.memberCount}\``)
      .addField(`📮 data de criação:`, `**${moment(message.guild.createdTimestamp).format('DD/MM/YYYY')}**`)
      .addField(`© shard:`, `\`${message.guild.shard.id}\``)
      .addField(`🌍 região:`, `**${message.guild.region}**`)
      .addField(`💬 Canais:`, `**texto:**\`${texto.size}\`\n**voz:** \`${voz.size}\``)
      .setFooter(`${message.guild.name}`, message.guild.iconURL({format: "png"}))
      .setTimestamp()

    message.channel.send(embed)
  }
}

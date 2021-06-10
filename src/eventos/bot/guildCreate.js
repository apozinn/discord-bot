const Discord = require('discord.js');
const moment = require('moment');
moment.locale('pt-BR');

module.exports = {
    name: 'guildCreate',
    execute: function(guild, bot){
        const channel = bot.channels.cache.get('847617891112583169')

        let embed = new Discord.MessageEmbed()
            .setTitle('novo servidor')
            .setColor('#15226D')
            .setThumbnail(guild.iconURL({ format: 'png'}))
            .setDescription(`servidor: ${guild.name}\nID: ${guild.id}\ndono: ${guild.owner.displayName}\ndata: ${moment(new Date()).format('LLL')}`)
            .setFooter(bot.user.username, bot.user.avatarURL({ format: 'png'}))
            .setTimestamp()
        channel.send(embed)
    }
}
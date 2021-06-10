const Discord = require('discord.js');

module.exports =  {
    config: {
        name: 'convite',
        aliases: ['add'],
        description: 'adicione o bot nos eu servidor.',
        usage: 'd!convite'
    },
    run: async(bot, message, args) => {
        let embed = new Discord.MessageEmbed()
            .setAuthor(`${bot.user.username} • Convite`, bot.user.avatarURL({ format: 'png'}))
            .setColor('#15226D')
            .setDescription(`Adicione o bot Daisuke no seu servidor!\n\nlinks:\n[adicione o bot](https://discordapp.com/oauth2/authorize?client_id=702615479436443759&scope=bot&permissions=8)\n[servidor de suporte](https://discord.gg/tkf)`)
            .setFooter(`requisitad por: ${message.author.tag}`, message.author.avatarURL({format: 'png'}))
            .setTimestamp()
        message.channel.send(embed)
    }
}
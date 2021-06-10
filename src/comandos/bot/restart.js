const Discord = require("discord.js");
const config = require('../../../config.json')

module.exports = {
    config: {
        name: "restart",
        aliases: ['reiniciar'],
        description: "reiniciar o bot",
        usage: 'restart'
    },
    run: async (bot, message, args) => {
     message.channel.send('bot reiniciando...').then(() => {
         process.exit().then(() => {
             bot.login('NzAyNjE1NDc5NDM2NDQzNzU5.XqCnqA.NKe0N3FRbScsS76Wn2ng2--QmQg')
         })
     })
    }
}
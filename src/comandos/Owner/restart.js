const Discord = require("discord.js");
const config = require('./config.json')

module.exports = {
    config: {
        name: "restart",
        aliases: ['reiniciar'],
        description: "reiniciar o bot",
        usage: 'restart'
    },
    run: async (bot, message, args) => {
    let owner = config.owner;
    if(user.id != owner) {return}
    
    const embed = new Discord.MessageEmbed()
        .setColor('#15226D')
        .setDescription('bot reiniciado com sucesso')
    message.channel.send(embed)

        process.exit();
    }
}
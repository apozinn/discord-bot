const Discord = require('discord.js');

module.exports = {
    config: {
        name: "clear",
        aliases: ['limpar'],
        description: "Limpe mensagens!",
        usage: 'clear'
    },
    run: async (bot, message, args) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('você precisa de permissão para isso!');
        if (!message.guild.me.hasPermission("MANAGES_MESSAGES")) return message.reply('eu preciso de permissão para isso!');

        let quantia = args[0]
        if (!quantia) {
          const embed0 = new Discord.MessageEmbed()
       .setColor('#15226D')
      .setDescription('**⭕ | é necessário uma quantidade**')
      return message.channel.send(embed0).then(msg => {
      msg.delete({ timeout: 8000 })})

        }
        if (isNaN(quantia)) return message.reply('você só pode colocar apenas números!');

        if (parseInt(quantia) > 100 || parseInt(quantia) < 1) { return message.reply
        const embed1 = new Discord.MessageEmbed()
       .setColor('#15226D')
       .setDescription('**⭕ | mencione a quantidade de mensagens a serem apagadas**')
       message.channel.send(embed1).then(msg => {
      msg.delete({ timeout: 8000 })})
} 

        try {
            message.channel.bulkDelete(quantia);
           const embed2 = new Discord.MessageEmbed()
      .setDescription(`**♻ | \`${quantia}\` mensagens foram apagadas**`)
      .setColor('#15226D')
      .setFooter(`chat limpo por: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));
      await message.channel.send(embed2).then(msg => {
      msg.delete({ timeout: 8000 })})
 
        } catch (err) {
            console.log(err);
            message.channel.send(`Ocorreu um erro ao limpar as mensagens!`)
        }
    }
}
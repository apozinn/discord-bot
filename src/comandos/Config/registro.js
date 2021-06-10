const Discord = require('discord.js');
const { MessageCollector } = require("discord.js-collector");

module.exports = {
    config: {
        name: "registro",
        aliases: ['configreg'],
        description: "configurar o sistema de registro",
        usage: "registro + args"
    },
    run:  async (bot, message, args) => {
        
        if(args[0] === 'configtags') {
            const embed1 = new Discord.MessageEmbed()
            .setTitle('config tags')
            .setColor('RANDOM')
            .setThumbnail(message.guild.iconURL({format: "png"}))
            .setDescription('configure as tags de registro')
            .addField('para setar a tag de masculino:', 'reaja com 👱‍♂️')
            .setFooter(`${message.guild.name}`, message.guild.iconURL({format: "png"}))
            .setTimestamp()

        message.channel.send(embed1).then(msg => {
        msg.react("")
        
 
      let filtro = (reaction, usuario) => reaction.emoji.name === "" && usuario.id === message.author.id;
      let coletor = msg.createReactionCollector(filtro, {max: 1})
 
      coletor.on("collect", cp => {
            cp.remove(message.author.id); {
        
                const botMessage = message.channel.send("**mencione a tag que deseja setar para masculino");
                const userMessage = MessageCollector.asyncQuestion({
                 botMessage,
                 user: message.author.id,
               });
               const tagmacho = message.roles.mentions.first()
               return message.channel.send(`Tag masculino atualizada com sucesso! ${tagmacho}`)
    }
        })
    })
    }
  }
}
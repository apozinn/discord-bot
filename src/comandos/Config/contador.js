const Discord = require('discord.js');
const db = require('quick.db')

module.exports = {
    config: {
        name: "contador",
        aliases: ['config', 'contador'],
        description: "configure o sistema e contador",
        usage: "contador"
    },
    run: async (bot, message, args) => {
        
            const embedinicio = new Discord.MessageEmbed()
                    .setAuthor(`${bot.user.username} • Help`,
                    bot.user.displayAvatarURL({format: "png"}))
                    .setColor('#15226D')
                    .setThumbnail(bot.user.displayAvatarURL({format: "png"}))
                    .setDescription('**tendo dificuldades?**\n[servidor de suporte](https://discordapp.com)')
                    .addField('contador atual:', `**mensagem:** nenhuma\n**canal:** #teste-comando\n**emojis:** 1`)
                    .addField('Abas:', '**1 - edite a mensagem do contador\n2 - edite o canal do contador\n3 - configue os emojis do contador\n4 - para resetar todas as configs**')
                    .setFooter(`${bot.user.username} • Aba inicial`, bot.user.displayAvatarURL({format: "png"}))

                 message.channel.send(embedinicio).then(msg => {
                    msg.react('827317085935501324')
                    msg.react('827291439074508810')
                    msg.react('827291508578975764')
                    msg.react('827291561917415424')

      let filtro1 = (reaction, usuario) => reaction.emoji.name === "emojibot1" && usuario.id === message.author.id;
      let coletor1 = msg.createReactionCollector(filtro1)
 
      coletor1.on("collect", cp => {
       {
                const embed1 = new Discord.MessageEmbed()
                .setAuthor(`${bot.user.username} • mensagem`,
                bot.user.displayAvatarURL({format: "png"}))
                .setDescription('envie a mensagem do contador')
                .setColor('#15226D')
                .setFooter(`${bot.user.username} • Contador`, bot.user.displayAvatarURL({format: "png"}))

      const filter = m => m.content.includes('{contador}');
      const collector = message.channel.createMessageCollector(filter, { max: 1, time: 5000 });

                collector.on('collect', m => {
	              console.log(`nova mensagem do contador: ${m.content}`)
                db.set(`messagecontador_${message.guild.id}`, `${m.content}`)
               
                m.delete()
});



                 message.channel.send(embed1)
    }
        })
        let filtro2 = (reaction, usuario) => reaction.emoji.name === "emojibot2" && usuario.id === message.author.id;
      let coletor2 = msg.createReactionCollector(filtro2)
 
      coletor2.on("collect", cp => {
       {
                const embed2 = new Discord.MessageEmbed()
                .setAuthor(`${bot.user.username} • Canal`,
                    bot.user.displayAvatarURL({format: "png"}))
                    .setDescription('mencione o canal que deseja setar para o contador')
                    .setColor('#15226D')
                    .setFooter(`${bot.user.username} • Contador`, bot.user.displayAvatarURL({format: "png"}))
                    
                    const filter = m =>  message.mentions.channels.first() || message.guild.channels.cache.get(m.content)
                    const collector = message.channel.createMessageCollector(filter, { max: 1, time: 5000 });
              
                              collector.on('collect', m => {
                              console.log(`nova mensagem do contador: ${m.content}`)
                              db.set(`messagecontador_${message.guild.id}`, `${m.content}`)
                             
                              m.delete()

    })

                 message.channel.send(embed2)
                 msg.reactions.removeAll()
    }
        })
        let filtro3 = (reaction, usuario) => reaction.emoji.name === "emojibot3" && usuario.id === message.author.id;
      let coletor3 = msg.createReactionCollector(filtro3)
 
      coletor3.on("collect", cp => {
         {
                const embed3 = new Discord.MessageEmbed()
                .setAuthor(`${bot.user.username} • Emojis`,
                bot.user.displayAvatarURL({format: "png"}))
                .setDescription('selecione os emojis do contador')
                .addField('emojis 1:', '1️⃣')
                .addField('emojis 2:', '2️⃣')
                .setColor('#15226D')
                .setFooter(`${bot.user.username} • Contador`, bot.user.displayAvatarURL({format: "png"}))

                 msg.edit(embed3)
                 msg.reactions.removeAll()
                 msg.react('1️⃣')
                 msg.react('2️⃣')
                
    }
        })
        let filtro4 = (reaction, usuario) => reaction.emoji.name === "emojibot4" && usuario.id === message.author.id;
        let coletor4 = msg.createReactionCollector(filtro4)
   
        coletor4.on("collect", cp => {
          {
                  const embed4 = new Discord.MessageEmbed()
                  .setAuthor(`${bot.user.username} • Resetar`,
                  bot.user.displayAvatarURL({format: "png"}))
                  .setDescription('deseja resetar todas as config do contador?')
                  .setColor('#15226D')
                  .setFooter(`${bot.user.username} • Contador`, bot.user.displayAvatarURL({format: "png"}))
  
                   msg.edit(embed4)
                   msg.reactions.removeAll()
                   msg.react('✔')
                   msg.react('❌')
      }
          })
      })
    }
  }
const Discord = require('discord.js')

module.exports = {
    config: {
        name: "registrar",
        aliases: ['reg'],
        description: "registrar membros",
        usage: "registrar {membro}"

    },
    run: async (bot, message, args) => {
        let membro = message.mentions.users.first()
        let registrador = message.author;

        if(!membro) {
            const embed1 = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription('mencione um membro!')
            return message.channel.send(embed1)
        }

        const embed2 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`1️⃣ <@&825198761013411840>\n2️⃣ <@&825198804004503592>\n3️⃣ <@&825198843339210782>`)
        message.channel.send(embed2).then(msg => {
            msg.react("1️⃣")
            msg.react("2️⃣")
            msg.react("3️⃣")

            let filtro = (reaction, usuario) => reaction.emoji.name === "1️⃣" && usuario.id === message.author.id;
            let coletor = msg.createReactionCollector(filtro, {max: 1})
       
            coletor.on("collect", cp => {
                  {

            const role = message.guild.roles.cache.find  (role => role.name === 'registrado')
            const member = message.mentions.members.first();
                  member.roles.add(role);
                    
                      const embed3 = new Discord.MessageEmbed()

                        .setTitle('aba 2')
                        .setColor('RANDOM')
                        .setDescription('aba 2 de registro')
              msg.edit(embed3);
                  }
                })
        })
    }
         
}
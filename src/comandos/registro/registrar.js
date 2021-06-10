const Discord = require('discord.js')

module.exports = {
    config: {
        name: "registrar",
        aliases: ['reg'],
        description: "registrar membros",
        usage: "registrar {membro}"

    },
    run: async(bot, message, args) => {
        let membro = message.mentions.users.first();
        let registrador = message.author;
        let tagregistrado = message.guild.roles.cache.find(x => x.name === "Registrado");

        if (!membro) {
            return message.channel.send('É necessario que você mencione um membro a ser registrado.')
        }
        if (tagregistrado) {
            return message.channel.send('Não foi possivel encontrar a tag de registrado.')
        }
        if (message.mentions.users.first().bot) {
            return message.channel.send('Não é possivel registrador um bot.')
        }
        if (membro.roles.cache.some(role => role.name === 'Registrado'))  {
              return message.channel.send('Esse membro ja esta registrador!')
            }

        const embed1 = new Discord.MessageEmbed()
            .setThumbnail(message.guild.iconURL({ format: "png" }))
            .setColor('#15226D')
            .setDescription(`Registrador: ${registrador}\nMembro: ${membro}\n\n1 - ${tag1}\n2 - ${tag2}\n3 - ${tag3}\n\nSe hover um erro ao carregar o registro, reaja com 🔁`)
            .setFooter(`${message.guild.name}`, message.guild.iconURL({ format: "png" }))
        
            message.channel.send(embed1).then(msg => {
            
            msg.react("⬅")
            msg.react("1️⃣")
            msg.react("2️⃣")
            msg.react("3️⃣")
            msg.react("✅")

            let filtro = (reaction, usuario) => reaction.emoji.name === "1️⃣" && usuario.id === message.author.id;
            let coletor = msg.createReactionCollector(filtro, { max: 1 })

            coletor.on("collect", cp => {
                {
                    membro.roles.add(role);

                    const embed2 = new Discord.MessageEmbed()
                    .setThumbnail(message.guild.iconURL({ format: "png" }))
                    .setColor('#15226D')
                    .setDescription(`Registrador: ${registrador}\nMembro: ${membro}\n\n1 - ${tag1}\n2 - ${tag2}\n3 - ${tag3}\n\nSe hover um erro ao carregar o registro, reaja com 🔁`)
                    .setFooter(`${message.guild.name}`, message.guild.iconURL({ format: "png" }))

                    msg.edit(embed2)
                    msg.react("⬅")
                    msg.react("1️⃣")
                    msg.react("2️⃣")
                    msg.react("3️⃣")
                    msg.react("➡") 
                    msg.react("✅")
                }
            })
            let filtro2 = (reaction, usuario) => reaction.emoji.name === "2️⃣" && usuario.id === message.author.id;
            let coletor2 = msg.createReactionCollector(filtro2, { max: 1 })

            coletor2.on("collect", cp => {
                {

                    membro.roles.add(role);

                    const embed3 = new Discord.MessageEmbed()
                    .setThumbnail(message.guild.iconURL({ format: "png" }))
                    .setColor('#15226D')
                    .setDescription(`Registrador: ${registrador}\nMembro: ${membro}\n\n1 - ${tag1}\n2 - ${tag2}\n3 - ${tag3}\n\nSe hover um erro ao carregar o registro, reaja com 🔁`)
                    .setFooter(`${message.guild.name}`, message.guild.iconURL({ format: "png" }))
                    
                    msg.edit(embed3)
                    msg.react("⬅")
                    msg.react("1️⃣")
                    msg.react("2️⃣")
                    msg.react("3️⃣")
                    msg.react("➡") 
                    msg.react("✅")
                }
            })
            let filtro3 = (reaction, usuario) => reaction.emoji.name === "3️⃣" && usuario.id === message.author.id;
            let coletor3 = msg.createReactionCollector(filtro3, { max: 1 })

            coletor3.on("collect", cp => {
                {

                    const role = message.guild.roles.cache.find(role => role.name === 'registrado')
                    const member = message.mentions.members.first();
                    member.roles.add(role);

                    const embed4 = new Discord.MessageEmbed()
                    .setThumbnail(message.guild.iconURL({ format: "png" }))
                    .setColor('#15226D')
                    .setDescription(`Registrador: ${registrador}\nMembro: ${membro}\n\n1 - ${tag1}\n2 - ${tag2}\n3 - ${tag3}\n\nSe hover um erro ao carregar o registro, reaja com 🔁`)
                    .setFooter(`${message.guild.name}`, message.guild.iconURL({ format: "png" }))

                    msg.edit(embed4);
                    msg.react("⬅")
                    msg.react("1️⃣")
                    msg.react("2️⃣")
                    msg.react("3️⃣")
                    msg.react("➡") 
                    msg.react("✅")
                }
            })
        })
    }

}
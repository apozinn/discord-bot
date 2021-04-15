const Discord = require('discord.js');

module.exports = {
    config: {
        name: "help",
        aliases: ['helpcommands'],
        description: "comando de help",
        usage: "help"
    },
    run: async (bot, message, args) => {
        
            const embedinicio = new Discord.MessageEmbed()
                    .setAuthor(`${bot.user.username} • Help`,
                    bot.user.displayAvatarURL({format: "png"}))
                    .setColor('#15226D')
                    .setThumbnail(bot.user.displayAvatarURL({format: "png"}))
                    .addField(`<a:emojibotseta1:827547474666979369> Links:`, `[Me adicione](https://discordapp.com/oauth2/authorize?client_id=702615479436443759&scope=bot&permissions=8)\n[Servidor de suporte](https://discordapp.com)\n[Seja suporte](https://discordapp.com)`)
                    .addField('<a:emojibotseta1:827547474666979369> Sistemas de config:', `<:emojiseta2:827566704552968203> **d!setregistro**\n<:emojiseta2:827566704552968203> **d!antiraid**\n<:emojiseta2:827566704552968203> **d!setvip**`)
                    .addField('<a:emojibotseta1:827547474666979369> Conheça meus comandos', '<a:emojibot1:827291335123533834>   **Moderação**\n<a:emojibot2:827291439074508810>  **Utilidades**\n<a:emojibot3:827291508578975764>  **Config**\n<a:emojibot4:827291561917415424>  **Entretenimento**\n<a:emojibot5:827291637750562857>  **Defesas**\n<a:emojibot6:827291685683855410>  **Economia**\n<a:emojibot7:827291710572855316>  **Sistema vips**')
                    .setImage('https://media.discordapp.net/attachments/775871873333723146/827593420423299102/20210402_134806.jpg?width=924&height=292')
                    .setFooter(`${bot.user.username} • Aba inicial`, bot.user.displayAvatarURL({format: "png"}))

                 message.channel.send(embedinicio).then(msg => {
                    msg.react('827317085935501324')
                    msg.react('827291439074508810')
                    msg.react('827291508578975764')
                    msg.react('827291561917415424')
                    msg.react('827291637750562857')
                    msg.react('827291685683855410')
                    msg.react('827291710572855316')
                    msg.react('820472102880411670')
        

        let filtroinicio = (reaction, usuario) => reaction.emoji.name === "setapretabot" && usuario.id === message.author.id;
        let coletorinicio = msg.createReactionCollector(filtroinicio)  

        coletorinicio.on("collect", cp => {
              cp.remove(message.author.id); {
                  const embedinit = new Discord.MessageEmbed()
                  .setAuthor(`${bot.user.username} • Help`,
                  bot.user.displayAvatarURL({format: "png"}))
                  .setColor('#15226D')
                  .setThumbnail(bot.user.displayAvatarURL({format: "png"}))
                  .addField(`<a:emojibotseta1:827547474666979369> Links:`, `[Me adicione](https://discordapp.com/oauth2/authorize?client_id=702615479436443759&scope=bot&permissions=8)\n[Servidor de suporte](https://discordapp.com)\n[Seja suporte](https://discordapp.com)`)
                  .addField('<a:emojibotseta1:827547474666979369> Sistemas de config:', `<:emojiseta2:827566704552968203> **d!setregistro**\n<:emojiseta2:827566704552968203> **d!antiraid**\n<:emojiseta2:827566704552968203> **d!setvip**`)
                  .addField('<a:emojibotseta1:827547474666979369> Conheça meus comandos', '<a:emojibot1:827291335123533834>   **Moderação**\n<a:emojibot2:827291439074508810>  **Utilidades**\n<a:emojibot3:827291508578975764>  **Config**\n<a:emojibot4:827291561917415424>  **Entretenimento**\n<a:emojibot5:827291637750562857>  **Defesas**\n<a:emojibot6:827291685683855410>  **Economia**\n<a:emojibot7:827291710572855316>  **Sistema vips**')
                  .setImage('https://media.discordapp.net/attachments/775871873333723146/827593420423299102/20210402_134806.jpg?width=924&height=292')
                  .setFooter(`${bot.user.username} • Aba inicial`, bot.user.displayAvatarURL({format: "png"}))
             
                   msg.edit(embedinit)
                   msg.react('827317085935501324')
                   msg.react('827291439074508810')
                   msg.react('827291508578975764')
                   msg.react('827291561917415424')
                   msg.react('827291637750562857')
                   msg.react('827291685683855410')
                   msg.react('827291710572855316')
                   msg.react('820472102880411670')
      }
          })
      let filtro1 = (reaction, usuario) => reaction.emoji.name === "emojibot1" && usuario.id === message.author.id;
      let coletor1 = msg.createReactionCollector(filtro1)
 
      coletor1.on("collect", cp => {
       {
                const embed1 = new Discord.MessageEmbed()
                .setAuthor(`${bot.user.username} • Moderação`,
                bot.user.displayAvatarURL({format: "png"}))
                .setThumbnail(bot.user.displayAvatarURL({format: "png"}))
                .setDescription('<a:emojibotseta1:827547474666979369> **d!ban** - banir um membro do servidor\n<a:emojibotseta1:827547474666979369> **d!unban** - o desbanir um membro\n<a:emojibotseta1:827547474666979369> **d!kick** - kickar um membro do servidor\n<a:emojibotseta1:827547474666979369> **d!mute** - mutar um membro\n<a:emojibotseta1:827547474666979369> **d!unmute** - desmute um membro\n<a:emojibotseta1:827547474666979369> **d!adv** - de uma advertência em um membro\n<a:emojibotseta1:827547474666979369> **d!radv** - retire as advertências de um membro\n<a:emojibotseta1:827547474666979369> **d!advs** - de uma advertência em um staff\n<a:emojibotseta1:827547474666979369> **d!radvs** - retire as advertências de um staff\n<a:emojibotseta1:827547474666979369> **d!lock** - feche um chat do servidor\n<a:emojibotseta1:827547474666979369> **d!unlock** - desbloqueie um chat\n<a:emojibotseta1:827547474666979369> **d!slowmode** - sete um cooldown em um chat')
                .setColor('#15226D')
                .setImage('https://media.discordapp.net/attachments/775871873333723146/827582315122786364/20210402_125811.jpg?width=924&height=292')
                .setFooter(`${bot.user.username} • Aba 1`, bot.user.displayAvatarURL({format: "png"}))

                 msg.edit(embed1)
                 msg.reactions.removeAll()
                 msg.react('827317085935501324')
                 msg.react('827291439074508810')
                 msg.react('827291508578975764')
                 msg.react('827291561917415424')
                 msg.react('827291637750562857')
                 msg.react('827291685683855410')
                 msg.react('827291710572855316')
                 msg.react('820472102880411670')
                   
    }
        })
        let filtro2 = (reaction, usuario) => reaction.emoji.name === "emojibot2" && usuario.id === message.author.id;
      let coletor2 = msg.createReactionCollector(filtro2)
 
      coletor2.on("collect", cp => {
       {
                const embed2 = new Discord.MessageEmbed()
                .setAuthor(`${bot.user.username} • Utilidades`,
                    bot.user.displayAvatarURL({format: "png"}))
                    .setThumbnail(bot.user.displayAvatarURL({format: "png"}))
                    .setDescription('<a:emojibotseta1:827547474666979369> **d!avatar** - mostra o avatar de um membro\n<a:emojibotseta1:827547474666979369> **d!sugestão** - enfie uma sugestão para o servidor\n<a:emojibotseta1:827547474666979369> **d!div** - veja quantas pessoas um membro convidou pro servidor\n<a:emojibotseta1:827547474666979369> **d!clear** - limpe mensagens do chat\n<a:emojibotseta1:827547474666979369> **d!userinfo** - mostra as informações de um membro\n<a:emojibotseta1:827547474666979369> **d!serverinfo** - mostra as informações do servidor\n<a:emojibotseta1:827547474666979369> **d!level** - veja o seu level\n<a:emojibotseta1:827547474666979369> **d!anúncio** - envie um anúncio no seu servidor\n<a:emojibotseta1:827547474666979369> **s!giveaway** - crie um sorteio personalizado')
                    .setColor('#15226D')
                    .setImage('https://media.discordapp.net/attachments/775871873333723146/827582277222924358/20210402_133255.jpg?width=924&height=292')
                    .setFooter(`${bot.user.username} • Aba 2`, bot.user.displayAvatarURL({format: "png"}))

                 msg.edit(embed2)
                 msg.reactions.removeAll()
                 msg.react('827317085935501324')
                 msg.react('827291439074508810')
                 msg.react('827291508578975764')
                 msg.react('827291561917415424')
                 msg.react('827291637750562857')
                 msg.react('827291685683855410')
                 msg.react('827291710572855316')
                 msg.react('820472102880411670')
    }
        })
        let filtro3 = (reaction, usuario) => reaction.emoji.name === "emojibot3" && usuario.id === message.author.id;
      let coletor3 = msg.createReactionCollector(filtro3)
 
      coletor3.on("collect", cp => {
         {
                const embed3 = new Discord.MessageEmbed()
                .setAuthor(`${bot.user.username} • Config`,
                bot.user.displayAvatarURL({format: "png"}))
                .setThumbnail(bot.user.displayAvatarURL({format: "png"}))
                .setDescription('<:emojiseta2:827566704552968203> **Sistema de registro:**\n<a:emojibotseta1:827547474666979369> **d!setregistro** - configure o sistema de registros\n<a:emojibotseta1:827547474666979369> **d!regitrar** - registre um membro do servidor\n<a:emojibotseta1:827547474666979369> **d!registros** - veja todos os registros feitos por um registrador\n<a:emojibotseta1:827547474666979369> **d!painel registro** - veja um painel com todas as infos do sistema de registro')
                .addField('<:emojiseta2:827566704552968203> Outros sistemas:', '<a:emojibotseta1:827547474666979369> **d!setwelcome** - configure o sistema de boas-vindas do servidor\n<a:emojibotseta1:827547474666979369> **d!contador** - configure o cntador do servidor\n<a:emojibotseta1:827547474666979369> **d!setautorole** - sete uma tag para os novos membros\n<a:emojibotseta1:827547474666979369> **d!setlogs** - configure o sistema de logs do servidor')
                .setColor('#15226D')
                .setImage('https://media.discordapp.net/attachments/775871873333723146/827582277491884062/20210402_133330.jpg?width=924&height=292https://media.discordapp.net/attachments/775871873333723146/827582277491884062/20210402_133330.jpg?width=924&height=292')
                .setFooter(`${bot.user.username} • Aba 3`, bot.user.displayAvatarURL({format: "png"}))

                 msg.edit(embed3)
                 msg.reactions.removeAll()
                 msg.react('827317085935501324')
                 msg.react('827291439074508810')
                 msg.react('827291508578975764')
                 msg.react('827291561917415424')
                 msg.react('827291637750562857')
                 msg.react('827291685683855410')
                 msg.react('827291710572855316')
                 msg.react('820472102880411670')
    }
        })
        let filtro4 = (reaction, usuario) => reaction.emoji.name === "emojibot4" && usuario.id === message.author.id;
      let coletor4 = msg.createReactionCollector(filtro4)
 
      coletor4.on("collect", cp => {
        {
                const embed4 = new Discord.MessageEmbed()
                .setAuthor(`${bot.user.username} • Entretenimento`,
                bot.user.displayAvatarURL({format: "png"}))
                .setThumbnail(bot.user.displayAvatarURL({format: "png"}))
                .setDescription('<a:emojibotseta1:827547474666979369> **d!perfil** - veja seu perfil\n<a:emojibotseta1:827547474666979369> **d!say** - faça o bot dizer qualquer palavra\n<a:emojibotseta1:827547474666979369> **d!marry** - case com um membro\n<a:emojibotseta1:827547474666979369> **d!divorce** - se divorcie de um de alguém\n<a:emojibotseta1:827547474666979369> **d!meme** - veja um meme aleatório\n<a:emojibotseta1:827547474666979369> **d!ship** - ship dois membros\n<a:emojibotseta1:827547474666979369> **d!perfil** - veja seu perfil no bot\n<a:emojibotseta1:827547474666979369> **d!sobremim** - escolha uma menssagem para apaarecer no seu perfil')
                .setColor('#15226D')
                .setImage('https://media.discordapp.net/attachments/775871873333723146/827582275766976512/20210402_133536.jpg?width=924&height=292')
                .setFooter(`${bot.user.username} • Aba 4`, bot.user.displayAvatarURL({format: "png"}))

                 msg.edit(embed4)
                 msg.reactions.removeAll()
                 msg.react('827317085935501324')
                 msg.react('827291439074508810')
                 msg.react('827291508578975764')
                 msg.react('827291561917415424')
                 msg.react('827291637750562857')
                 msg.react('827291685683855410')
                 msg.react('827291710572855316')
                 msg.react('820472102880411670')
    }
        })
        let filtro5 = (reaction, usuario) => reaction.emoji.name === "emojibot5" && usuario.id === message.author.id;
      let coletor5 = msg.createReactionCollector(filtro5)
 
      coletor5.on("collect", cp => {
       {
                const embed5 = new Discord.MessageEmbed()
                .setAuthor(`${bot.user.username} • Defesas`,
                bot.user.displayAvatarURL({format: "png"}))
                .setThumbnail(bot.user.displayAvatarURL({format: "png"}))
                .setDescription('<a:emojibotseta1:827547474666979369> **d!setantifakes** - configure de sistema de antifakes\n<a:emojibotseta1:827547474666979369> **d!antiraid** - configure o sistema de antiraid\n<a:emojibotseta1:827547474666979369> **d!antiflood** - proteção contra floods nos chats\n<a:emojibotseta1:827547474666979369> **d!anticonvites** - proteção contra invites\n<a:emojibotseta1:827547474666979369> **d!painel defesas** - veja o painel do sistema de defesas')
                .setColor('#15226D')
                .setImage('https://media.discordapp.net/attachments/775871873333723146/827582276182605874/20210402_133410.jpg?width=924&height=292')
                .setFooter(`${bot.user.username} • Aba 5`, bot.user.displayAvatarURL({format: "png"}))

                 msg.edit(embed5)
                 msg.reactions.removeAll()
                 msg.react('827317085935501324')
                 msg.react('827291439074508810')
                 msg.react('827291508578975764')
                 msg.react('827291561917415424')
                 msg.react('827291637750562857')
                 msg.react('827291685683855410')
                 msg.react('827291710572855316')
                 msg.react('820472102880411670')
    }
        })
        let filtro6 = (reaction, usuario) => reaction.emoji.name === "emojibot6" && usuario.id === message.author.id;
      let coletor6 = msg.createReactionCollector(filtro6)
 
      coletor6.on("collect", cp => {
        {
                const embed6 = new Discord.MessageEmbed()
                    .setAuthor(`${bot.user.username} • Economia`,
                    bot.user.displayAvatarURL({format: "png"}))
                    .setThumbnail(bot.user.displayAvatarURL({format: "png"}))
                    .setDescription('<a:emojibotseta1:827547474666979369> **d!daily** - receba seu dinheiro diário\n<a:emojibotseta1:827547474666979369> **d!trabalhar** - trabalhe para ganhar dinheiro e xp\n<a:emojibotseta1:827547474666979369> **d!saldo**- veja seu saldo de dinheiro\n<a:emojibotseta1:827547474666979369> **d!depositar** - deposite dinheiro na sua conta bancária\n<a:emojibotseta1:827547474666979369> **d!sacar** - saque o seu dinheiro do banco\n<a:emojibotseta1:827547474666979369> **d!transferir** - transfira uma quantia para um membro\n<a:emojibotseta1:827547474666979369> **d!rankmoney** - veja o rank de membros mais ricos\n<a:emojibotseta1:827547474666979369> **d!roubar** - roube dinheiro de um membro\n<a:emojibotseta1:827547474666979369> **d!inv** - veja os itens do seu inventário\n<a:emojibotseta1:827547474666979369> **d!loja** - veja a loja de itens e bônus\n<a:emojibotseta1:827547474666979369> **d!comprar** - compre itens e bônus')
                    .setColor('#15226D')
                    .setImage('https://media.discordapp.net/attachments/775871873333723146/827582276866801684/20210402_133349.jpg?width=924&height=292')
                    .setFooter(`${bot.user.username} • Aba 6`, bot.user.displayAvatarURL({format: "png"}))

                 msg.edit(embed6)
                 msg.reactions.removeAll()
                 msg.react('827317085935501324')
                 msg.react('827291439074508810')
                 msg.react('827291508578975764')
                 msg.react('827291561917415424')
                 msg.react('827291637750562857')
                 msg.react('827291685683855410')
                 msg.react('827291710572855316')
                 msg.react('820472102880411670')
    }
        })
        let filtro7 = (reaction, usuario) => reaction.emoji.name === "emojibot7" && usuario.id === message.author.id;
      let coletor7 = msg.createReactionCollector(filtro7)
 
      coletor7.on("collect", cp => {
        {
              const embed7 = new Discord.MessageEmbed()
              .setAuthor(`${bot.user.username} • Sistema vips`,
              bot.user.displayAvatarURL({format: "png"}))
              .setThumbnail(bot.user.displayAvatarURL({format: "png"}))
              .setDescription('<:emojiseta2:827566704552968203> **Moderadores:**\n<a:emojibotseta1:827547474666979369> **d!setvip** - configure o vip de um membro\n<a:emojibotseta1:827547474666979369> **d!removervip** - remova a perm de vip de um membro\n<a:emojibotseta1:827547474666979369> **d!vips** - veja todos os vips do servidor')
              .addField('<:emojiseta2:827566704552968203> Membros:', '<a:emojibotseta1:827547474666979369> **d!addvip** - adicione o seu vip em um membro\n<a:emojibotseta1:827547474666979369> **d!rvip** - remova o seu vip de um membro\n<a:emojibotseta1:827547474666979369> **d!vip** configure o seu vip')
              .addField('<:emojiseta2:827566704552968203> Familias:', '<a:emojibotseta1:827547474666979369> **d!familia** - configure um vip pra uma familia\n<a:emojibotseta1:827547474666979369> **d!rfamilia** - remova o vip de uma familia\n<a:emojibotseta1:827547474666979369> **d!addtag** - adicone a tag vip de uma familia\n<a:emojibotseta1:827547474666979369> **d!rtag** - remova a tag vip de uma familia\n<a:emojibotseta1:827547474666979369> **d!vipfamily** - configure ao vip de uma familia')
              .setColor('#15226D')
              .setImage('https://media.discordapp.net/attachments/775871873333723146/827582276611211284/20210402_133432.jpg?width=924&height=292')
              .setFooter(`${bot.user.username} • Aba 7`, bot.user.displayAvatarURL({format: "png"}))

               msg.edit(embed7)
               msg.reactions.removeAll()
               msg.react('827317085935501324')
               msg.react('827291439074508810')
               msg.react('827291508578975764')
               msg.react('827291561917415424')
               msg.react('827291637750562857')
               msg.react('827291685683855410')
               msg.react('827291710572855316')
               msg.react('820472102880411670')
          }
        })
        
      })
    }
  }
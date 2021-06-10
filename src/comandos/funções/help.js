const Discord = require('discord.js');
const foto = 'https://ibb.co/zn29ZDW';

module.exports = {
    config: {
        name: "help",
        aliases: ['help'],
        description: "comando de help",
        usage: "help"
    },
    run: async (bot, message, args) => {
        
            const embedinicio = new Discord.MessageEmbed()
                    .setAuthor(`${bot.user.username} • Help`,
                    bot.user.displayAvatarURL({format: "png"}))
                    .setColor('#15226D')
                    .setThumbnail(bot.user.displayAvatarURL({format: "png"}))
                    .addField(`<a:setapretabot:838063291275804714> Links`, `[Me adicione](https://discordapp.com/oauth2/authorize?client_id=702615479436443759&scope=bot&permissions=8)\n[Servidor de suporte](https://discordapp.com)\n[Seja suporte](https://discordapp.com)`)
                    .addField('<a:setapretabot:838063291275804714> Sistemas de config', `<:emojiseta2:827566704552968203> **d!registro**\n<:emojiseta2:827566704552968203> **d!antiraid**\n<:emojiseta2:827566704552968203> **d!setvip**`)
                    .addField('<a:setapretabot:838063291275804714> Conheça meus comandos', '<a:emojibot1:827291335123533834>   **Moderação**\n<a:emojibot2:827291439074508810>  **Utilidades**\n<a:emojibot3:827291508578975764>  **Config**\n<a:emojibot4:827291561917415424>  **Entretenimento**\n<a:emojibot5:827291637750562857>  **Defesas**\n<a:emojibot6:827291685683855410>  **Economia**\n<a:emojibot7:827291710572855316>  **Sistema vips**')
                    .setImage('https://ibb.co/zn29ZDW')
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
                  cp.users.remove(message.author.id); {
                  const embedinit = new Discord.MessageEmbed()
                  .setAuthor(`${bot.user.username} • Help`,
                  bot.user.displayAvatarURL({format: "png"}))
                  .setColor('#15226D')
                  .setThumbnail(bot.user.displayAvatarURL({format: "png"}))
                  .addField(`<a:setapretabot:838063291275804714> Links`, `[Me adicione](https://discordapp.com/oauth2/authorize?client_id=702615479436443759&scope=bot&permissions=8)\n[Servidor de suporte](https://discordapp.com)\n[Seja suporte](https://discordapp.com)`)
                  .addField('<a:setapretabot:838063291275804714> Sistemas de config', `<:emojiseta2:827566704552968203> **d!setregistro**\n<:emojiseta2:827566704552968203> **d!antiraid**\n<:emojiseta2:827566704552968203> **d!setvip**`)
                  .addField('<a:setapretabot:838063291275804714> Conheça meus comandos', '<a:emojibot1:827291335123533834>   **Moderação**\n<a:emojibot2:827291439074508810>  **Utilidades**\n<a:emojibot3:827291508578975764>  **Config**\n<a:emojibot4:827291561917415424>  **Entretenimento**\n<a:emojibot5:827291637750562857>  **Defesas**\n<a:emojibot6:827291685683855410>  **Economia**\n<a:emojibot7:827291710572855316>  **Sistema vips**')
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
        cp.users.remove(message.author.id);{
                const embed1 = new Discord.MessageEmbed()
                .setAuthor(`${bot.user.username} • Moderação`,
                bot.user.displayAvatarURL({format: "png"}))
                .setThumbnail(bot.user.displayAvatarURL({format: "png"}))
                .setDescription('<a:setapretabot:838063291275804714> **d!ban** - banir um membro do servidor\n<a:setapretabot:838063291275804714> **d!unban** - desbanir um membro do servidor\n<a:setapretabot:838063291275804714> **d!kick** - kickar um membro do servidor\n<a:setapretabot:838063291275804714> **d!mute** - mutar um membro no chat\n<a:setapretabot:838063291275804714> **d!unmute** - desmutar um membro no chat\n<a:setapretabot:838063291275804714> **d!adv** - de uma advertência em um membro\n<a:setapretabot:838063291275804714> **d!radv** - retire as advertências de um membro\n<a:setapretabot:838063291275804714> **d!advs** - de uma advertência em um staff\n<a:setapretabot:838063291275804714> **d!radvs** - retire as advertências de um staff\n<a:setapretabot:838063291275804714> **d!lock** - bloqueie um chat do servidor\n<a:setapretabot:838063291275804714> **d!unlock** - desbloqueie um chat\n<a:setapretabot:838063291275804714> **d!slowmode** - sete um cooldown em um chat')
                .setColor('#15226D')
                .setImage('https://media.discordapp.net/attachments/775871873333723146/827582315122786364/20210402_125811.jpg?width=924&height=292')
                .setFooter(`${bot.user.username} • Aba 1`, bot.user.displayAvatarURL({format: "png"}))

                 msg.edit(embed1)
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
        cp.users.remove(message.author.id);{
                const embed2 = new Discord.MessageEmbed()
                .setAuthor(`${bot.user.username} • Utilidades`,
                    bot.user.displayAvatarURL({format: "png"}))
                    .setThumbnail(bot.user.displayAvatarURL({format: "png"}))
                    .setDescription('<a:setapretabot:838063291275804714> **d!avatar** - mostra o avatar de um membro\n<a:setapretabot:838063291275804714> **d!sugestão** - envie uma sugestão para o servidor\n<a:setapretabot:838063291275804714> **d!div** - veja quantas pessoas um membro convidou pro servidor\n<a:setapretabot:838063291275804714> **d!clear** - limpe mensagens do chat\n<a:setapretabot:838063291275804714> **d!userinfo** - mostra as informações de um membro\n<a:setapretabot:838063291275804714> **d!serverinfo** - mostra as informações do servidor\n<a:setapretabot:838063291275804714> **d!rank** - veja o seu level e rank\n<a:setapretabot:838063291275804714> **d!anúncio** - envie um anúncio no seu servidor\n<a:setapretabot:838063291275804714> **d!giveaway** - crie um sorteio personalizado')
                    .setColor('#15226D')
                    .setImage('https://media.discordapp.net/attachments/775871873333723146/827582277222924358/20210402_133255.jpg?width=924&height=292')
                    .setFooter(`${bot.user.username} • Aba 2`, bot.user.displayAvatarURL({format: "png"}))

                 msg.edit(embed2)
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
        cp.users.remove(message.author.id);{
                const embed3 = new Discord.MessageEmbed()
                .setAuthor(`${bot.user.username} • Config`,
                bot.user.displayAvatarURL({format: "png"}))
                .setThumbnail(bot.user.displayAvatarURL({format: "png"}))
                .addField('<a:setapretabot:838063291275804714> **Sistema de registro:**', '<a:setapretabot:838063291275804714> **d!registro** - configure o sistema de registros\n<a:setapretabot:838063291275804714> **d!regitrar** - registre um membro do servidor\n<a:setapretabot:838063291275804714> **d!registros** - veja todos os registros feitos por um registrador')
                .addField('<a:setapretabot:838063291275804714> Outros sistemas:', '<a:setapretabot:838063291275804714> **d!welcome** - configure o sistema de boas-vindas do servidor\n<a:setapretabot:838063291275804714> **d!contador** - configure o sistema e contador dos canais\n<a:setapretabot:838063291275804714> **d!logs** - configure o sistema de logs')
                .setColor('#15226D')
                .setImage('https://media.discordapp.net/attachments/775871873333723146/827582277491884062/20210402_133330.jpg?width=924&height=292https://media.discordapp.net/attachments/775871873333723146/827582277491884062/20210402_133330.jpg?width=924&height=292')
                .setFooter(`${bot.user.username} • Aba 3`, bot.user.displayAvatarURL({format: "png"}))

                 msg.edit(embed3)
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
        cp.users.remove(message.author.id);{
                const embed4 = new Discord.MessageEmbed()
                .setAuthor(`${bot.user.username} • Entretenimento`,
                bot.user.displayAvatarURL({format: "png"}))
                .setThumbnail(bot.user.displayAvatarURL({format: "png"}))
                .setDescription('<a:setapretabot:838063291275804714> **d!perfil** - veja seu perfil\n<a:setapretabot:838063291275804714> **d!marry** - case com um membro\n<a:setapretabot:838063291275804714> **d!divorce** - se divorcie de um membro\n<a:setapretabot:838063291275804714> **d!meme** - veja um meme aleatório\n<a:setapretabot:838063291275804714> **d!ship** - ship dois membros\n<a:setapretabot:838063291275804714> **d!sobremim** - escolha uma mensagem de descrição sobre você')
                .setColor('#15226D')
                .setImage('https://media.discordapp.net/attachments/775871873333723146/827582275766976512/20210402_133536.jpg?width=924&height=292')
                .setFooter(`${bot.user.username} • Aba 4`, bot.user.displayAvatarURL({format: "png"}))

                 msg.edit(embed4)
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
        let filtro5 = (reaction, usuario) => reaction.emoji.name === "emojibot5" && usuario.id === message.author.id
        let coletor5 = msg.createReactionCollector(filtro5)
 
      coletor5.on("collect", cp => {
        cp.users.remove(message.author.id);{
                const embed5 = new Discord.MessageEmbed()
                .setAuthor(`${bot.user.username} • Defesas`,
                bot.user.displayAvatarURL({format: "png"}))
                .setThumbnail(bot.user.displayAvatarURL({format: "png"}))
                .addField('<:emojiseta2:827566704552968203> Sistemas de defesa:', '<a:setapretabot:838063291275804714> **d!defesa**\n<a:setapretabot:838063291275804714> **d!antiraid**')
                .addField('<:emojiseta2:827566704552968203> como usar:', 'Os comandos de defesas são configurados pelos comandos acima, e so membros com permissão adm podem usalos.\n\nQualquer duvida entre no [servidor de suporte](https://discordapp.com) e peça ajuda a um dos suportes.')
                .setColor('#15226D')
                .setImage('https://media.discordapp.net/attachments/775871873333723146/827582276182605874/20210402_133410.jpg?width=924&height=292')
                .setFooter(`${bot.user.username} • Aba 5`, bot.user.displayAvatarURL({format: "png"}))

                 msg.edit(embed5)
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
        cp.users.remove(message.author.id);{
                const embed6 = new Discord.MessageEmbed()
                    .setAuthor(`${bot.user.username} • Economia`,
                    bot.user.displayAvatarURL({format: "png"}))
                    .setThumbnail(bot.user.displayAvatarURL({format: "png"}))
                    .setDescription('<a:setapretabot:838063291275804714> **d!daily** - receba uma quantia diária\n<a:setapretabot:838063291275804714> **d!trabalhar** - trabalhe para ganhar dinheiro e xp\n<a:setapretabot:838063291275804714> **d!saldo**- veja seu saldo total\n<a:setapretabot:838063291275804714> **d!depositar** - deposite dinheiro na sua conta bancária\n<a:setapretabot:838063291275804714> **d!sacar** - saque o seu dinheiro do banco\n<a:setapretabot:838063291275804714> **d!transferir** - transfira uma quantia para um membro\n<a:setapretabot:838063291275804714> **d!rankmoney** - veja o rank de membros mais ricos\n<a:setapretabot:838063291275804714> **d!roubar** - roube dinheiro de um membro\n<a:setapretabot:838063291275804714> **d!inv** - veja os itens do seu inventário\n<a:setapretabot:838063291275804714> **d!loja** - abra a loja de itens\n<a:setapretabot:838063291275804714> **d!comprar** - compre itens e bônus')
                    .setColor('#15226D')
                    .setImage('https://media.discordapp.net/attachments/775871873333723146/827582276866801684/20210402_133349.jpg?width=924&height=292')
                    .setFooter(`${bot.user.username} • Aba 6`, bot.user.displayAvatarURL({format: "png"}))

                 msg.edit(embed6)
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
        cp.users.remove(message.author.id);{
              const embed7 = new Discord.MessageEmbed()
              .setAuthor(`${bot.user.username} • Sistema vips`,
              bot.user.displayAvatarURL({format: "png"}))
              .setThumbnail(bot.user.displayAvatarURL({format: "png"}))
              .setDescription('<:emojiseta2:827566704552968203> **Moderadores:**\n<a:setapretabot:838063291275804714> **d!setvip** - de perm vip para um membro\n<a:setapretabot:838063291275804714> **d!removervip** - remova a perm de vip de um membro\n<a:setapretabot:838063291275804714> **d!vips** - veja todos os vips do servidor')
              .addField('<:emojiseta2:827566704552968203> Membros:', '<a:setapretabot:838063291275804714> **d!addvip** - adicione o seu vip em um membro\n<a:setapretabot:838063291275804714> **d!rvip** - remova o seu vip de um membro\n<a:setapretabot:838063291275804714> **d!vip** configure o seu vip')
              .addField('<:emojiseta2:827566704552968203> Familias:', '<a:setapretabot:838063291275804714> **d!setfamily** - de perm vip para uma familia\n<a:setapretabot:838063291275804714> **d!rfamily** - remova o vip de uma familia\n<a:setapretabot:838063291275804714> **d!addfamily** - adicone a tag vip de uma familia\n<a:setapretabot:838063291275804714> **d!rfamily** - remova a tag vip de uma familia\n<a:setapretabot:838063291275804714> **d!vipfamily** - configure ao vip de uma familia')
              .setColor('#15226D')
              .setImage('https://media.discordapp.net/attachments/775871873333723146/827582276611211284/20210402_133432.jpg?width=924&height=292')
              .setFooter(`${bot.user.username} • Aba 7`, bot.user.displayAvatarURL({format: "png"}))

               msg.edit(embed7)
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
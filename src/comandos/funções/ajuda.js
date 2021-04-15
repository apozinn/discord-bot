const { ReactionCollector } = require('discord.js-collector')
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "ajuda",
        aliases: ['help2'],
        description: "help 2.0",
        usage: "ajuda"
    },
    run: async(bot, message, args) => {
            const botMessage = await message.reply('**precisa de ajuda? aqui estao meus comandpos!**');
            ReactionCollector.paginator({
                botMessage,
                user: message.author,
                pages: [
                    new MessageEmbed()
                    .setAuthor(`${bot.user.username} • Moderação`,
                    bot.user.displayAvatarURL({format: "png"}))
                    .setThumbnail(bot.user.displayAvatarURL({format: "png"}))
                    .setDescription('**d!ban** - banir um membro do servidor\n**d!unban** - o desbanir um membro\nd!kick - kickar um membro do servidor\n**d!mute** - mutar um membro\n**d!unmute** - desmute um membro\n**d!adv** - de uma advertência em um membro\n**d!radv** - retire as advertências de um membro\n**d!advs** - de uma advertência em um staff\n**d!radvs** - retire as advertências de um staff\n**d!lock** - feche um chat do servidor\n**d!unlock** - desbloqueie um chat\n**d!slowmode** - sete um cooldown em um chat')
                    .addField('`em caso de problemas ou bugs, reporte por aqui:`', '[servidor de suporte](https://discordapp.com/oauth2/authorize?client_id=701907714636251146&scope=bot&permissions=8)')
                    .setColor('#15226D')
                    .setImage('https://cdn.discordapp.com/attachments/775871873333723146/820460010198007808/images_2-1.jpg')
                    .setFooter(`• Requisitado por: ${message.author.username}`, message.author.avatarURL({format: "png"})),
                    new MessageEmbed()
                    .setAuthor(`${bot.user.username} • Utilidades`,
                    bot.user.displayAvatarURL({format: "png"}))
                    .setThumbnail(bot.user.displayAvatarURL({format: "png"}))
                    .setDescription('**d!avatar** - mostra o avatar de um membro\n**d!sugestão** - enfie uma sugestão para o servidor\n**d!div** - veja quantas pessoas um membro convidou pro servidor')
                    .addField('comandos de sorteio:', '**d!giveaway**') 
                    .addField('`em caso de problemas ou bugs:`', '[Clique aqui](https://discordapp.com/oauth2/authorize?client_id=701907714636251146&scope=bot&permissions=8)')
                    .setColor('#15226D')
                    .setImage('https://cdn.discordapp.com/attachments/775871873333723146/820460010198007808/images_2-1.jpg')
                    .setFooter(`• Requisitado por: ${message.author.username}`, message.author.avatarURL({format: "png"})),
                    new MessageEmbed()
                    .setAuthor(`${bot.user.username} • Funções`,
                    bot.user.displayAvatarURL({format: "png"}))
                    .setThumbnail(bot.user.displayAvatarURL({format: "png"}))
                    .setDescription('**d!clear** - limpe mensagens do chat\n**d!userinfo** - mostra as informações de um membro\n**d!serverinfo** - mostra as informações do servidor\n**d!level** - veja o seu level\n**d!anúncio** - envie um anúncio no seu servidor\n**d!ranklevel** - veja o rank de xp no servidor')
                    .addField('`em caso de problemas ou bugs:`', '[Clique aqui](https://discordapp.com/oauth2/authorize?client_id=701907714636251146&scope=bot&permissions=8)')
                    .setColor('#15226D')
                    .setImage('https://cdn.discordapp.com/attachments/775871873333723146/820460010198007808/images_2-1.jpg')
                    .setFooter(`• Requisitado por: ${message.author.username}`, message.author.avatarURL({format: "png"})),
                    new MessageEmbed()
                    .setAuthor(`${bot.user.username} • Entretenimento`,
                    bot.user.displayAvatarURL({format: "png"}))
                    .setThumbnail(bot.user.displayAvatarURL({format: "png"}))
                    .setDescription('**d!perfil** - veja seu perfil\n**d!say** - faça o bot dizer qualquer palavra\n**d!marry** - case com um membro\n**d!divorce** - se divorcie de um de alguém\n**d!meme** - veja um meme aleatório\n**g!ship** - ship dois membros\n**d!perfil** - veja seu perfil no bot\n**d!sobremim** - escolha uma menssagem para apaarecer no seu perfil')
                    .addField('`em caso de problemas ou bugs:`', '[Clique aqui](https://discordapp.com/oauth2/authorize?client_id=701907714636251146&scope=bot&permissions=8)')
                    .setColor('#15226D')
                    .setImage('https://cdn.discordapp.com/attachments/775871873333723146/820460010198007808/images_2-1.jpg')
                    .setFooter(`• Requisitado por: ${message.author.username}`, message.author.avatarURL({format: "png"})),
                    new MessageEmbed()
                    .setAuthor(`${bot.user.username} • Economia`,
                    bot.user.displayAvatarURL({format: "png"}))
                    .setThumbnail(bot.user.displayAvatarURL({format: "png"}))
                    .setDescription('**d!daily** - receba seu dinheiro diário\n**d!trabalhar** - trabalhe para ganhar dinheiro e xp\n**d!saldo**- veja seu saldo de dinheiro\n**d!depositar** - deposite dinheiro na sua conta bancária\n**d!sacar** - saque o seu dinheiro do banco\n**d!transferir** - transfira uma quantia para um membro\n**d!rankmoney** - veja o rank de membros mais ricos\n**d!roubar** - roube dinheiro de um membro\n**d!inv** - veja os itens do seu inventário\n**d!loja** - veja a loja de itens e bônus\n**d!comprar** - compre itens e bônus')
                    .addField('`em caso de problemas ou bugs:`', '[Clique aqui](https://discordapp.com/oauth2/authorize?client_id=701907714636251146&scope=bot&permissions=8)')
                    .setColor('#15226D')
                    .setImage('https://cdn.discordapp.com/attachments/775871873333723146/820460010198007808/images_2-1.jpg')
                    .setFooter(`• Requisitado por: ${message.author.username}`, message.author.avatarURL({format: "png"}))

                ],
                collectorOptions: {
                    time: 120000
                }
            })
        }
    }                                                                                                   
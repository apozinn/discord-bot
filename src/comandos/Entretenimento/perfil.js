const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    config: {
        name: "perfil",
        aliases: ['perfil'],
        description: "Mostra seu perfil",
        usage: "perfil"
    },
    run: async (bot, message, args) => {
        let user = message.author;
        let money = await db.fetch(`money_${message.guild.id}_${user.id}`)
        let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
        let bio = db.get(`bio_${user.id}`)
        let xp = await db.fetch(`xp_${message.guild.id}_${user.id}`)
        let casal = db.get(`casalperfil_${user.id}`)
        if(money === null) money = "0"
        if(bank === null) bank = "0"
        if(xp === null) xp = "0"
        if(casal === null) casal = "você está solteiro(a)"
        if(bio === null) bio = "olá, sou novo por aqui ☺"

        const Embed = new Discord.MessageEmbed()
        .setTitle(`🔖 | perfil de ${message.author.username}`)
        .setColor('#15226D')
        .setThumbnail(message.author.displayAvatarURL({ format: "png"}))
        .addField('💵 | carteira:', `R$ ${money}`)
        .addField('💵 | banco:', `R$ ${bank}`)
        .addField('🎖 | level:', `${xp}`)
        .addField('💼 | profissão:', `faxineiro`)
        .addField('💍 | casado(a) com:', `${casal}`)
        .addField('🔫 | arma:', `nenhuma`)
        .addField('💨 | sobre mim:', `**${bio}**`)
        .setImage('https://cdn.discordapp.com/attachments/775871873333723146/820819736853217310/13f34d6982ab9ddd1738bd724dee6048.gif')
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ format: "png" }))
        .setTimestamp()

        message.channel.send(Embed);
    }
}

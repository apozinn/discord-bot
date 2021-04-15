const Discord = require("discord.js");
const moment = require('moment')

module.exports = {
    config: {
        name: "userinfo",
        aliases: ['userinfo'],
        description: "mostrar as informações de um membro",
        usage: 'userinfo'
    },
    run: async (bot, message, args) => {
  
    let user;

    if (!args[0]) {
      user = message.member;
    } else {
    user = message.mentions.members.first() || await message.guild.members.fetch(args[0]).catch(err => { 
      
      const embed1 = new Discord.MessageEmbed()
     .setColor('#15226D')
    .setDescription('**⭕ | não foi possível encontrar o membro, tente novamente**')
      return message.channel.send(embed1) })
    }
   
   let stat = {
      online: "https://emoji.gg/assets/emoji/9166_online.png",
      idle: "https://emoji.gg/assets/emoji/3929_idle.png",
      dnd: "https://emoji.gg/assets/emoji/2531_dnd.png",
      offline: "https://emoji.gg/assets/emoji/7445_status_offline.png"
    }
    
      const embed2 = new Discord.MessageEmbed()
          .setTitle(`⚡ usuário vip`)
          .setColor('#15226D')
          .setThumbnail(user.user.displayAvatarURL({format: "png"}))
          .addField('👤 username:', `\`${user.user.tag}\``)
          .addField('📮 id do Discord:', `\`${user.user.id}\``)
          .addField('📛 conta criada em:', moment(user.user.createdAt).format("YYYY/MM/DD"))
          .addField('📫 entrou em:', moment(user.joinedAt).format("YYYY/MM/DD "))
          .addField('© status:', user.user.presence.status, stat[user.user.presence.status])
          .setFooter(`${user.user.tag}`, user.user.displayAvatarURL({format: "png"}))
          .setTimestamp()
      message.channel.send(embed2)
    } 
} 
const Discord = require('discord.js');
const db = require('quick.db');
const moment = require("moment");
moment.locale('pt-BR');

module.exports = {
  config: {
    name: "marry",
    aliases: ['casar'],
    description: "se casar com um membro",
    usage: "marry"
  },
  run: async (bot, message, args) => {
    let user = message.author;
    var membro = message.mentions.users.first();
    let marry = db.get(`marry_${user.id}`)
    let tempo = new Date();
    let casal = db.get(`casalperfil_${user.id}`)
    let data = moment(tempo).format("DD/MM/YYYY")
    if (marry === null) marry = "😥 | você está solteiro(a)"
    if (!membro) {
      const embed1 = new Discord.MessageEmbed()
        .setTitle('💍 | seu status de relacionamento')
        .setColor('#15226D')
        .setDescription(`${marry}`)
      return message.channel.send(embed1).then(msg => {
      msg.delete({ timeout: 15000 })})
    }
    
    if(casal != null){
      const embed0 = new Discord.MessageEmbed()
        .setColor('#15226D')
        .setDescription(`**💦 | você já está casado com \`${casal}\`**`)
    return message.channel.send(embed0)
    } 
    if (user.id === membro.id) return message.reply(`**você não pode se casar com você mesmo.**`).then(msg => {
      msg.delete({ timeout: 10000 })})
    if(db.has('marry')) return message.channel.send('vc já é casado porra')
    const embed2 = new Discord.MessageEmbed()
      .setTitle('💍 | pedido de casamento')
      .setColor('#15226D')
      .setDescription(`${user.username} pediu ${membro.username} em casamento!\n\npara \`aceitar\` reaja com ❤ e para \`recusar\` use 💔`)

    message.channel.send(embed2).then(msg => {
      msg.react("❤")
      msg.react("💔")
      msg.delete({ timeout: 20000 })

      let filtro1 = (reaction, usuario) => reaction.emoji.name === "💔" && usuario.id === membro.id;
      let coletor1 = msg.createReactionCollector(filtro1, { max: 1 })

      coletor1.on("collect", cp => {
        cp.remove(membro.id); {
          let embed3 = new Discord.MessageEmbed()
            .setTitle('😭 | pedido recusado')
            .setColor('#15226D')
            .setDescription(`\`${membro.username}\` recusou o pedido de \`${user.username}\`, as vezes não era pra ser...`)
          message.channel.send(embed3).then(msg => {
      msg.delete({ timeout: 10000 })})
        }
      })

      let filtro = (reaction, usuario) => reaction.emoji.name === "❤" && usuario.id === membro.id;
      let coletor = msg.createReactionCollector(filtro, { max: 1 })

      coletor.on("collect", cp => {
        cp.remove(membro.id); {
          let embed4 = new Discord.MessageEmbed()
            .setTitle('💍 | novo casal!')
            .setColor('#15226D')
            .setDescription(`💕 | \`${user.username}\` e \`${membro.username}\` se casaram, parabéns ao novo casal!`)
          message.channel.send(embed4).then(msg => {
      msg.delete({ timeout: 20000 })});
          db.set(`marry_${user.id}`, `você está casado(a) com ${membro.tag} desde \`${data}\``)
          db.set(`marry_${membro.id}`, `você está casado(a) com ${user.tag} desde \`${data}\``)
          db.set(`casal_${user.id}`, membro)
          db.set(`casal_${membro.id}`, user)
          db.set(`casalperfil_${user.id}`, membro.tag)
          db.set(`casalperfil_${membro.id}`, user.tag) 
        }
      })
    })
  }
}
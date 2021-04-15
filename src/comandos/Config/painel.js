const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  config: {
    name: "painel",
    aliases: ['painéis'],
    description: "mostra os painéis do servidor",
    usage: "painel"
  },
  run: (bot, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('**você não tem permissão para isso**');

    let logs = db.get(`statuslogs_${message.guild.id}`)
    if (logs === null) logs = "desativado"
    let welcome = db.get(`statuswelcome_${message.guild.id}`)
    if (welcome === null) welcome = "desativado"
    let registro = db.get(`statusregistro_${message.guild.id}`)
    if (registro === null) registro = "desativado"
    let contador = db.get(`statuscontador_${message.guild.id}`)
    if (contador === null) contador = "desativado"
    let antiraid = db.get(`statusantiraid_${message.guild.id}`)
    if (antiraid === null) antiraid = "desativado"
    let antibots = db.get(`antibots_${message.guild.id}`)
    if (antibots === null) antibots = "desativado"
    let fake = db.get(`statusfake_${message.guild.id}`)
    if (fake === null) fake = "desativado"

    if (args[0] === 'config') {
      const embed = new Discord.MessageEmbed()
        .setTitle(`painel de config: ${message.guild.name}`)
        .setColor('#15226D')
        .setThumbnail(message.guild.iconURL({ format: "png" }))
        .setDescription(`**💻 | status de config do servidor:**`)
        .addField(`📌 | sistema de welcome:`, `\`${welcome}\``)
        .addField(`📌 | sistema de logs:`, `\`${logs}\``)
        .addField(`📌 | sistema de registros:`, `\`${registro}\``)
        .addField(`📌 | sistema de antiraid:`, `\`${antiraid}\``)
        .addField(`📌 | sistema de antibots:`, `\`${antibots}\``)
        .addField(`📌 | sistema de contador:`, `\`${contador}\``)
        .addField(`📌 | sistema de antifakes:`, `\`${fake}\``)
        .setFooter(`${message.guild.name}`, message.guild.iconURL({ format: "png" }))
        .setTimestamp()
      message.channel.send(embed)
    }

    let tagregistrador = db.get(`tagregistrador_${message.guild.id}`)
    if(tagregistrador === null) tagregistrador = "nenhuma"
    let tagnovato = db.get(`tagnovato_${message.guild.id}`)
    if(tagnovato === null) tagnovato = "nenhuma" 
    let tagregistrado = db.get(`tagregistrado_${message.guild.id}`)
    if(tagregistrado === null) tagregistrado = "nenhuma"
    let tagmasculino = db.get(`tagmasculino_${message.guild.id}`)
    if(tagmasculino === null) tagmasculino = "nenhuma"
    let tagfeminino = db.get(`tagfeminino_${message.guild.id}`)
    if(tagfeminino === null) tagfeminino = "nenhuma"
    let tagnaobinario = db.get(`tagnaobinario_${message.guild.id}`)
    if(tagnaobinario === null) tagnaobinario = "nenhuma"

    if(args[0] === 'registro') {
      const embed2 = new Discord.MessageEmbed()
        .setTitle(`painel de registro: ${message.guild.name}`)
        .setColor('#15226D')
        .setThumbnail(message.guild.iconURL({format: "png"}))
        .setDescription('**📃 | configurações do sistema de registro:**')
        .addField('tag de registrador:', `${tagregistrador}`)
        .addField('tag de novatos:', `${tagnovato}`)
        .addField('tag de registrado:', `${tagregistrado}`)
        .addField('tags de registro:', `feminino: ${tagfeminino}\nmasculino: ${tagmasculino}\nnão-binário: ${tagnaobinario}`)
        .setFooter(`${message.guild.name}`, message.guild.iconURL({format: "png"}))
        .setTimestamp()

      message.channel.send(embed2)
    }
  }
}
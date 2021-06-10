const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  config: {
    name: "configlogs",
    aliases: ['logs'],
    description: "setar o canal de logs",
    usage: "d!configlogs"
  },
  run: (bot, message, args) => {

      let servid = message.guild.id;
      let statuslog = db.get(`statuslog_${servid}`)
      let canalog = db.get(`canalogs_${servid}`)
      let canalogs = message.guild.channels.cache.get(`${canalog}`)

      if (statuslog === null) statuslog = "desativado"
      if (canalogs === null) statuslog = "Nenhum"
    
    const embed1 = new Discord.MessageEmbed()
    .setAuthor(`${bot.user.username} • Logs`, bot.user.avatarURL({format: "png"}))
    .setTitle(`Atualmente o sistema de logs esta (${statuslog})`)
    .setColor('#15226D')
    .setThumbnail(message.guild.iconURL({ dynamic: true })) 
    .setDescription(`Configuração atual:\n() logs de moderação[ban, kick, mute, etc.]\n() logs de mensagens[deletada/editada, reação]\n() logs de canais[excluido, editado]\n () logs de call[entrou/saiu, mutou/desmutou, etc.]\n logs do servidor[tag deletada/editada, nova tag, adição/remoção de cargos]\n\n**Canal de logs atual: ${canalogs}**`)
    .addField('Edite as configurações:', `1 - Ative ou desative os logs de moderação\n2 - Ative ou desative os logs de mensagens\n3 - Ative ou desative os logs de canais\n4 - Ative ou desative os logs de call\n5 - ative ou desative os logs de servidor\n\n**Para ativar esse modulo reaja com ✅**`)
    .setFooter(`${message.guild.name} `, message.guild.iconURL({format: "png"}))
    .setTimestamp()
    
message.channel.send(embed1).then(msg => {
  msg.react("✅")

  let filtro1 = (reaction, usuario) => reaction.emoji.name === "✅" && usuario.id === message.author.id;
  let coletor1 = msg.createReactionCollector(filtro1)  

  coletor1.on("collect", cp => {
            cp.users.remove(message.author.id); {

              message.channel.send('mencione o canal que voce deseja setar para os logs')
              let counter = 0;
              const filter = msg => msg.mentions.channels.first() && !msg.author.bot;
              const collector = message.channel.createMessageCollector(filter);
              
              collector.on('collect', msg => {
                counter++
                if (counter === 1) {
                  message.channel.send(`voce setou o canal ${msg.content}`)
                  collector.stop()
                  const channel = msg.mentions.channels.first()
                  db.set(`canalogs_${servid}`, `${channel.id}`)
                }
              })
            }
          })
    }) 
  }
}
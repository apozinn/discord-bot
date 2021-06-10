const colors = require('colors');
const moment = require('moment');
moment.locale('pt-BR');

module.exports = {
  name: 'ready',
  execute(bot){
      console.log(`
       __________________________________________________________________
      |                 Daisuke iniciado com sucesso!                    |
      |                                                                  |
      |Tag: ${bot.user.tag}                                             |
      |Id: ${bot.user.id}                                            |
      |Dono: aposentado                                                  |
      |Ligado as: ${moment(bot.readyAt).format('LTS')}                                               |
      |__________________________________________________________________|
      |                             Infos                                |
      |                                                                  |
      |Servidores: ${bot.guilds.cache.size}                                                     |
      |Usuarios: ${bot.users.cache.size}                                                     |
      |Canais: ${bot.channels.cache.size}                                                       |
      |__________________________________________________________________|
      |                             Bot                                  |
      |                                                                  |
      |Criado em: ${moment(bot.user.createat).format('LL')}                                     |
      |Shards: ${bot.shard}                                                      |
      |Token: ${bot.token}|
      |Ping: ${bot.ws.ping}                                                          |
      |__________________________________________________________________|
      `.brightWhite)
    
      const status = [
        "online",
      ]
     
      const atividades = [
        [`use d!help para conhecer meus comandos`, "STREAMING"],
        [`encontrou bugs? reporte!`, "STREAMING"]
      ]
    
      setInterval(async () => {
        let i = Math.floor(Math.random() * atividades.length + 1) - 1
        await bot.user.setActivity(atividades[i][0], {
          type: atividades[i][1],
          url: 'https://www.twitch.tv/apozin'
        });
      }, 5000)
    
      setInterval(async () => {
        let b = Math.floor(Math.random() * status.length + 1) - 1
        await bot.user.setStatus(status[b])
      }, 3000)
  }
}
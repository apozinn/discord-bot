module.exports = async (bot, ready) => {
<<<<<<< HEAD
  console.log(`Daisuke iniciado com sucesso!\nservidores: ${bot.guilds.cache.size}\nmembros: ${bot.users.cache.size}`);
=======
  console.log(`COMANDOS E EVENTOS LIGADOS!`);
  console.log(`Bot foi iniciado com sucesso!`);
>>>>>>> origin/master

  const status = [
    "online",
  ]

  const atividades = [
<<<<<<< HEAD
    [`use d!help para conhecer meus comandos`, "STREAMING"],
    [`encontrou bugs? reporte!`, "STREAMING"]
=======
    [`discord.gg/gloomyclub`, "PLAYING"],
    [`G!help`, "PLAYING"]
>>>>>>> origin/master
  ]

  setInterval(async () => {
    let i = Math.floor(Math.random() * atividades.length + 1) - 1
    await bot.user.setActivity(atividades[i][0], {
      type: atividades[i][1]
    });
  }, 5000)

  setInterval(async () => {
    let b = Math.floor(Math.random() * status.length + 1) - 1
    await bot.user.setStatus(status[b])
  }, 3000)

}

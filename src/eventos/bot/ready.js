module.exports = async (bot, ready) => {
  console.log(`COMANDOS E EVENTOS LIGADOS!`);
  console.log(`Bot foi iniciado com sucesso!`);

  const status = [
    "online",
  ]

  const atividades = [
    [`discord.gg/gloomyclub`, "PLAYING"],
    [`G!help`, "PLAYING"]
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

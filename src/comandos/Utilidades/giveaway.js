const { MessageEmbed } = require("discord.js");
const ms = require("ms");

module.exports = {
    config: {
        name: "giveaway",
        aliases: ['sortear'],
        description: "comando de sortear",
        usage: "giveaway"
    },
    run: async (bot, message, args) => {
      
    let hosted = message.author;
    let channel = message.mentions.channels.first();
      if(!channel) return message.channel.send(`**é necessário mencionar um chat - {chat} {duração} {ganhadores} {título}**`);
    let duration = args[1];
      if(!duration) return message.channel.send(`**é necessário mencionar um tempo - {chat} {duração} {ganhadores} {título}**`);
    let ganhadores = args[2]
    let prize = args.slice(3).join(" ");
    if (!prize) return message.channel.send(`**é necessário mencionar um prêmio - {chat} {duração} {ganhadores} {título}**`);
    message.channel.send(`**Giveaway criado em ${channel}**`);
    let Embed = new MessageEmbed()
      .setTitle(`🎉 | sorteio de ${prize}`)
         .setColor('#15226D')
         .setDescription(`**duração:** ${duration} \n**ganhadores:** ${ganhadores}\n**hosted:** ${hosted}\n\nreaja com 🎉 para partipar`) 
         .setFooter(`${message.guild.name}`, message.guild.iconURL({ format: "png" }))
      .setTimestamp(Date.now() + ms(args[1]))
    let m = await channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        message.channel.send(`Reactions: ${m.reactions.cache.get("🎉").count}`);
        return message.channel.send(
          `**Não há reações suficientes**`
        );
      }
      let winner = m.reactions.cache
        .get("🎉")
        .users.cache.filter((u) => !u.bot)
        .random();
      
      const ganhador = new MessageEmbed()
       .setTitle(`🎉 | ganhador do sorteio de ${prize}`)
        .setColor('#15226D')
        .setDescription(`\n**🎁 | ganhador:** ${winner}\n**👑 | hosted:** ${hosted}`)
        .setFooter(`${message.guild.name}`, message.guild.iconURL({ format: "png" }))
        .setTimestamp()
        
      channel.send(ganhador);
    }, ms(args[1]));
  },
};

const Discord = require('discord.js');
const db = require('quick.db')

module.exports = {
	name: 'guildBanAdd',
	execute: async(bot, member) => {
		const canalogs = db.get(`canalogs_${member.guild.id}`);
		const canal = member.guild.channels.cache.get(`${canalogs}`);
		
		const embed = new Discord.MessageEmbed()
		   .setDescription(`**<@${member.user.id}> foi banido do servidor ${member.guild.name}`)
		   .setColor('#ff210e')
	  canal.send(embed).catch((err) => console.log(err.stack))
   }
}
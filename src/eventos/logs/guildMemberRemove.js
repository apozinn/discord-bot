const Discord = require('discord.js');
const db = require('quick.db')
const moment = require('moment');
moment.locale('pt-BR');

module.exports = {
	name: 'guildMemberRemove',
	execute: async(member, bot) => {
	const canalogs = db.get(`canalogs_${member.guild.id}`);
	const canal = member.guild.channels.cache.get(`${canalogs}`);

	const embed = new Discord.MessageEmbed()
		.setDescription(`Tchau ${member.user.tag}! Sentiremos sua falta aqui no servidor **${member.guild.name}**`)
		.addField(`Usuário:`, `${member.user.username}`)
		.addField(`ID:`, `${member.user.id}`)
		.addField(`Hora:`, Date.now());

	canal.send(embed);
	}
}
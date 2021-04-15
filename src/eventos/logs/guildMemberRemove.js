const Discord = require('discord.js');
const moment = require('moment');
moment.locale('pt-BR');

module.exports = async (bot, member) => {
	const canal = member.guild.channels.cache.get('794536711513309195');

	const embed = new Discord.MessageEmbed()
		.setTitle('TCHAUZINHO USER!')
		.setDescription(`Tchau ${member.user.tag}! Sentiremos sua falta aqui no servidor **${member.guild.name}**`)
		.addField(`Usuário:`, `${member.user.username}`)
		.addField(`ID:`, `${member.user.id}`)
		.addField(`Hora:`, Date.now());

	canal.send(embed);
};
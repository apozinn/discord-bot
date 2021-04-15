const Discord = require('discord.js');
const db = require('quick.db')
const moment = require('moment');
moment.locale('pt-BR');

module.exports = async (bot, member) => {
const canallogs = db.get(`canallos_${member.guild.id}`);
	const canal = member.guild.channels.cache.get(`${canallogs}`);

	const embed = new Discord.MessageEmbed()
		.setTitle('TCHAUZINHO USER!')
		.setDescription(`**nova mensagem apagada**`)
		.addField(`Usuário:`, `a`)
		.addField(`ID:`, `a`)
		.addField(`Hora:`, Date.now())

	canal.send(embed)
}
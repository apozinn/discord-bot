const { Client, Collection } = require('discord.js');
const bot = new Client();
const config = require('./config.json') 

const express = require('express');

const app = express();

app.get('/', (request, response) => {
	const ping = new Date();
	ping.setHours(ping.getHours() - 3);
	console.log(
		`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`
	);
	response.sendStatus(200);
});
app.listen(process.env.PORT);

["commands", "aliases"].forEach(x => bot[x] = new Collection());
["comandos", "eventos"].forEach(x => require(`./src/handlers/${x}`)(bot));

bot.login(config.token);

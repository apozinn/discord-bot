const {
    readdirSync
} = require('fs');

module.exports = (bot) => {

    const load = dirs => {

        const events = readdirSync(`./src/eventos/${dirs}/`).filter(d => d.endsWith('.js'));

        for (let file of events) {
            const event = require(`../eventos/${dirs}/${file}`);
            if (event.once) {
                bot.once(event.name, (...args) => event.execute(...args, bot));
            } else {
                bot.on(event.name, (...args) => event.execute(...args, bot));
            }
        };
    };
    readdirSync(`./src/eventos/`).forEach(x => load(x));
};

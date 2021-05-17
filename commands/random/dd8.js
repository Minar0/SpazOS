const commando = require('discord.js-commando');

class D8 extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'd8',
            group: 'random',
            memberName: 'd8',
            description: 'Rolls a 1d8'
        });
    }

    async run(message, args) {
        var roll = Math.floor(Math.random() * 8) + 1;
        message.reply("You rolled a " + roll);
    }
}

module.exports = D8;
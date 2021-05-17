const commando = require('discord.js-commando');

class D4 extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'd4',
            group: 'random',
            memberName: 'd4',
            description: 'Rolls a 1d4'
        });
    }

    async run(message, args) {
        var roll = Math.floor(Math.random() * 4) + 1;
        message.reply("You rolled a " + roll);
    }
}

module.exports = D4;
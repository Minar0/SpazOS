const commando = require('discord.js-commando');

class D6 extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'd6',
            group: 'random',
            memberName: 'd6',
            description: 'Rolls a 1d6'
        });
    }

    async run(message, args) {
        var roll = Math.floor(Math.random() * 6) + 1;
        message.reply("You rolled a " + roll);
    }
}

module.exports = D6;
const commando = require('discord.js-commando');

class D100 extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'd100',
            group: 'random',
            memberName: 'd100',
            description: 'Rolls a 1d100'
        });
    }

    async run(message, args) {
        var roll = Math.floor(Math.random() * 100) + 1;
        message.reply("You rolled a " + roll);
    }
}

module.exports = D100;
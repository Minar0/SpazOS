const commando = require('discord.js-commando');

class D10 extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'd10',
            group: 'random',
            memberName: 'd10',
            description: 'Rolls a 1d10'
        });
    }

    async run(message, args) {
        var roll = Math.floor(Math.random() * 10) + 1;
        message.reply("You rolled a " + roll);
    }
}

module.exports = D10;
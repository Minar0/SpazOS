const commando = require('discord.js-commando');

class D12 extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'd12',
            group: 'random',
            memberName: 'd12',
            description: 'Rolls a 1d12'
        });
    }

    async run(message, args) {
        var roll = Math.floor(Math.random() * 12) + 1;
        message.reply("You rolled a " + roll);
    }
}

module.exports = D12;
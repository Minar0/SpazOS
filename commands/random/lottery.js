const commando = require('discord.js-commando');

class lottery extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'lottery',
            group: 'random',
            memberName: 'lottery',
            description: 'Picks 6 random numbers for a lottery'
        });
    }

    async run(message, args) {
        var numb = Math.floor(Math.random() * 9).toString();
        for (var x = 0; x < 5; x++) {
            numb = numb + " " + Math.floor(Math.random() * 9).toString();
        }
        message.reply("Your Lucky Lotto numbers are: " + numb);
    }
}

module.exports = lottery;

//This command generates 6 random numbers and displays them.
const commando = require('discord.js-commando');

class example extends commando.Command {
    constructor(client) {
        super(client, {
            name: '',
            group: '',
            memberName: '',
            description: ''
        });
    }

    async run(message, args) {

    }
}

module.exports = example;

//I use this as a template for commands. You can ignore this if you want. Or use it. I really don't care
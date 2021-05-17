const commando = require('discord.js-commando');

class D2 extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'd2',
			group: 'random',
			memberName: 'd2',
			description: 'Rolls a 1d2'
		});
	}

	async run(message, args) {
        var roll = Math.floor(Math.random() * 2) + 1;
		message.reply("You rolled a " + roll);
	}
}

module.exports = D2;
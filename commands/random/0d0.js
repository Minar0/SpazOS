const commando = require('discord.js-commando');

class D0 extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'd0',
			group: 'random',
			memberName: 'd0',
			description: 'Rolls a 1d0'
		});
	}

	async run(message, args) {
		message.reply("what?");
	}
}

module.exports = D0;
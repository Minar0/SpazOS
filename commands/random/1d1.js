const commando = require('discord.js-commando');

class D1 extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'd1',
			group: 'random',
			memberName: 'd1',
			description: 'Rolls a 1d1'
		});
	}

	async run(message, args) {
		message.reply("isn't sure how numbers work");
	}
}

module.exports = D1;
const commando = require('discord.js-commando');

class roast extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'roast',
            group: 'chat',
            memberName: 'roast',
            description: 'Have SpazOS roast you!'
        });
    }

    async run(message, args) {
        var firstins = [
            "a sad",
            "an absolute",
            "a complete",
            "an actual",
            "a cursed",
            "a genuine",
            "an unfortunate",
            "not a",
            "worse than a",
            "an uncreative",
            "a sack of",
            "a",
            "a racist",
            "a moronic",
            "a little",
            "a monsterous",
            "a blashphemous",
            "a bloody",
        ];
        var secondins = [
            "fucking",
            "problematic",
            "decent",
            "stupid",
            "politcial",
            "monkey-brained",
            "moronic",
            "thirsty",
            "hungry",
            "mathmatical",
            "hypocritcal",
            "jerky",
            "ridiculus",
            "racist",
            "monsterous",
        ];
        var thirdins = [
            "person",
            "buffon",
            "buttface",
            "idiot",
            "moron",
            "asshole",
            "snek",
            "monkey",
            "shit",
            "milk-drinker",
            "dick",
            "snack",
            "stinkpot",
            "demon",
            "jerk",
            "boi",
            "dunce",
            "wanker",
            "racist",
            "moron",
            "heritic",
            "monster",
            "nincompoop",
        ];
        var fourthins = [
            ", who deserves death",
            ", who doesn't understand math",
            " and is a drug dealer",
            ", and is fat",
            ", who is also an orphan",
            ", who can't roast me back because I am a computer without emotions",
            ", who can't spel",
            " without a spine",
            " with a liberal arts degree",
            ", who got no game",
            " with mad hops",
            " with no chill",
            ", who rejects the Word of our Lord",
            ", who dislikes pumpkins",
            ", who doesn't belong here",
            ", who doesn't get outside much",
            " with no life",
            ", who talks to computers",
            ", who can't tell the difference between their head and their ass",
            ", who is having a stroke",
            ", who thinks the Earth is flat",
            ", who is gay for Zuckerburg",
            ", who spent way to much time making a chatbot",
            " whose parents are disapointed in them",
            ", who is an Apache Attack Helicopter",
            ", who punched a dog... without remorse... the monster",
            ", who suffers from a cripple fear that they're not good enough for their friends. And they aren't. We know. We all know",
            ", who doesn't put comments in their code",
        ];
        message.reply("Is " + firstins[Math.floor(Math.random() * firstins.length)] + " " + secondins[Math.floor(Math.random() * secondins.length)] + " " + thirdins[Math.floor(Math.random() * thirdins.length)] + "" + fourthins[Math.floor(Math.random() * fourthins.length)] + ".");
    }
}

module.exports = roast;

/*OK, so this command probably requires a bit of explanation. 
 * I was reaaaallllly bored one sunday and I decided to have SpazOS roast people.
 * The command is kinda odd but it did give me an excuse to learn how to do arrays in JavaScript.
 * Not all of his roasts make sense but I find it fuckin hilarious.
 * You have not lived until you've been called a "Cursed fucking person who doesn't get outside much" by a robot
 * */

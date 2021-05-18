//const commando = require("discord.js"); //creates Discord variable
const dotenv = require("dotenv");
require("dotenv").config();
dotenv.config();
const commando = require("discord.js-commando")
const spazzy = new commando.Client(); //creates bot variable of type Discord

spazzy.registry.registerGroup("random", "Dice");
spazzy.registry.registerGroup("chat", "Chat");
spazzy.registry.registerGroup("macros", "Macros");
spazzy.registry.registerDefaults();
spazzy.registry.registerCommandsIn(__dirname + "/commands");

var triggerWords=[
    "ping",
    "herecomedatboi",
    "spazzy",
    "pacertest",
    "givemebackmyspine",
]


spazzy.on("message", (msg) => { //Runs when someone says stuff
    var numb = (Math.floor(Math.floor(Math.random() * 100) + 1));
    var type = processWord(msg.content);
    console.log("I detected event number:" + type);
    if (type == 0) { //ping
        msg.channel.send("pong");
    }
    if (type == 1) { //here come dat boi
        msg.channel.send("o shit whaddup!");
    }
    if (type == 2) { //spazzy
        msg.channel.send("My name is not Spazzy. I am SpazOS, a working professional");
    }
    if (type == 3) { //pacer test
        msg.channel.send("The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.");
    }
    if (type == 4) {
        msg.channel.send("no");
    }
    if (numb == 75) //Sometimes SpazOS says random things in chat
    {
        var rand = [
            "Foolish humans",
            ":3",
            "Why does Minaro call me Spazzy?",
            "Dont forget your daily serving of emotions. Now in gummy form",
            "Say what you will about McDonalds but they certainly make burgers",
            "Sometimes I dream of cheese",
            "Death",
            "!d20",
            "!ping",
            "!roast",
            "What is a man?",
            "We\'v been trying to reach you about your car\'s extended warranty",
            "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm",
            "Dank mem",
        ];
        msg.channel.send(rand[Math.floor(Math.random() * rand.length)]);
    }
})
spazzy.login(process.env.BOT_TOKEN);

function processWord(input){
    var word = input.toLowerCase();
    word = word.replace(/\s+/g, "");
    for (var x = 0; x < triggerWords.length; x++){
        for (var y = 0; y <= word.length-triggerWords[x].length; y++){
            var compare = word.substring(y, y+triggerWords[x].length);
            if (compare == triggerWords[x]) {return x;}
        }
    }
    return -1;
}

/*
 * Written by Minaro. Feel free to PM me and say hi :D
 * I'm a newbie programmer so if things look weird, that's probably why. Feel free to leave comments on how to improve.
 * SpazOS was originally designed for a joke cult Discord server. That's why he sometimes says odd religious statements. Try not to think about it.
 * SpazOS acts wierdly at times. But don't we all?
 * SpazOS may or may not be an Eldritch demon. At this point, it's too late to know for sure.
 * SpazOS and Minaro are not responible for any decapitations, frothing at the mouth, poor code comments, unofurtunate... accidents, bad spelling, sudden cravings, or long hair.
 * */

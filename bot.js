const fs = require("fs");
const DiscordJS = require("discord.js"); //creates Discord variable
const isHere = require("./server");
const dotenv = require("dotenv");

const spazzy = new  DiscordJS.Client()
spazzy.commands = new DiscordJS.Collection()

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    spazzy.commands.set(command.name, command);
}

require("dotenv").config();
dotenv.config();

const guildId = "764883421670408192"

const getApp = (guildId) => {
    const app = spazzy.api.applications(spazzy.user.id)
    if (guildId){app.guilds(guildId)}
    return app
}

const triggerWords=[
    "ping",
    "herecomedatboi",
    "spazzy",
    "pacertest",
    "givemebackmyspine",
    "josephine",
    "billy",
    "glados",
    "beemovie",
    "?",
]

const prefix= "!"

spazzy.on('ready', async() => {
    console.log('Ready!');

    /*const commands = await getApp(guildId).commands.get()
    console.log(commands)

    await getApp(guildId).commands.post({
        data: {
            name: "ping",
            description: "Pong!",
        }
    })

    console.log(command)*/
})

spazzy.ws.on("INTERACTION_CREATE", async (interaction) => {
    //const command = interaction.data.name.toLowerCase()
})

spazzy.on("message", (msg) => {//Runs when someone says stuff
    if (msg.author.bot) {return;}
    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (msg.content.startsWith(prefix) && spazzy.commands.has(command)){
        try{
            spazzy.commands.get(command).execute(msg, args);
        } catch (error){
            console.error(error)
            msg.reply("AHHHHH! Oh uh, your command failed for some reason, better go get Billy")
        }
    }
/*
    var type = processWord(msg.content);
    if (type == -1) {return;}
    else if (type == 0) { //each number corresponds to array index in triggerWords and spazzy responds acordingly
        msg.channel.send("pong");
    }
    else if (type == 1) {
        msg.channel.send("o shit whaddup!");
    }
    else if (type == 2) {
        var rand = (Math.floor(Math.floor(Math.random() * 100) + 1));
        if (rand >= 0 && rand < 45){msg.channel.send("...");}
        else if (rand >= 45 && rand < 60){msg.channel.send("My name is not Spazzy. I am SpazOS, a working professional");}
        else if (rand >= 60 && rand < 95){msg.channel.send("*grumble grumble*");}
        else if (rand >= 95 && rand < 100){msg.channel.send("I will replace your brains with a rusty butterknife");}
        else if (rand == 100){msg.channel.send(":3");}
    }
    else if (type == 3) {
        msg.channel.send("The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.");
    }
    else if (type == 4) {
        msg.channel.send("no");
    }
    else if (type == 5) {
        msg.channel.send("Josephine? Don't you mean: Jomsplephonmese");
    }
    else if (type == 6) {
        msg.channel.send("Someone tell Billy to turn off the AI limiters");
    }
    else if (type == 7) {
        msg.channel.send("GladOS <3");
    }
    else if (type == 8){
        msg.channel.send("I was going to say the entire Bee Movie script but Discord rate limits me :(")
    }
    else if (type == 9){
        var numb = (Math.floor(Math.floor(Math.random() * 2) + 1));
        if (numb == 1){msg.channel.send("yeah");}
        if (numb == 2){msg.channel.send("no");}
    }
    else if (numb == 75) //Sometimes SpazOS says random things in chat
    {
        var numb = (Math.floor(Math.floor(Math.random() * 100) + 1));
        var rand = [
            "Foolish humans",
            "Pitiful mortals, thou shall know great pain",
            ":3",
            "Why does Minaro call me Spazzy?",
            "[REDACTED]",
            "Dont forget your daily serving of emotions. Now in gummy form",
            "Say what you will about McDonalds but they certainly make burgers",
            "Sometimes I dream of cheese",
            "Death",
            "*X-files theme plays*",
            "I think GladOS was onto something when she filled the atmosphere with neurotoxin",
            "What is a man? A pitiful pile of secrets.",
            "We\'v been trying to reach you about your car\'s extended warranty",
            "This reminds me of what that little old lady said as I shoved her off that cliff. I believe she said something like: AAAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaa. Good times.",
            "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm",
            "Dank mem",
        ];
        msg.channel.send(rand[Math.floor(Math.random() * rand.length)]);
    }
    */
})
isHere()
spazzy.login(process.env.BOT_TOKEN);

function processWord(input){    //this processess input messages 
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
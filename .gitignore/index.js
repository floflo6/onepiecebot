const Discord = require('discord.js');

var bot = new Discord.Client();

var prefix = ";";

bot.on("ready", function() {
    bot.user.setGame("OnePieceBot | ;help");
    console.log("Le bot à bien été conecté");
});

bot.login("NTEzNzU3ODAzMzc1MjMwOTc4.DtRvZQ.P5hLoXTAgAKLH1Ju7jyQVxEGpHE");

bot.on('message', message => {

    if(message.content === "Bonjour"){
        message.reply("Salut");
        console.log('le bot dit bonjour');
    }
});

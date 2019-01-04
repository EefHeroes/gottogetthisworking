const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            
            //!cointflip
            case 'coinflip':
            var coinflip = Math.random();
            
            if(coinflip <= 0.5){
                bot.sendMessage({
                    to: channelID,
                    message: 'Heads'
                });
            }
            else{bot.sendMessage({
                    to: channelID,
                    message: 'Tails'
                });
            }
            //!coin 
            case 'coin':
            var coinflip = Math.random();
            
            if(coinflip <= 0.5){
                bot.sendMessage({
                    to: channelID,
                    message: 'Heads'
                });
            }
            else{bot.sendMessage({
                    to: channelID,
                    message: 'Tails'
                });
            }
            
         }
     }

});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
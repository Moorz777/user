const Discord = require("discord.js");
const moorz = new Discord.Client();
const prefix = "m!";

moorz.on("message", async function(message) {
    if(message.author.id !== moorz.user.id) return;
    var text = message.content.split(" ").slice(1).join(" ");
        if(message.content.startsWith(prefix + "str")) {
            if(!text) return;
            moorz.user.setGame(text, "https://twitch.tv/9ivv");
            message.delete();
                message.channel.send(`**:white_check_mark:: ${text}`).then(m => m.delete(3000));
                 
        } 
        if(message.content.startsWith(prefix + "wt")) {
            if(!text) return;
            moorz.user.setActivity(text, { type: "WATCHING" });
            message.delete();
                message.channel.send(`**:white_check_mark:: ${text}`).then(m => m.delete(3000));
                    
        } 
        if(message.content.startsWith(prefix + "lis")) {
            if(!text) return;
            moorz.user.setActivity(text, { type: "LISTENING" });
            message.delete();
                message.channel.send(`**:white_check_mark:: ${text}`).then(m => m.delete(3000));
                
        } 
        if(message.content.startsWith(prefix + "ply")) {
            if(!text) return;
            moorz.user.setGame(text);
            message.delete();
                message.channel.send(`**:white_check_mark:: ${text}`).then(m => m.delete(3000));
             
        } 
        if(message.content.startsWith(prefix + "stop")) {
            message.delete();
                message.channel.send(`**:white_check_mark: .`).then(m => m.delete(3000))
                .then(moorz.destroy());

        } 
});

moorz.login(process.env.MOORZ_TOKEN);
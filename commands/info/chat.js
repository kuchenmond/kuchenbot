const Discord = require("discord.js")
const { prefix } = require("../../config.json")

module.exports = message => {
    if (message.content === (`${prefix}` + "cmds" + " " + "chat")) {
        message.delete();
        const embed = new Discord.MessageEmbed()
            .setTitle("Chat")
            .setColor("745030")
            .addField("Say", "```css\n.say\n```", true)
            .addField("Embed", "```css\n.embed\n```", true)
            .setFooter("️️️ℹ️" + "  " + "Type [.h commandname] to see the help for that specified command. e.g. [.h channelid]")                   
        message.channel.send(embed);
    }
}
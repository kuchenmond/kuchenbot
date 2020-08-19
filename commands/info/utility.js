const Discord = require("discord.js")
const { prefix } = require("../../config.json")

module.exports = message => {
    if (message.content === (`${prefix}` + "cmds" + " " + "utility")) {
        message.delete();
        const embed = new Discord.MessageEmbed()
            .setTitle("Utility")
            .setColor("745030")
            .addField("Channelid", "```css\n.channelid\n```", true)
            .setFooter("️️️ℹ️" + "  " + "Type [.h commandname] to see the help for that specified command. e.g. [.h channelid]")                   
        message.channel.send(embed);
    }
}
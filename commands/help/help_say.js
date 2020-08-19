const Discord = require("discord.js")
const { prefix } = require("../../config.json")

module.exports = message => {
    if (message.content === (`${prefix}` + "h" + " " + "say")) {
        message.delete();
        const embed = new Discord.MessageEmbed()
            .setColor("745030")
            .setDescription("**Say**\nRepeats the message content.\n‏‏‎ ‎\n**Required permissions**\nN/A\n‏‏‎ ‎\n**Usage**\n`.say [message]`")
            .setFooter("module: chat")
        message.channel.send(embed);
    }
}
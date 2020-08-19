const Discord = require("discord.js")
const { prefix } = require("../../config.json")

module.exports = message => {
    if (message.content === (`${prefix}` + "h" + " " + "embed")) {
        message.delete();
        const embed = new Discord.MessageEmbed()
            .setColor("745030")
            .setDescription("**Embed**\nPlaces the message content into an embed.\n‏‏‎ ‎\n**Required Permissions**\nN/A\n‏‏‎ ‎\n**Usage**\n`.embed [message]`")
            .setFooter("module: chat")
        message.channel.send(embed);
    }
}
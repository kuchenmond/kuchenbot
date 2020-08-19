const Discord = require("discord.js")
const { prefix } = require("../../config.json")

module.exports = message => {
    if (message.content === (`${prefix}` + "h" + " " + "channelid")) {
        message.delete();
        const embed = new Discord.MessageEmbed()
            .setColor("745030")
            .setDescription("**Channelid**\nDisplays the ID of the current channel.\n‏‏‎ ‎\n**Required Permissions**\nN/A\n‏‏‎ ‎\n**Usage**\n`.channelid`")
            .setFooter("module: utility")
        message.channel.send(embed);
    }
}
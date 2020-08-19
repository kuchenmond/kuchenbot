const Discord = require("discord.js")
const { prefix } = require("../../config.json")

module.exports = message => {
    if (message.content.startsWith(`${prefix}` + "embed")) {
        message.delete();
        const embed = new Discord.MessageEmbed()
            .setColor("745039")
            .setAuthor(message.author.username)
            .setDescription(((message.content.replace(`${prefix}` + "embed ", ''))))
        message.channel.send(embed);
	}
};
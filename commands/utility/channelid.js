const Discord = require("discord.js")
const { prefix } = require("../../config.json")

module.exports = message => {
    if (message.content.startsWith(`${prefix}` + "channelid")) {
        message.delete();
        const embed = new Discord.MessageEmbed()
            .setColor("745039")
            .setTitle(message.channel.name)
            .setDescription(message.channel.id)
        message.channel.send(embed);
    }
};

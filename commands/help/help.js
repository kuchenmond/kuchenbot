const Discord = require("discord.js")
const { prefix } = require("../../config.json")

module.exports = message => {
    if (message.content === (`${prefix}` + "help")) {
        message.delete();
        const embed = new Discord.MessageEmbed()
            .setColor("745030")           
            .setTitle("kuchenbot")
            .setURL("http://kuchenbot.org")
            .setDescription("This is a discord bot currently in development. \nUse `.modules` to list all modules.")                   
        message.channel.send(embed)
    }
}
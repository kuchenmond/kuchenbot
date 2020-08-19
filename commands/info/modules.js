const Discord = require("discord.js")
const { prefix } = require("../../config.json")

module.exports = message => {
    if (message.content === (`${prefix}` + "modules")) {
        message.delete();
        const embed = new Discord.MessageEmbed()
            .setColor("745030")           
            .setTitle("Modules")
            .setDescription("- Chat\n- Utility\n")
            .setFooter("ℹ️" + "  " + "Type [.cmds modulename] to get a list of commands in that module. e.g. [.cmds utility]")                   
        message.channel.send(embed);
    }
}
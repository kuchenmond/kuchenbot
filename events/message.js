const { prefix } = require("../config.json")

const help = require("../commands/help/help.js")
const help_channelid = require("../commands/help/help_channelid.js") 
const help_embed = require("../commands/help/help_embed.js")
const help_say = require("../commands/help/help_say.js")

const say = require("../commands/chat/say.js")
const embed = require("../commands/chat/embed.js")

const channelid = require("../commands/utility/channelid.js")

const modules = require("../commands/info/modules.js")
const utility = require("../commands/info/utility.js")
const chat = require("../commands/info/chat.js")

module.exports = (client, message) => {
    if (message.content === (`${prefix}` + "help")) {
        return help(message)
    }
    else if (message.content.startsWith(`${prefix}` + "say")) {
        return say(message)
    }
    else if (message.content.startsWith(`${prefix}` + "embed")) {
        return embed(message)
    }
    else if (message.content === (`${prefix}` + "channelid")) {
        return channelid(message)
    }
    else if (message.content === (`${prefix}` + "modules")) {
        return modules(message)
    }
    else if (message.content === (`${prefix}` + "cmds" + " " + "utility")) {
        return utility(message)
    }
    else if (message.content === (`${prefix}` + "cmds" + " " + "chat")) {
        return chat(message) 
    }
    else if (message.content === (`${prefix}` + "h" + " " + "channelid")) {
        return help_channelid(message)
    }
    else if (message.content === (`${prefix}` + "h" + " " + "embed")) {
        return help_embed(message)
    }
    else if (message.content === (`${prefix}` + "h" + " " + "say")) {
        return help_say(message)
    }
}
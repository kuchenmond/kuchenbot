const { prefix } = require("../../config.json")

module.exports = message => {
    if (message.content.startsWith(`${prefix}` + "say")) {
        message.delete();
        message.channel.send((message.content.replace(`${prefix}` + "say ", '')));
    }
};
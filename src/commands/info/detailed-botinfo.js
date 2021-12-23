const { Command } = require('@sapphire/framework');
const { MessageEmbed } = require('discord.js');
const { embedcolor, botname, botimage, prefixarray} = require('../../../config.json')
const { main, scripts, repository, keywords, author, license, bugs, dependencies} = require('../../../package.json');
class BotInfoCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'detailed-botinfo',
      aliases: 'dbotinfo',
      description: 'Bot info'
    });
  }

  async messageRun(message) {
    const value = `Prefixes: ${prefixarray} \n Embed Color: ${embedcolor} \n Bot Name: ${botname} \n Bot Image: ${botimage} \n Main: ${main} \n Keywords: ${keywords} \n  Author: ${author} \n License: ${license}`
    message.channel.send(value)
  }
}

module.exports = {
  BotInfoCommand
};
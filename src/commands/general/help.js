const { Command } = require('@sapphire/framework');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { embedcolor, botname, botimage, prefixarray} = require('./../../config.json')
class HelpCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'help',
      description: 'Help Me!'
    });
  }

  async messageRun(message) {
    const Embed = new MessageEmbed()
    .setColor(embedcolor)
    .setAuthor(botname, botimage)
    .setTitle('Help Command')
    .setDescription(`Select The Command Category: \n Prefixes: ${prefixarray[0]}, ${prefixarray[1]}, ${prefixarray[2]}`)
    .addFields(
        {
            name: 'General',
            value: `ping = A simple Ping Command`
        },
        {
            name: 'Moderation',
            value: `1`
        },
        {
            name: 'Fun',
            value: `1`
        }
    )
    message.channel.send({embeds: [Embed]})
}
}
module.exports = {
  HelpCommand
};
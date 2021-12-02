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
    .setDescription('Select The Command Category:')
    .addFields(
        {
            name: 'General',
            value: `${prefixarray[0]}ping or ${prefixarray[1]}ping or ${prefixarray[2]}ping = A simple Ping Command`
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
const { Command } = require('@sapphire/framework');
const { MessageEmbed } = require('discord.js');
const { embedcolor, botname, botimage} = require('./../../../config.json')
class PingCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'ping',
      aliases: ['pong'],
      description: 'ping pong'
    });
  }

  async messageRun(message) {
    const msg = await message.channel.send('Ping?');
    const embed  = new MessageEmbed()
    .setColor(embedcolor)
    .setAuthor(botname, botimage)
    .setTitle('Ping Command')
    .setDescription('Ping, Pong')
    .addFields(
        {name: 'Bot Latency', value: `${Math.round(this.container.client.ws.ping)}ms`, inline: true},
        {name: 'Api Latency', value: `${msg.createdTimestamp - message.createdTimestamp}ms`, inline: true}
    )
    return msg.edit({embeds: [embed]});
  }
}

module.exports = {
  PingCommand
};
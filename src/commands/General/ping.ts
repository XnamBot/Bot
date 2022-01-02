import { ApplyOptions } from '@sapphire/decorators';
import { Command, CommandOptions } from '@sapphire/framework';
import { send } from '@sapphire/plugin-editable-commands';
import type { Message } from 'discord.js';
import { EmbedTemplate } from '../../lib/embeds';
@ApplyOptions<CommandOptions>({
	description: 'ping pong'
})
export class UserCommand extends Command {
	public async messageRun(message: Message) {
		const msg = await send(message, 'Ping?');
		message.channel.send({embeds: [EmbedTemplate('Ping', `Bot Latency: ${Math.round(this.container.client.ws.ping)}ms \n API Latency: ${(msg.editedTimestamp || msg.createdTimestamp) - (message.editedTimestamp || message.createdTimestamp)}ms`, 'Ping. Pong!')]})
	}
}

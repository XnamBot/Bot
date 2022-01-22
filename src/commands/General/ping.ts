import { ApplyOptions } from '@sapphire/decorators';
import type { CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';
import { EmbedTemplate } from '../../lib/embeds';
import { XnamCommand } from '../../lib/structures/command';

@ApplyOptions<CommandOptions>({
	description: 'Commands.General.Ping'
})
export class PingGeneralCommand extends XnamCommand {
	public async messageRun(message: Message) {
		const msg = await message.channel.send('Ping?');
		message.channel.send({
			embeds: [
				EmbedTemplate(
					'Ping',
					`Bot Latency: ${Math.round(this.container.client.ws.ping)}ms \n API Latency: ${
						(msg.editedTimestamp || msg.createdTimestamp) - (message.editedTimestamp || message.createdTimestamp)
					}ms`,
					'Ping. Pong!'
				)
			]
		});
	}
}

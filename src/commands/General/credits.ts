import { ApplyOptions } from '@sapphire/decorators';
import type { CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';
import { EmbedTemplate } from '../../lib/embeds';
import { XnamCommand } from '../../lib/structures/command';

@ApplyOptions<CommandOptions>({
	description: 'Commands.General.Credits'
})
export class CreditsGeneralCommand extends XnamCommand {
	public async messageRun(message: Message) {
		message.channel.send({ embeds: [EmbedTemplate('Credits', `**Owner**: \nSean Outram \nhttps://sean-outram.dev`, 'All those credits')] });
	}
}

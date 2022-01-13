import { ApplyOptions } from '@sapphire/decorators';
import type { Message } from 'discord.js';
import { EmbedTemplate } from '../../lib/embeds';
import { Command, CommandOptions } from '@sapphire/framework';

@ApplyOptions<CommandOptions>({
	description: 'Commands.General.Credits'
})
export class UserCommand extends Command {
	public async MessageCommand(message: Message) {
		message.channel.send({embeds: [EmbedTemplate('Credits', `**Owner**: \nSean Outram \nhttps://sean-outram.dev`, 'All those credits')]})
	}
}

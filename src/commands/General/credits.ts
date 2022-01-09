import { ApplyOptions } from '@sapphire/decorators';
import { SubCommandPluginCommand, SubCommandPluginCommandOptions } from '@sapphire/plugin-subcommands';
import type { Message } from 'discord.js';
import { EmbedTemplate } from '../../lib/embeds';

@ApplyOptions<SubCommandPluginCommandOptions>({
	description: 'Commands.General.Credits'
})
export class UserCommand extends SubCommandPluginCommand {
	public async messageRun(message: Message) {
		message.channel.send({embeds: [EmbedTemplate('Credits', `**Owner**: \nSean Outram \nhttps://sean-outram.dev`, 'All those credits')]})
	}
}

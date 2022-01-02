import { ApplyOptions } from '@sapphire/decorators';
import { SubCommandPluginCommand, SubCommandPluginCommandOptions } from '@sapphire/plugin-subcommands';
import type { Message } from 'discord.js';
import { AnimalApi } from '../../lib/pets';

@ApplyOptions<SubCommandPluginCommandOptions>({
	description: 'Dog image'
})
export class UserCommand extends SubCommandPluginCommand {
	public async messageRun(message: Message) {
		message.channel.send(await AnimalApi(true, 'dog'));
	}
}

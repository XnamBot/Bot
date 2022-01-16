import { ApplyOptions } from '@sapphire/decorators';
import { SubCommandPluginCommand, SubCommandPluginCommandOptions } from '@sapphire/plugin-subcommands';
import type { Message } from 'discord.js';
import { AnimalApi } from '../../lib/pets';

@ApplyOptions<SubCommandPluginCommandOptions>({
	description: 'Commands.Animal.Bird'
})
export class UserCommand extends SubCommandPluginCommand {
	public async messageRun(message: Message) {
		return message.channel.send(await AnimalApi(true, 'bird'));
	}
}

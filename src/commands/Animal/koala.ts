import { ApplyOptions } from '@sapphire/decorators';
import { SubCommandPluginCommand, SubCommandPluginCommandOptions } from '@sapphire/plugin-subcommands';
import type { Message } from 'discord.js';
import { AnimalApi } from '../../lib/pets';

@ApplyOptions<SubCommandPluginCommandOptions>({
	description: 'Commands.Animal.Koala'
})
export class UserCommand extends SubCommandPluginCommand {
	public async MessageCommand(message: Message) {
		return message.channel.send(await AnimalApi(true, 'koala'));
	}
}

import { ApplyOptions } from '@sapphire/decorators';
import { SubCommandPluginCommand, SubCommandPluginCommandOptions } from '@sapphire/plugin-subcommands';
import type { Message } from 'discord.js';
import { AnimalApi } from '../../lib/pets';

@ApplyOptions<SubCommandPluginCommandOptions>({
	description: 'Commands.Animal.Panda'
})
export class UserCommand extends SubCommandPluginCommand {
	public async messageRun(message: Message) {
		return message.channel.send(await AnimalApi(true, 'Panda'));
	}
}

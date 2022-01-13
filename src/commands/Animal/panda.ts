import { ApplyOptions } from '@sapphire/decorators';
import type { Message } from 'discord.js';
import { AnimalApi } from '../../lib/pets';
import { Command, CommandOptions } from '@sapphire/framework';

@ApplyOptions<CommandOptions>({
	description: 'Commands.Animal.Panda'
})
export class UserCommand extends Command {
	public async MessageCommand(message: Message) {
		return message.channel.send(await AnimalApi(true, 'Panda'));
	}
}

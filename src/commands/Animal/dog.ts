import { ApplyOptions } from '@sapphire/decorators';
import type { Message } from 'discord.js';
import { AnimalApi } from '../../lib/pets';
import { Command, CommandOptions } from '@sapphire/framework';

@ApplyOptions<CommandOptions>({
	description: 'Commands.Animal.Dog'
})
export class UserCommand extends Command {
	public async MessageCommand(message: Message) {
		message.channel.send(await AnimalApi(true, 'dog'));
	}
}

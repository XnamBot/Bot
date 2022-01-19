import { ApplyOptions } from '@sapphire/decorators';
import { Command, CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';
import { AnimalApi } from '../../lib/pets';

@ApplyOptions<CommandOptions>({
	description: 'Commands.Animal.Dog'
})
export class DogAnimalCommand extends Command {
	public async messageRun(message: Message) {
		message.channel.send(await AnimalApi(true, 'dog'));
	}
}

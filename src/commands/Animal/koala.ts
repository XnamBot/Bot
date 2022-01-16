import { ApplyOptions } from '@sapphire/decorators';
import { Command, CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';
import { AnimalApi } from '../../lib/pets';

@ApplyOptions<CommandOptions>({
	description: 'Commands.Animal.Koala'
})
export class UserCommand extends Command {
	public async messageRun(message: Message) {
		return message.channel.send(await AnimalApi(true, 'koala'));
	}
}

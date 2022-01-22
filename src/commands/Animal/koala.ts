import { ApplyOptions } from '@sapphire/decorators';
import type { CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';
import { AnimalApi } from '../../lib/pets';
import { XnamCommand } from '../../lib/structures/command';

@ApplyOptions<CommandOptions>({
	description: 'Commands.Animal.Koala'
})
export class KoalaAnimalCommand extends XnamCommand {
	public async messageRun(message: Message) {
		return message.channel.send(await AnimalApi(true, 'koala'));
	}
}

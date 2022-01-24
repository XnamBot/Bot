import { ApplyOptions } from '@sapphire/decorators';
import type { CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';
import { AnimalApi } from 'xnam-api';
import { XnamCommand } from '../../lib/structures/command';

@ApplyOptions<CommandOptions>({
	description: 'Commands.Animal.Panda'
})
export class PandaAnimalCommand extends XnamCommand {
	public async messageRun(message: Message) {
		return message.channel.send(await AnimalApi(true, 'Panda'));
	}
}

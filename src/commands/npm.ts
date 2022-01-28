import { ApplyOptions } from '@sapphire/decorators';
import type { Args, CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';
import { XnamCommand } from '../lib/structures/command';

@ApplyOptions<CommandOptions>({
	description: 'A basic command'
})
export class UserCommand extends XnamCommand {
	public async messageRun(message: Message, args: Args) {
		try {
			const query = args.rest('string');
			
		} catch (e) {
			message.channel.send({content: `${e}`})
		}
	}
}

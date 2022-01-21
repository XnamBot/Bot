import { Precondition } from '@sapphire/framework';
import type { Message } from 'discord.js';

export class UserPrecondition extends Precondition {
	public async run(message: Message) {
		return message.guild?.ownerId == message.author.id
			? this.ok()
			: this.error({ message: 'This command can only be used by the server owner.' });
	}
}

declare module '@sapphire/framework' {
	interface Preconditions {
		ServerOwner: never;
	}
}

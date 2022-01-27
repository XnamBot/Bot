import { ApplyOptions } from '@sapphire/decorators';
import { Listener, ListenerOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';
import db from 'quick.db';
@ApplyOptions<ListenerOptions>({
	event: 'messageCreate'
})
export class UserEvent extends Listener {
	public run(message: Message) {
		const table = new db.table('stats');
		table.add('totalmessages', 1);
		void message;
	}
}

import { ApplyOptions } from '@sapphire/decorators';
import type { CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';
import { XnamCommand } from '../../lib/structures/command';
import db from 'quick.db';
import { FourFieldEmbedTemplate } from 'xnam-api/dist/embed';
import os from 'node:os';

@ApplyOptions<CommandOptions>({
	description: 'Commands.General.Stats'
})
export class StatsGeneralCommand extends XnamCommand {
	public async messageRun(message: Message) {
		const table = new db.table('stats');
		const totalmessages = table.get('totalmessages');
		message.channel.send({
			embeds: [
				FourFieldEmbedTemplate(
					this.container.config,
					'stats',
					'Statistics!',
					'STATS!',
					{ name: 'Total Messages', value: `${totalmessages}` },
					{ name: 'Memory', value: `${os.freemem() / 1000000} MB /${os.totalmem() / 1000000} MB` },
					{ name: 'Uptime', value: `${os.uptime}` },
					{ name: 'Cpu Architecture', value: `${os.arch}` }
				)
			]
		});
	}
}

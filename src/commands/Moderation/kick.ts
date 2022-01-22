import { ApplyOptions } from '@sapphire/decorators';
import type { Args } from '@sapphire/framework';
import type { CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';
import { EmbedTemplate } from '../../lib/embeds';
import { XnamCommand } from '../../lib/structures/command';

@ApplyOptions<CommandOptions>({
	description: 'Commands.Moderation.Kick',
	requiredUserPermissions: 'KICK_MEMBERS'
})
export class KickModerationCommand extends XnamCommand {
	public async messageRun(message: Message, args: Args) {
		const member = await args.pick('member');
		try {
			member.kick();
			message.channel.send({ embeds: [EmbedTemplate('Kick', `kicked ${member}`, `Id Of kicked user: ${member.id}`)] });
		} catch (error) {
			console.log(error);
			message.channel.send(`${error}`);
		}
	}
}

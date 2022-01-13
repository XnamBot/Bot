import { ApplyOptions } from '@sapphire/decorators';
import type { Args } from '@sapphire/framework';
import type { Message } from 'discord.js';
import { EmbedTemplate } from '../../lib/embeds';
import { Command, CommandOptions } from '@sapphire/framework';

@ApplyOptions<CommandOptions>({
	description: 'Commands.Moderation.Kick',
	requiredUserPermissions: 'KICK_MEMBERS'
})
export class UserCommand extends Command {
	public async MessageCommand(message: Message, args: Args) {
		const member = await args.pick('member');
		try {
			member.kick()
			message.channel.send({embeds: [EmbedTemplate('Kick', `kicked ${member}`, `Id Of kicked user: ${member.id}`)]})
		} catch (error) {
			console.log(error);
			message.channel.send(`${error}`)
		}
	}
}

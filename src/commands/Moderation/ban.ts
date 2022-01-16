import { ApplyOptions } from '@sapphire/decorators';
import type { Args } from '@sapphire/framework';
import { SubCommandPluginCommand, SubCommandPluginCommandOptions } from '@sapphire/plugin-subcommands';
import type { Message } from 'discord.js';
import { EmbedTemplate } from '../../lib/embeds';

@ApplyOptions<SubCommandPluginCommandOptions>({
	description: 'Commands.Moderation.Ban',
	requiredUserPermissions: 'BAN_MEMBERS',
})
export class UserCommand extends SubCommandPluginCommand {
	public async messageRun(message: Message, args: Args) {
		const member = await args.pick('member');
		try {
			member.ban()
			message.channel.send({embeds: [EmbedTemplate('Ban', `banned ${member}`, `Id Of banned user: ${member.id}`)]})
		} catch (error) {
			console.log(error);
			message.channel.send(`${error}`)
		}
	}
}

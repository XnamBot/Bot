import { ApplyOptions } from '@sapphire/decorators';
import type { Args } from '@sapphire/framework';
import type { CommandOptions, ApplicationCommandRegistry } from '@sapphire/framework';
import type { Message, CommandInteraction } from 'discord.js';
import { EmbedTemplate } from '../../lib/embeds';
import { XnamCommand } from '../../lib/structures/command';
import { slashiesguilid } from '../../lib/slashiesguildid';
import { slashiesidhint } from '../../lib/slashiesidhint';
import { interactionuserparser } from '../../lib/interactionuserparser';

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
	public async chatInputRun(interaction: CommandInteraction) {
		const member = interactionuserparser(interaction)
		try {
			member?.kick();
			interaction.reply({ embeds: [EmbedTemplate('Kick', `kicked ${member}`, `Id Of kicked user: ${member?.id}`)] });
		} catch (error) {
			console.log(error);
			interaction.reply(`${error}`);
		}
	}
	public override registerApplicationCommands(registry: ApplicationCommandRegistry) {
		registry.registerChatInputCommand(
			{
				name: this.name,
				description: 'Kicks the user',
				options: [
					{
						name: 'user',
						description: 'User to kick',
						type: 'USER',
						required: true
					}
				]
			},
			{
				guildIds: slashiesguilid(),
				idHints: slashiesidhint('kick')
			}
		);
	}
}

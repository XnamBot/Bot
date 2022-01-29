import { ApplyOptions } from '@sapphire/decorators';
import type { CommandOptions, ApplicationCommandRegistry } from '@sapphire/framework';
import type { CommandInteraction } from 'discord.js';
import { EmbedTemplate } from '../../lib/embeds';
import { XnamCommand } from '../../lib/structures/command';
import { slashiesguilid } from '../../lib/slashiesguildid';
import { slashiesidhint } from '../../lib/slashiesidhint';

@ApplyOptions<CommandOptions>({
	description: 'Commands.General.Credits'
})
export class CreditsGeneralCommand extends XnamCommand {
	public override async chatInputRun(interaction: CommandInteraction) {
		interaction.reply({ embeds: [EmbedTemplate('Credits', `**Owner**: \nSean Outram \nhttps://sean-outram.dev`, 'All those credits')] });
	}
	public override registerApplicationCommands(registry: ApplicationCommandRegistry) {
		registry.registerChatInputCommand(
			{
				name: this.name,
				description: 'Credits for the bot.'
			},
			{
				guildIds: slashiesguilid(),
				idHints: slashiesidhint(`credits`)
			}
		);
	}
}

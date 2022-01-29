import { ApplyOptions } from '@sapphire/decorators';
import type { CommandOptions, ApplicationCommandRegistry } from '@sapphire/framework';
import type { CommandInteraction } from 'discord.js';
import { AnimalApi } from 'xnam-api';
import { XnamCommand } from '../../lib/structures/command';
import { slashiesguilid } from '../../lib/slashiesguildid';
import { slashiesidhint } from '../../lib/slashiesidhint';

@ApplyOptions<CommandOptions>({
	description: 'Commands.Animal.Bird'
})
export class BirdAnimalCommand extends XnamCommand {
	public override async chatInputRun(interaction: CommandInteraction) {
		return interaction.reply(await AnimalApi(true, 'bird'));
	}
	public override registerApplicationCommands(registry: ApplicationCommandRegistry) {
		registry.registerChatInputCommand(
			{
				name: this.name,
				description: 'Bird!'
			},
			{
				guildIds: slashiesguilid(),
				idHints: slashiesidhint(`bird`)
			}
		);
	}
}

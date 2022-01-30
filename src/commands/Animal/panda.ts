import { ApplyOptions } from '@sapphire/decorators';
import type { CommandOptions, ApplicationCommandRegistry } from '@sapphire/framework';
import type { CommandInteraction } from 'discord.js';
import { AnimalApi } from 'xnam-api';
import { XnamCommand } from '../../lib/structures/command';
import { slashiesguilid } from '../../lib/slashiesguildid';
import { slashiesidhint } from '../../lib/slashiesidhint';

@ApplyOptions<CommandOptions>({
	description: 'Commands.Animal.Panda'
})
export class PandaAnimalCommand extends XnamCommand {
	public override async chatInputRun(interaction: CommandInteraction) {
		interaction.reply(await AnimalApi(true, 'Panda'));
	}
	public override registerApplicationCommands(registry: ApplicationCommandRegistry) {
		registry.registerChatInputCommand(
			{
				name: this.name,
				description: 'Panda!'
			},
			{
				guildIds: slashiesguilid(),
				idHints: slashiesidhint(`panda`)
			}
		);
	}
}

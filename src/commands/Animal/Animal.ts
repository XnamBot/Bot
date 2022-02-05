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
export class AnimalCommand extends XnamCommand {
	public override async chatInputRun(interaction: CommandInteraction) {
		await interaction.reply('Searching...')
		const animal = interaction.options.getString('animal');
		if (animal == 'bird') {interaction.editReply(await AnimalApi(true, 'bird'))}
		else if (animal == 'cat') {interaction.editReply(await AnimalApi(true, 'cat'))}
		else if (animal == 'dog') {interaction.editReply(await AnimalApi(true, 'dog'))}
		else if (animal == 'fox') {interaction.editReply(await AnimalApi(true, 'fox'))}
		else if (animal == 'koala') {interaction.editReply(await AnimalApi(true, 'koala'))}
		else if (animal == 'panda') {interaction.editReply(await AnimalApi(true, 'panda'))}
	}
	public override registerApplicationCommands(registry: ApplicationCommandRegistry) {
		registry.registerChatInputCommand(
			{
				name: this.name,
				description: 'Animal',
				options: [
					{
							name: 'animal',
							description: 'Animal',
							type: 'STRING',
							required: true
						}
				]
			},
			{
				guildIds: slashiesguilid(),
				idHints: slashiesidhint(`animal`)
			}
		);
	}
}


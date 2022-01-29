import { ApplyOptions } from '@sapphire/decorators';
import type { CommandOptions, ApplicationCommandRegistry } from '@sapphire/framework';
import type { CommandInteraction, Message } from 'discord.js';
import { AnimalApi } from 'xnam-api';
import { XnamCommand } from '../../lib/structures/command';
import { slashiesguilid } from '../../lib/slashiesguildid';
import { slashiesidhint } from '../../lib/slashiesidhint';

@ApplyOptions<CommandOptions>({
	description: 'Commands.Animal.Koala'
})
export class KoalaAnimalCommand extends XnamCommand {
	public async messageRun(message: Message) {
		return message.channel.send(await AnimalApi(true, 'koala'));
	}
	public override async chatInputRun(interaction: CommandInteraction) {
		interaction.reply(await AnimalApi(true, 'koala'));
	}
	public override registerApplicationCommands(registry: ApplicationCommandRegistry) {
		registry.registerChatInputCommand(
			{
				name: this.name,
				description: 'Koala!'
			},
			{
				guildIds: slashiesguilid(),
				idHints: slashiesidhint(`koala`)
			}
		);
	}
}

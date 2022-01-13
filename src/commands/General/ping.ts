import { ApplyOptions } from '@sapphire/decorators';
import { Command, CommandOptions, ApplicationCommandRegistry} from '@sapphire/framework';
import type { CommandInteraction, Message } from 'discord.js';
import { EmbedTemplate } from '../../lib/embeds';
import { settings } from '../../config/config';
@ApplyOptions<CommandOptions>({
	description: 'Commands.General.Ping'
})
export class UserCommand extends Command {
	public async MessageCommand(message: Message) {
		const msg = await message.channel.send('Ping?');
		message.channel.send({embeds: [EmbedTemplate('Ping', `Bot Latency: ${Math.round(this.container.client.ws.ping)}ms \n API Latency: ${(msg.editedTimestamp || msg.createdTimestamp) - (message.editedTimestamp || message.createdTimestamp)}ms`, 'Ping. Pong!')]})
	}
	public override async chatInputRun(interaction: CommandInteraction) {
		interaction.reply('Test Success')
	}
	public override registerApplicationCommands(registry: ApplicationCommandRegistry) {
		registry.registerChatInputCommand(
			{
				name: this.name,
				description: 'Ping Test',
			},
			{
				guildIds: [settings.devserverid],
				idHints: ['']
			}
		);
	}
}

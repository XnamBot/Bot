import { ApplyOptions } from '@sapphire/decorators';
import type { CommandOptions, ApplicationCommandRegistry } from '@sapphire/framework';
import { XnamCommand } from '../../lib/structures/command';
import { slashiesguilid } from '../../lib/slashiesguildid';
import { slashiesidhint } from '../../lib/slashiesidhint';
import { CommandInteraction, MessageActionRow, MessageButton } from 'discord.js';
import { minesweeper_is_bomb, minesweeper_presetsfunction } from '../../lib/minesweeper';

@ApplyOptions<CommandOptions>({
	description: 'Commands.Games.Games'
})
export class GamesCommand extends XnamCommand {
	public override async chatInputRun(interaction: CommandInteraction) {
		const games = interaction.options.getString('game');
		if (games =='minesweeper') {
			const minesweeper_flag = this.container.emoji.flag;
			const minesweeper_bomb = this.container.emoji.bomb;
			var  minesweeper_gridarray = [this.container.emoji.one, this.container.emoji.two, this.container.emoji.three, this.container.emoji.four, this.container.emoji.five, this.container.emoji.six, this.container.emoji.seven, this.container.emoji.eight, this.container.emoji.nine]
			var minesweeper_presetnum = Math.floor(Math.random() * 19)
			const minesweeper_gamegridmap = minesweeper_presetsfunction(minesweeper_presetnum, minesweeper_flag, minesweeper_bomb);
			const minesweeper_gamegrid = `${minesweeper_gridarray[0]}${minesweeper_gridarray[1]}${minesweeper_gridarray[2]}\n${minesweeper_gridarray[3]}${minesweeper_gridarray[4]}${minesweeper_gridarray[5]}\n${minesweeper_gridarray[6]}${minesweeper_gridarray[7]}${minesweeper_gridarray[8]}`
			const minesweeper_buttonrow_one = new MessageActionRow()
				.addComponents(
					new MessageButton()
						.setCustomId('games_minesweeper_one')
						.setLabel('1')
						.setStyle('PRIMARY'),
					new MessageButton()
						.setCustomId('games_minesweeper_two')
						.setLabel('2')
						.setStyle('SECONDARY'),
					new MessageButton()
						.setCustomId('games_minesweeper_three')
						.setLabel('3')
						.setStyle('PRIMARY')
				)
			const minesweeper_buttonrow_two = new MessageActionRow()
				.addComponents(
					new MessageButton()
						.setCustomId('games_minesweeper_four')
						.setLabel('4')
						.setStyle('PRIMARY'),
					new MessageButton()
						.setCustomId('games_minesweeper_five')
						.setLabel('5')
						.setStyle('SECONDARY'),
					new MessageButton()
						.setCustomId('games_minesweeper_six')
						.setLabel('6')
						.setStyle('PRIMARY')
				)
			const minesweeper_buttonrow_three = new MessageActionRow()
				.addComponents(
					new MessageButton()
						.setCustomId('games_minesweeper_seven')
						.setLabel('7')
						.setStyle('PRIMARY'),
					new MessageButton()
						.setCustomId('games_minesweeper_eight')
						.setLabel('8')
						.setStyle('SECONDARY'),
					new MessageButton()
						.setCustomId('games_minesweeper_nine')
						.setLabel('9')
						.setStyle('PRIMARY')
				)
			const minesweeper_interaction_reply = {content: minesweeper_gamegrid, components: [minesweeper_buttonrow_one, minesweeper_buttonrow_two, minesweeper_buttonrow_three]}
			interaction.reply(minesweeper_interaction_reply)
			// Collector
			const collector = interaction.channel?.createMessageComponentCollector({ time: 15000 });
			
			collector?.on('collect', async i => {
				if (i.customId === 'games_minesweeper_one') {
					minesweeper_gridarray[0] = minesweeper_gamegridmap[0]
					const minesweeper_gamegrid_new = `${minesweeper_gridarray[0]}${minesweeper_gridarray[1]}${minesweeper_gridarray[2]}\n${minesweeper_gridarray[3]}${minesweeper_gridarray[4]}${minesweeper_gridarray[5]}\n${minesweeper_gridarray[6]}${minesweeper_gridarray[7]}${minesweeper_gridarray[8]}`
					const minesweeper_interaction_reply_new = {content: minesweeper_gamegrid_new, components: [minesweeper_buttonrow_one, minesweeper_buttonrow_two, minesweeper_buttonrow_three]}
					i.reply({ content:`You got a ${minesweeper_gridarray[0]}`, ephemeral: true})
					interaction.editReply(minesweeper_interaction_reply_new)
					minesweeper_is_bomb(minesweeper_gridarray[0], interaction)
				} else if (i.customId === 'games_minesweeper_two') {
					minesweeper_gridarray[1] = minesweeper_gamegridmap[1]
					const minesweeper_gamegrid_new = `${minesweeper_gridarray[0]}${minesweeper_gridarray[1]}${minesweeper_gridarray[2]}\n${minesweeper_gridarray[3]}${minesweeper_gridarray[4]}${minesweeper_gridarray[5]}\n${minesweeper_gridarray[6]}${minesweeper_gridarray[7]}${minesweeper_gridarray[8]}`
					const minesweeper_interaction_reply_new = {content: minesweeper_gamegrid_new, components: [minesweeper_buttonrow_one, minesweeper_buttonrow_two, minesweeper_buttonrow_three]}
					i.reply({ content:`You got a ${minesweeper_gridarray[1]}`, ephemeral: true})
					interaction.editReply(minesweeper_interaction_reply_new)
					minesweeper_is_bomb(minesweeper_gridarray[1], interaction)
				} else if (i.customId === 'games_minesweeper_three') {
					minesweeper_gridarray[2] = minesweeper_gamegridmap[2]
					const minesweeper_gamegrid_new = `${minesweeper_gridarray[0]}${minesweeper_gridarray[1]}${minesweeper_gridarray[2]}\n${minesweeper_gridarray[3]}${minesweeper_gridarray[4]}${minesweeper_gridarray[5]}\n${minesweeper_gridarray[6]}${minesweeper_gridarray[7]}${minesweeper_gridarray[8]}`
					const minesweeper_interaction_reply_new = {content: minesweeper_gamegrid_new, components: [minesweeper_buttonrow_one, minesweeper_buttonrow_two, minesweeper_buttonrow_three]}
					i.reply({ content:`You got a ${minesweeper_gridarray[2]}`, ephemeral: true})
					interaction.editReply(minesweeper_interaction_reply_new)
					minesweeper_is_bomb(minesweeper_gridarray[2], interaction)
				} else if (i.customId === 'games_minesweeper_four') {
					minesweeper_gridarray[3] = minesweeper_gamegridmap[3]
					const minesweeper_gamegrid_new = `${minesweeper_gridarray[0]}${minesweeper_gridarray[1]}${minesweeper_gridarray[2]}\n${minesweeper_gridarray[3]}${minesweeper_gridarray[4]}${minesweeper_gridarray[5]}\n${minesweeper_gridarray[6]}${minesweeper_gridarray[7]}${minesweeper_gridarray[8]}`
					const minesweeper_interaction_reply_new = {content: minesweeper_gamegrid_new, components: [minesweeper_buttonrow_one, minesweeper_buttonrow_two, minesweeper_buttonrow_three]}
					i.reply({ content:`You got a ${minesweeper_gridarray[3]}`, ephemeral: true})
					interaction.editReply(minesweeper_interaction_reply_new)
					minesweeper_is_bomb(minesweeper_gridarray[3], interaction)
				} else if (i.customId === 'games_minesweeper_five') {
					minesweeper_gridarray[4] = minesweeper_gamegridmap[4]
					const minesweeper_gamegrid_new = `${minesweeper_gridarray[0]}${minesweeper_gridarray[1]}${minesweeper_gridarray[2]}\n${minesweeper_gridarray[3]}${minesweeper_gridarray[4]}${minesweeper_gridarray[5]}\n${minesweeper_gridarray[6]}${minesweeper_gridarray[7]}${minesweeper_gridarray[8]}`
					const minesweeper_interaction_reply_new = {content: minesweeper_gamegrid_new, components: [minesweeper_buttonrow_one, minesweeper_buttonrow_two, minesweeper_buttonrow_three]}
					i.reply({ content:`You got a ${minesweeper_gridarray[4]}`, ephemeral: true})
					interaction.editReply(minesweeper_interaction_reply_new)
					minesweeper_is_bomb(minesweeper_gridarray[4], interaction)
				} else if (i.customId === 'games_minesweeper_six') {
					minesweeper_gridarray[5] = minesweeper_gamegridmap[5]
					const minesweeper_gamegrid_new = `${minesweeper_gridarray[0]}${minesweeper_gridarray[1]}${minesweeper_gridarray[2]}\n${minesweeper_gridarray[3]}${minesweeper_gridarray[4]}${minesweeper_gridarray[5]}\n${minesweeper_gridarray[6]}${minesweeper_gridarray[7]}${minesweeper_gridarray[8]}`
					const minesweeper_interaction_reply_new = {content: minesweeper_gamegrid_new, components: [minesweeper_buttonrow_one, minesweeper_buttonrow_two, minesweeper_buttonrow_three]}
					i.reply({ content:`You got a ${minesweeper_gridarray[5]}`, ephemeral: true})
					interaction.editReply(minesweeper_interaction_reply_new)
					minesweeper_is_bomb(minesweeper_gridarray[5], interaction)
				} else if (i.customId === 'games_minesweeper_seven') {
					minesweeper_gridarray[6] = minesweeper_gamegridmap[6]
					const minesweeper_gamegrid_new = `${minesweeper_gridarray[0]}${minesweeper_gridarray[1]}${minesweeper_gridarray[2]}\n${minesweeper_gridarray[3]}${minesweeper_gridarray[4]}${minesweeper_gridarray[5]}\n${minesweeper_gridarray[6]}${minesweeper_gridarray[7]}${minesweeper_gridarray[8]}`
					const minesweeper_interaction_reply_new = {content: minesweeper_gamegrid_new, components: [minesweeper_buttonrow_one, minesweeper_buttonrow_two, minesweeper_buttonrow_three]}
					i.reply({ content:`You got a ${minesweeper_gridarray[6]}`, ephemeral: true})
					interaction.editReply(minesweeper_interaction_reply_new)
					minesweeper_is_bomb(minesweeper_gridarray[6], interaction)
				} else if (i.customId === 'games_minesweeper_eight') {
					minesweeper_gridarray[7] = minesweeper_gamegridmap[7]
					const minesweeper_gamegrid_new = `${minesweeper_gridarray[0]}${minesweeper_gridarray[1]}${minesweeper_gridarray[2]}\n${minesweeper_gridarray[3]}${minesweeper_gridarray[4]}${minesweeper_gridarray[5]}\n${minesweeper_gridarray[6]}${minesweeper_gridarray[7]}${minesweeper_gridarray[8]}`
					const minesweeper_interaction_reply_new = {content: minesweeper_gamegrid_new, components: [minesweeper_buttonrow_one, minesweeper_buttonrow_two, minesweeper_buttonrow_three]}
					i.reply({ content:`You got a ${minesweeper_gridarray[7]}`, ephemeral: true})
					interaction.editReply(minesweeper_interaction_reply_new)
					minesweeper_is_bomb(minesweeper_gridarray[7], interaction)
				} else if (i.customId === 'games_minesweeper_nine') {
					minesweeper_gridarray[8] = minesweeper_gamegridmap[8]
					const minesweeper_gamegrid_new = `${minesweeper_gridarray[0]}${minesweeper_gridarray[1]}${minesweeper_gridarray[2]}\n${minesweeper_gridarray[3]}${minesweeper_gridarray[4]}${minesweeper_gridarray[5]}\n${minesweeper_gridarray[6]}${minesweeper_gridarray[7]}${minesweeper_gridarray[8]}`
					const minesweeper_interaction_reply_new = {content: minesweeper_gamegrid_new, components: [minesweeper_buttonrow_one, minesweeper_buttonrow_two, minesweeper_buttonrow_three]}
					i.reply({ content:`You got a ${minesweeper_gridarray[8]}`, ephemeral: true})
					interaction.editReply(minesweeper_interaction_reply_new)
					minesweeper_is_bomb(minesweeper_gridarray[8], interaction)
				}
			});
			collector?.on('end', collected => {
				interaction.editReply({ content: `You have ran out of time! :(. \n You used ${collected} moves`, components: []})
			});
		} else {
			interaction.reply('[ERROR] Game Not Found')
		}
	}
	public override registerApplicationCommands(registry: ApplicationCommandRegistry) {
		registry.registerChatInputCommand(
			{
				name: this.name,
				description: 'Games',
				options: [
					{
							name: 'game',
							description: 'The game you want to play (minesweeper)',
							type: 'STRING',
							required: true,
						}
				]
			},
			{
				guildIds: slashiesguilid(),
				idHints: slashiesidhint(`games`)
			}
		);
	}
}

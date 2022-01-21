import { MessageEmbed } from 'discord.js';
import { settings } from '../config/config';
export function EmbedTemplate(command: string, description: string, footer: string) {
	const embed = new MessageEmbed()
		.setColor('#ff6600')
		.setTitle(`${settings.botname} | ${command}`)
		.setDescription(`${description}`)
		.setFooter(`${footer}`);
	return embed;
}

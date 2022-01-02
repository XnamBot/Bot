import { MessageEmbed } from "discord.js";
import { botname } from "../config.json";
export function EmbedTemplate(command: string, description: string, footer: string) {
    const embed = new MessageEmbed()
    .setColor('#ff6600')
    .setTitle(`${botname} | ${command}`)
    .setDescription(`${description}`)
    .setFooter(`${footer}`)
    return embed
}
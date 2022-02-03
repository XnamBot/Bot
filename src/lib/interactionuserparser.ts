import type { CommandInteraction } from "discord.js";

export function interactionuserparser(interaction: CommandInteraction) {
    const user = interaction.options.getUser('user');
    const member = interaction.guild?.members.cache.get(user!.id)
    return member
}
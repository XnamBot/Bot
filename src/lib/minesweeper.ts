import type { CommandInteraction } from "discord.js"

export function minesweeper_presetsfunction(preset: number, flag: any, bomb: any) {
    if (preset == 0) {
        return [bomb, flag, flag, flag, flag, flag, flag, flag, flag]
    }else if (preset == 1) {
        return [flag, bomb, flag, flag, flag, flag, flag, flag, flag]
    } else if (preset == 2) {
        return [flag, flag, bomb, flag, flag, flag, flag, flag, flag]
    } else if (preset == 3) {
        return [flag, flag, flag, bomb, flag, flag, flag, flag, flag]
    } else if (preset == 4) {
        return [flag, flag, flag, flag, bomb, flag, flag, flag, flag]
    } else if (preset == 5) {
        return [flag, flag, flag, flag, flag, bomb, flag, flag, flag]
    } else if (preset == 6) {
        return [flag, flag, flag, flag, flag, flag, bomb, flag, flag]
    } else if (preset == 7) {
        return [flag, flag, flag, flag, flag, flag, flag, bomb, flag]
    } else if (preset == 8) {
        return [flag, flag, flag, flag, flag, flag, flag, flag, bomb]
    } else if (preset == 9) {
        return [bomb, bomb, flag, flag, flag, flag, flag, flag, flag]
    } else if (preset == 10) {
        return [bomb, flag, bomb, flag, flag, flag, flag, flag, flag]
    } else if (preset == 11) {
        return [flag, bomb, flag, bomb, flag, flag, flag, flag, flag]
    } else if (preset == 12) {
        return [flag, bomb, flag, flag, bomb, flag, flag, flag, flag]
    } else if (preset == 13) {
        return [flag, flag, bomb, flag, bomb, flag, flag, flag, flag]
    } else if (preset == 14) {
        return [flag, flag, bomb, flag, flag, bomb, flag, flag, flag]
    } else if (preset == 15) {
        return [flag, flag, flag, bomb, flag, bomb, flag, flag, flag]
    } else if (preset == 16) {
        return [flag, flag, flag, bomb, flag, flag, bomb, flag, flag]
    } else if (preset == 17) {
        return [flag, flag, flag, flag, bomb, flag, bomb, flag, flag]
    } else if (preset == 18) {
        return [flag, flag, flag, flag, bomb, flag, flag, bomb, flag]
    } else {
        return [bomb, bomb, bomb, bomb, bomb, bomb, bomb, flag, bomb]
    }
}
 function minesweeper_is_bomb_check(value: any) {
    var replaced = value.replaceAll(':', '')
    if (replaced == 'bomb') {
        return true
    } else {
        return false
    }
}
export function minesweeper_is_bomb(value: any, interaction: CommandInteraction) {
    if (minesweeper_is_bomb_check(value) == true) {
        return interaction.editReply({ content: 'You Lost :(', components: []})
    } else {
        return
    }
}
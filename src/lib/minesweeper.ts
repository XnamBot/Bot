export function minesweeper_presetsfunction(preset: number, flag: any, bomb: any) {
    if (preset == 0) {
        return [flag, flag, flag, flag, bomb, flag, flag, flag, flag]
    }else if (preset == 1) {
        return [flag, bomb, flag, flag, flag, flag, flag, flag, flag]
    } else if (preset == 2) {
        return [flag, flag,  flag, bomb, flag, flag, flag, flag, flag]
    } else if (preset == 3) {
        return [flag, flag,  flag, flag, bomb, flag, flag, flag, flag]
    } else if (preset == 4) {
        return [flag, flag,  flag, bomb, flag, bomb, flag, flag, flag]
    } else {
        return [bomb, bomb, bomb, bomb, bomb, bomb, bomb, flag, bomb]
    }
}
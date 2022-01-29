import { container } from "@sapphire/framework";

export function slashiesguilid() {
    if (process.env.NODE_ENV == 'development') {
        return `${container.config.devserverid}`
    } else {
        return ''
    }
}
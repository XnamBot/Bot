import { container } from '@sapphire/framework';

export function slashiesidhint(command: string) {
	if (process.env.NODE_ENV == 'development') {
		var num = 0;
		// General
		if (command == 'ping') {
			return container.idhints.ping[num];
		} else if (command == 'credits') {
			return container.idhints.credits[num];
		} else if (command == 'stats') {
			return container.idhints.stats[num];
		}
		// Animal
		else if (command == 'bird') {
			return container.idhints.bird[num];
		} else if (command == 'cat') {
			return container.idhints.cat[num];
		} else if (command == 'dog') {
			return container.idhints.dog[num];
		} else if (command == 'fox') {
			return container.idhints.fox[num];
		} else if (command == 'koala') {
			return container.idhints.koala[num];
		} else if (command == 'panda') {
			return container.idhints.panda[num];
		}
		// Moderation
		else if (command == 'ban') {
			return container.idhints.ban[num];
		} else if (command == 'kick') {
			return container.idhints.kick[num];
		}
	} else {
		var num = 1;
		// General
		if (command == 'ping') {
			return container.idhints.ping[num];
		} else if (command == 'credits') {
			return container.idhints.credits[num];
		} else if (command == 'stats') {
			return container.idhints.stats[num];
		}
		// Animal
		else if (command == 'bird') {
			return container.idhints.bird[num];
		} else if (command == 'cat') {
			return container.idhints.cat[num];
		} else if (command == 'dog') {
			return container.idhints.dog[num];
		} else if (command == 'fox') {
			return container.idhints.fox[num];
		} else if (command == 'koala') {
			return container.idhints.koala[num];
		} else if (command == 'panda') {
			return container.idhints.panda[num];
		}
		// Moderation
		else if (command == 'ban') {
			return container.idhints.ban[num];
		} else if (command == 'kick') {
			return container.idhints.kick[num];
		}
	}
}

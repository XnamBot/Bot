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
		else if(command == 'animal') {
			return container.idhints.animal[num]
		}
		// Moderation
		else if (command == 'ban') {
			return container.idhints.ban[num];
		} else if (command == 'kick') {
			return container.idhints.kick[num];
		}
		// Games
		else if(command == 'games') {
			return container.idhints.games[num]
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
		else if(command == 'animal') {
			return container.idhints.animal[num]
		}
		// Moderation
		else if (command == 'ban') {
			return container.idhints.ban[num];
		} else if (command == 'kick') {
			return container.idhints.kick[num];
		}
		// Games
		else if(command == 'games') {
			return container.idhints.games[num]
		}
	}
}

import { container } from '@sapphire/framework';
import { settings } from '../config/config';
import { EmbedTemplate } from './embeds';
import { idhints } from '../config/idhints';
import { emojis } from '../config/emoji';

container.config = settings;
container.embed = EmbedTemplate;
container.idhints = idhints;
container.emoji = emojis
// Container Declarations
declare module '@sapphire/pieces' {
	interface Container {
		config: any;
		embed: any;
		idhints: any;
		emoji: any
	}
}

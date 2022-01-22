import { container } from '@sapphire/framework';
import { settings } from '../config/config';
import { EmbedTemplate } from './embeds';

container.config = settings;
container.embed = EmbedTemplate;
// Container Declarations
declare module '@sapphire/pieces' {
	interface Container {
		config: object;
		embed: any;
	}
}
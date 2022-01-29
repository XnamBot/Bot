import { container } from '@sapphire/framework';
import { settings } from '../config/config';
import { EmbedTemplate } from './embeds';
import { idhints } from '../config/idhints'; 

container.config = settings;
container.embed = EmbedTemplate;
container.idhints = idhints
// Container Declarations
declare module '@sapphire/pieces' {
	interface Container {
		config: any;
		embed: any;
		idhints: any
	}
}

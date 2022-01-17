import { container } from '@sapphire/framework';
import { settings } from '../config/config';

container.config = settings;
// Container Declarations
declare module '@sapphire/pieces' {
    interface Container {
        config: object
    }
}
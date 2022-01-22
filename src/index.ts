import './lib/setup';
import '@sapphire/plugin-api/register';
import { XnamClient } from './lib/structures/client';
const client = new XnamClient();

const main = async () => {
	try {
		client.logger.info('Logging in');
		await client.login();
		client.logger.info('logged in');
	} catch (error) {
		client.logger.fatal(error);
		client.destroy();
		process.exit(1);
	}
};
main();
export default client;

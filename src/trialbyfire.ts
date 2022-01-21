import './lib/setup';
import '@sapphire/plugin-api/register';
import { XnamClient } from './lib/xnamclient';
const client = new XnamClient();

const main = async () => {
	client.logger.info('Logging in');
	await client.login();
	client.logger.info('logged in');
    process.exit();
};
main();
export default client;
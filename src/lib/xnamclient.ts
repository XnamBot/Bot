import { SapphireClient } from '@sapphire/framework';

export class XnamClient extends SapphireClient {
	public constructor() {
		super({
			caseInsensitiveCommands: true,
			caseInsensitivePrefixes: true,
            defaultPrefix: '|',
            shards: 'auto',
            intents: [
                'GUILDS',
                'GUILD_MEMBERS',
                'GUILD_BANS',
                'GUILD_EMOJIS_AND_STICKERS',
                'GUILD_VOICE_STATES',
                'GUILD_MESSAGES',
                'GUILD_MESSAGE_REACTIONS',
                'DIRECT_MESSAGES',
                'DIRECT_MESSAGE_REACTIONS'
            ],
            api: {
                auth: {
                    // The application/client ID of your bot
                    // You can find this at https://discord.com/developers/applications
                    id: `${process.env.CLIENT_ID}`,
                    // The client secret of your bot
                    // You can find this at https://discord.com/developers/applications
                    secret: `${process.env.CLIENT_SECRET}`,
                    // The name of the authentication cookie
                    cookie: 'XNAM_AUTH',
                    // The URL that users should be redirected to after a successful authentication
                    redirect: '',
                    // The scopes that should be given to the authentication
                    scopes: ['identify'],
                    // Transformers to transform the raw data from Discord to a different structure.
                    transformers: []
                },
                // The prefix for all routes, e.g. / or v1/
                prefix: `v1/`,
                // The origin header to be set on every request at 'Access-Control-Allow-Origin.
                origin: '*',
                // Any options passed to the NodeJS "net" internal server.listen function
                // See https://nodejs.org/api/net.html#net_server_listen_options_callback
                listenOptions: {
                  // The port the API will listen on
                  port: 4000
                }
            }
		});
	}

	public async login(token?: string) {
		return super.login(token);
	}

	public async destroy() {
		return super.destroy();
	}

	/**
	 * Retrieves the prefix for the guild.
	 * @param message The message that gives context.
	 */
}
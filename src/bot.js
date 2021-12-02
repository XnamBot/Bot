require('dotenv').config()
const { SapphireClient, Command } = require('@sapphire/framework');
const client = new SapphireClient(
    {
        intents: ['GUILDS', 'GUILD_MESSAGES'],
        defaultPrefix: ['|', 'Xnam!', 'xnam!'] 
    }
);
client.login(process.env.DISCORD_TOKEN);
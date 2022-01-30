# packages and stuff

## Libary's Or Modules

```ts
import type { CommandInteraction } from 'discord.js';
import type { ApplicationCommandRegistry } from '@sapphire/framework';
import { slashiesguilid } from '../../lib/slashiesguildid';
import { slashiesidhint } from '../../lib/slashiesidhint';
```

## Registry

```ts
public override registerApplicationCommands(registry: ApplicationCommandRegistry) {
	registry.registerChatInputCommand(
		{
			name: this.name,
			description: 'Ping Pong'
		},
		{
			guildIds: slashiesguilid(),
			idHints: slashiesidhint(`|name|`)
		}
	);
}
```

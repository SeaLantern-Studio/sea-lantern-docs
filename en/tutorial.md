# Tutorial

This page covers how to use each feature in Sea Lantern.

## Creating Your First Server

### Import Source (JAR / Existing Server / Startup Script)

1. Click the "Create Server" button on the main screen
2. In the setup wizard, choose an import source: server JAR, existing server directory, or startup script (`bat` / `sh`)
3. If you don't have a server JAR yet, check the [Server JAR Guide](/en/server-jar)

### Startup Detection and Custom Command

- Sea Lantern automatically detects the startup mode from imported content
- If detection does not match your expectation, switch modes manually and set a custom startup command
- Modpack auto-install is available in the creation flow to reduce first-run manual steps

### Select Java Version

After import is complete, Sea Lantern will list all detected Java versions on your system. Choose the one that matches your Minecraft version:

| Minecraft Version | Recommended Java |
|-------------------|-----------------|
| 1.16.5 and below | Java 8 / 11 |
| 1.17 ~ 1.20.4 | Java 17 |
| 1.20.5+ | Java 21 |

::: tip
If no suitable Java is listed, click the "Download Java" button — Sea Lantern will automatically download and install the required version.
:::

### Name and Configure

Give your server a name. You can also adjust initial memory allocation here, but everything can be changed later.

### Accept EULA

On first launch, Sea Lantern will prompt you to accept the Minecraft EULA. The server won't start until you agree.

## Console

The console is the core interface of Sea Lantern, providing the following features:

### Viewing Logs

All server output is displayed in real-time, including:
- Server start/stop messages
- Player join/leave events
- Chat messages
- Errors and warnings

### Entering Commands

Type Minecraft server commands in the input box at the bottom of the console (no `/` prefix needed) and press Enter to execute.

Common commands:
```
say Welcome to the server!
op Steve
whitelist add Alex
stop
```

### Command History

Press `↑` / `↓` arrow keys to browse previously executed commands.

### Quick Command Panel

The console toolbar provides shortcut buttons for common actions like safely stopping the server or restarting.

## server.properties Configuration

Sea Lantern provides a graphical server.properties editor so you don't need to edit the file manually.

### Common Settings

| Setting | Description | Default |
|---------|-------------|---------|
| `server-port` | Server port | 25565 |
| `max-players` | Maximum players | 20 |
| `difficulty` | Game difficulty | easy |
| `gamemode` | Default game mode | survival |
| `motd` | Server description (shown in server list) | A Minecraft Server |
| `online-mode` | Online authentication | true |
| `pvp` | Allow PVP | true |
| `white-list` | Enable whitelist | false |

### Search and Filter

Settings are organized by category and support keyword search for quick access.

::: warning
You must **restart the server** for configuration changes to take effect.
:::

## Player Management

### Whitelist

When enabled, only whitelisted players can join the server.

- Add player: Enter the player name and click add, or run `whitelist add PlayerName` in the console
- Remove player: Click the remove button in the list
- Toggle whitelist: Set `white-list` to `true` or `false` in server.properties

### Ban Management

- Ban a player: Click ban in the player list, or run `ban PlayerName`
- Unban: Click unban in the ban list, or run `pardon PlayerName`
- IP ban: Run `ban-ip IPAddress`

### OP Permissions

OP (operator) players have the highest server privileges.

- Grant OP: Run `op PlayerName`
- Remove OP: Run `deop PlayerName`

::: warning
Grant OP permissions carefully — OP players can execute any server command.
:::

## Plugin Installation

::: info
Plugins only work with plugin-compatible servers like Paper / Spigot. Vanilla, Forge, and Fabric servers do not support Bukkit plugins.
:::

### Finding Plugins

Common plugin download sources:

- [SpigotMC](https://www.spigotmc.org/resources/) — Largest Spigot plugin community. Requires a free account. Check plugin compatibility versions and ratings.
- [Modrinth](https://modrinth.com/plugins) — Modern plugin/mod platform
- [Hangar](https://hangar.papermc.io/) — PaperMC's official plugin platform
- [Polymart](https://polymart.org/) — Similar to SpigotMC with a more modern interface
- [Bukkit](https://dev.bukkit.org/) — Classic plugin platform
- [GitHub](https://github.com) — Search for open-source plugin projects. Downloads are usually in the Releases section.

### Installation Steps

1. **Preparation**
   - Make sure the server is stopped (if running)
   - Find the `plugins` folder in your server directory
   - If no `plugins` folder exists, create one manually

2. **Place the plugin file**
   - Copy the downloaded plugin `.jar` file into the `plugins` folder
   - Make sure the file name has no special characters or spaces
   - It's best to install one plugin at a time to avoid conflicts

3. **Configure the plugin**
   - Start the server — the plugin will auto-generate its config files
   - Find the plugin's config folder inside `plugins`
   - Edit the config file as needed (usually `config.yml`)

4. **Restart the server**
   - Restart the server for the plugin to take effect
   - Check the console log to confirm the plugin loaded successfully
   - Use the `plugins` command to view loaded plugins

### Recommended Plugins

**Management plugins:**

| Plugin | Function |
|--------|----------|
| EssentialsX | Core commands (teleport, homes, economy, etc.) |
| LuckPerms | Permission management |
| WorldEdit | Powerful map editing tool |
| WorldGuard | Region protection and permission management |

**Game enhancement plugins:**

| Plugin | Function |
|--------|----------|
| CoreProtect | Block logging/rollback |
| Multiverse-Core | Multi-world management |
| DiscordSRV | Server-Discord integration |

**Economy plugins:**

| Plugin | Function |
|--------|----------|
| Vault | Economy/permission API (requires an economy plugin) |
| Shopkeepers | NPC merchant system |

### Plugin Compatibility Notes

- Make sure the plugin is compatible with your server and Minecraft version
- Check for dependencies between plugins
- Avoid installing plugins with overlapping functionality
- Update plugins regularly for new features and security fixes
- Back up your server data before installing new plugins

## Advanced Settings

### Memory Allocation

Minecraft servers need significant memory. Recommended allocation by player count:

| Players | Recommended RAM |
|---------|----------------|
| 1-5 | 2-4 GB |
| 5-15 | 4-6 GB |
| 15-30 | 6-8 GB |
| 30+ | 8 GB+ |

Adjust memory allocation in Sea Lantern's server settings.

### JVM Arguments

Sea Lantern lets you customize JVM startup arguments. For Paper servers, Aikar's Flags are recommended:

```
-XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200
-XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC
-XX:+AlwaysPreTouch -XX:G1NewSizePercent=30
-XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M
-XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5
-XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15
-XX:G1MixedGCLiveThresholdPercent=90
-XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32
-XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1
```

::: warning
If you're unfamiliar with JVM arguments, stick with the defaults. Incorrect settings may cause server instability.
:::

### Safe Shutdown

When you close Sea Lantern, it automatically sends a `stop` command to the server and waits for a safe shutdown. This prevents save corruption.

::: danger
**Never** force-close a running server via Task Manager — this may cause save data loss or corruption.
:::

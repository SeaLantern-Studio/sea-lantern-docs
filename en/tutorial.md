# Tutorial

This page provides a detailed introduction to the various features of Sea Lantern.

## Creating Your First Server

### Importing Source (JAR / Existing Server / Startup Script)

1. Click the "Create Server" button on the main interface
2. In the setup wizard, select the import source: server JAR, existing server directory, or startup script (`bat` / `sh`)
3. If you don't have a server yet, please refer to [Getting the Core](/en/server-jar)

### Startup Method Recognition and Custom Commands

- Sea Lantern intelligently recognizes the startup method based on the imported content
- If the recognition result is not as expected, you can manually switch and enter custom server startup commands
- The creation process supports automatic installation of modpacks, reducing manual steps for first-time server setup

### Selecting Java Version

After completing the import, Sea Lantern will list the Java versions detected on your system. Choose the Java version that matches your Minecraft version:

| Minecraft Version | Recommended Java |
|------------------|------------------|
| 1.16.5 and below | Java 8 / 11 |
| 1.17 ~ 1.20.4 | Java 17 |
| 1.20.5+ | Java 21 |

::: tip
If the appropriate Java version is not listed, click the "Download Java" button, and Sea Lantern will automatically download and install the required version.
:::

### Naming and Configuration

Give your server a name. You can also adjust parameters such as initial memory allocation here, but these can be modified later.

### Accepting the EULA

On first startup, Sea Lantern will prompt you to accept the Minecraft EULA. The server can only run properly after confirmation.

[Official EULA Explanation](https://www.minecraft.net/en-us/eula)

## Console

The console is the core interface of Sea Lantern, providing the following functions:

### Viewing Logs

All output generated while the server is running is displayed in real-time in the console, including:
- Server startup/shutdown information
- Player join/leave events
- Chat messages
- Errors and warnings

### Entering Commands

Enter Minecraft server commands in the input box at the bottom of the console (without the `/` prefix) and press Enter to execute.

Common command examples:
```
say Welcome to the server!
op Steve
whitelist add Alex
stop
```

### Command History

Press the `↑` / `↓` arrow keys to browse previously executed commands for easy repetition.

### Quick Command Panel

The console toolbar provides shortcut buttons for common operations, such as safely stopping the server and restarting.

## server.properties Configuration

Sea Lantern provides a graphical server.properties editor, eliminating the need to manually modify files.

### Common Configuration Options

| Option | Description | Default Value |
|--------|-------------|---------------|
| `server-port` | Server port | 25565 |
| `max-players` | Maximum number of players | 20 |
| `difficulty` | Game difficulty | easy |
| `gamemode` | Default game mode | survival |
| `motd` | Server description (displayed in server list) | A Minecraft Server |
| `online-mode` | Premium authentication | true |
| `pvp` | Allow PVP | true |
| `white-list` | Enable whitelist | false |

### Search and Filter

Configuration options support category browsing and keyword search, allowing you to quickly locate the options you want to modify.

::: warning
You need to **restart the server** for configuration changes to take effect.
:::

## Player Management

### Whitelist

When the whitelist is enabled, only players on the whitelist can join the server.

- Add player: Enter the player name and click add, or execute `whitelist add <player name>` in the console
- Remove player: Click the remove button in the list
- Toggle whitelist: Set `white-list` to `true` or `false` in server.properties

### Ban Management

- Ban player: Click ban in the player list, or execute `ban <player name>`
- Unban player: Click unban in the ban list, or execute `pardon <player name>`
- IP ban: Execute `ban-ip <IP address>`

### OP Permissions

OP (operator) has the highest permissions on the server.

- Grant OP: Execute `op <player name>`
- Remove OP: Execute `deop <player name>`

::: warning
Grant OP permissions cautiously. Players with OP can execute any server command.
:::

## Plugin Installation

::: info
Plugin functionality is only available for Paper / Spigot and other server types that support plugins. Vanilla, Forge, and Fabric servers do not support Bukkit plugins.
:::

### Obtaining Plugins

Common plugin download sources:

- [SpigotMC](https://www.spigotmc.org/resources/) — The largest Spigot plugin community, requires a free account registration. Pay attention to plugin compatibility versions and ratings.
- [Modrinth](https://modrinth.com/plugins) — A modern plugin/mod platform
- [Hangar](https://hangar.papermc.io/) — PaperMC's official plugin platform
- [Polymart](https://polymart.org/) — Similar to SpigotMC with a more modern interface
- [Bukkit](https://dev.bukkit.org/) — A long-standing plugin platform
- [GitHub](https://github.com) — Search for open-source plugin projects, usually available in the Releases section

### Installation Steps

1. **Preparation**
   - Ensure the server is stopped (if it is running)
   - Locate the `plugins` folder in the server directory
   - If there is no `plugins` folder, you can manually create one

2. **Place Plugin Files**
   - Copy the downloaded plugin `.jar` file to the `plugins` folder
   - Ensure the plugin filename does not contain special characters or spaces
   - It is recommended to install one plugin at a time to avoid conflicts

3. **Configure the Plugin**
   - Start the server; the plugin will automatically generate configuration files
   - Find the plugin's configuration folder inside the `plugins` folder
   - Edit the configuration file (usually `config.yml`) as needed

4. **Restart the Server**
   - Restart the server for the plugin to take effect
   - Check the console logs to confirm successful plugin loading
   - Use the `plugins` command to view the list of loaded plugins

### Recommended Plugins

**Administrative Plugins:**

| Plugin | Function | Link |
|--------|----------|------|
| EssentialsX | Basic command set (teleportation, homes, economy, etc.) | <https://essentialsx.net/downloads> |
| LuckPerms | Permission management | <https://luckperms.net/download> |
| WorldEdit | Powerful map editing tool | <https://modrinth.com/plugin/worldedit> |
| WorldGuard | Region protection and permission management | <https://modrinth.com/plugin/worldguard/version/7.0.11> |

**Server Security Plugins:**

| Plugin | Function | Link |
|--------|----------|------|
| Authme | Provides server login password protection (essential for offline servers) | <https://www.spigotmc.org/resources/authmereloaded.6269/> |

**Game Enhancement Plugins:**

| Plugin | Function | Link |
|--------|----------|------|
| CoreProtect | Block logging/rollback | <https://modrinth.com/plugin/coreprotect> |
| Multiverse-Core | Multi-world management | <https://modrinth.com/plugin/multiverse-core> |
| DiscordSRV | Server and Discord integration | <https://www.spigotmc.org/resources/discordsrv.18494/> |

**Economy System Plugins:**

| Plugin | Function | Link |
|--------|----------|------|
| Vault | Economy/permissions API (requires an economy plugin) | <https://www.spigotmc.org/resources/vault.34315/> |
| Shopkeepers | NPC shopkeeper system | <https://www.spigotmc.org/resources/shopkeepers.80756/> |

### Plugin Compatibility Considerations

- Ensure the plugin is compatible with your server type and Minecraft version
- Check dependencies between plugins
- Avoid installing plugins with overlapping functionality
- Regularly update plugins for new features and security fixes
- Back up server data before installing new plugins

## Advanced Settings

### Memory Allocation

Minecraft servers have high memory requirements. It is recommended to allocate memory appropriately based on the number of players:

| Number of Players | Recommended Memory |
|-------------------|---------------------|
| 1-5 players | 2-4 GB |
| 5-15 players | 4-6 GB |
| 15-30 players | 6-8 GB |
| 30+ players | 8+ GB |

Memory allocation can be adjusted in Sea Lantern's server settings.

### JVM Arguments

Sea Lantern allows you to customize JVM startup arguments. For Paper servers, Aikar's Flags are recommended:

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
If you do not understand the effects of JVM arguments, it is recommended to use the default configuration. Incorrect arguments may lead to server instability.
:::

### Safe Shutdown

When you close Sea Lantern, the program will automatically send a `stop` command to the server, wait for the server to shut down safely, and then exit. This prevents world corruption.

::: danger
**Do not** forcibly close a running server directly through the Task Manager, as this may lead to world loss or corruption.
:::

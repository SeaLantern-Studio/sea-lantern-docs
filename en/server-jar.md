# Server JAR Guide

A Minecraft server requires a server JAR file to run. This page covers common server types and how to get them.

## Vanilla

The official server provided by Mojang. Does not support any plugins or mods.

- Download: [Minecraft Official Site](https://www.minecraft.net/en-us/download/server)
- Use case: Pure vanilla experience with no extensions

::: warning
Vanilla server performance is limited. Recommended only for small local games.
:::

## Paper (Recommended)

A high-performance server based on Spigot. The most popular choice today.

- Download: [papermc.io](https://papermc.io/downloads/paper)
- Use case: Servers that need plugins and good performance
- Plugin support: Bukkit / Spigot / Paper plugins

::: tip Why Paper?
- Much better performance than Vanilla and Spigot, with optimized redstone and mob AI
- Active community with great plugin compatibility
- Built-in anti-cheat and security patches
- Fast updates with timely new version support
:::

## Spigot

A well-established plugin server and the upstream project of Paper.

- How to get: Build it yourself using [BuildTools](https://www.spigotmc.org/wiki/buildtools/)
- Use case: When you need Spigot-exclusive plugins or have compatibility issues with Paper

::: info
Spigot does not offer direct JAR downloads — you must compile it with BuildTools. This is less beginner-friendly, so Paper is recommended instead.
:::

## Forge

A mod server for running Java Edition mods.

- Download: [Forge Official Site](https://files.minecraftforge.net/)
- Use case: Modded servers running Forge mods
- Note: **Not compatible with Bukkit/Spigot plugins**

## Fabric

A lightweight mod loader with fast startup.

- Download: [Fabric Official Site](https://fabricmc.net/use/installer/)
- Use case: Modded servers running Fabric mods
- Note: **Not compatible with Bukkit/Spigot plugins** — requires Fabric mods

## Purpur

A fork of Paper that provides more configuration options.

- Download: [Purpur Official Site](https://purpurmc.org/downloads)
- Use case: Servers that need more customization options
- Plugin support: Bukkit / Spigot / Paper plugins

## Pumpkin (Experimental)

A newer Rust-based server project.

- Website: [pumpkinmc.org](https://pumpkinmc.org/)
- Download: [Pumpkin Download](https://pumpkinmc.org/download/)
- Docs: [docs.pumpkinmc.org](https://docs.pumpkinmc.org/)
- Use case: Technical exploration and testing Rust-based server setups
- Package format: commonly distributed as an executable (not a `.jar`)
- Performance: generally very strong; the main limitation right now is ecosystem compatibility

::: warning
Pumpkin is different from the traditional Bukkit/Paper ecosystem. The main risk right now is ecosystem compatibility, so test in a staging environment before production use.
If the download is an executable, use script startup mode (`bat` / `sh`) in Sea Lantern to launch it, instead of importing it as a JAR.
:::

## How to Choose?

| Type | Plugin Support | Mod Support | Performance | Recommendation |
|------|---------------|-------------|-------------|---------------|
| Paper | ✅ Bukkit/Spigot/Paper | ❌ | ⭐⭐⭐ | ⭐⭐⭐ |
| Purpur | ✅ Bukkit/Spigot/Paper | ❌ | ⭐⭐⭐ | ⭐⭐ |
| Spigot | ✅ Bukkit/Spigot | ❌ | ⭐⭐ | ⭐⭐ |
| Vanilla | ❌ | ❌ | ⭐ | ⭐ |
| Forge | ❌ | ✅ Forge Mods | ⭐⭐ | ⭐⭐ |
| Fabric | ❌ | ✅ Fabric Mods | ⭐⭐⭐ | ⭐⭐ |
| Pumpkin | ⚠️ Different ecosystem from Bukkit/Paper | ❌ | ⭐⭐⭐⭐ | ⭐⭐ |

## Important Notes

### Version Compatibility

The server version must match the client version, or players won't be able to join. For example:

- Server 1.21.4 → Client must also be 1.21.4
- Some modded servers support backwards compatibility, but matching versions is recommended

### Minecraft EULA

When starting any Minecraft server for the first time, you must accept the [Minecraft EULA](https://www.minecraft.net/eula). Sea Lantern will guide you through this during server creation.

### What to Do After Downloading?

1. Most server types provide a `.jar` file (projects like Pumpkin may provide executables)
2. Click "Create Server" in Sea Lantern and choose an import source (JAR / existing server / startup script)
3. For `.jar`, import it directly; for executables, use script startup mode (`bat` / `sh`)
4. The wizard tries to auto-detect startup mode; you can manually adjust and set a custom startup command if needed
5. See [Getting Started](/en/getting-started) for detailed steps

# Plugin API

Sea Lantern plugins run on Lua. Plugins access host capabilities through the global `sl` namespace.

Detailed API definitions, parameters, return values, and limits are maintained in the main repository under `docs/plugin/`.

:::warning Note
Plugins in this document mean Sea Lantern Lua plugins. They are not Minecraft server Bukkit / Spigot / Paper plugin files.
Minecraft server plugin file management is a separate module.
:::

## Runtime Model

- The plugin runtime creates a global `sl` table.
- Plugin capabilities are controlled by `permissions` declared in `manifest.json`.
- Unauthorized modules return permission errors when called.
- Plugins run in a restricted Lua environment with only the required standard libraries enabled.
- `sl.i18n` is available by default. Other modules require their matching permissions.

## API Modules

| Module | Permission | Description |
| --- | --- | --- |
| `sl.log` | `log` | Plugin logging |
| `sl.storage` | `storage` | Private key-value storage |
| `sl.fs` | `fs.*` | Sandboxed file system operations |
| `sl.api` | `api` | Plugin API registration and calls |
| `sl.ui` | `ui.*` | UI injection, toast, menus, and component bridge |
| `sl.element` | `element` | Page element queries and actions |
| `sl.server` | `server` | Server information and logs |
| `sl.console` | `console` | Console commands and status access |
| `sl.system` | `system` | System and app information |
| `sl.http` | `network` | Restricted HTTP requests |
| `sl.process` | `process.*` | Execute declared programs inside the plugin directory |
| `sl.plugins` | `plugins.*` | Access other plugin resources |
| `sl.i18n` | none | Internationalization API |

## Basic Usage

```lua
sl.log.info("plugin loaded")

local locale = sl.i18n.getLocale()
local title = sl.i18n.t("common.app_name")

sl.storage.set("enabled", true)
local enabled = sl.storage.get("enabled")

local servers = sl.server.list()
sl.console.send("server-id", "say Hello")
```

## File System

The file system API is isolated by scope:

```lua
local text = sl.fs.read("data", "config.txt")
sl.fs.write("data", "output.txt", "Hello")
```

Supported scopes:

| Scope | Description |
| --- | --- |
| `data` | Private plugin data directory |
| `server` | Current server directory |
| `global` | Global shared directory |

Permissions:

| Permission | Description |
| --- | --- |
| `fs.<scope>.read` | Read files |
| `fs.<scope>.write` | Write files |
| `fs.<scope>.list` | List directories |
| `fs.<scope>.meta` | Query file metadata |
| `fs.<scope>.delete` | Delete files |
| `fs.<scope>.transfer` | Move, copy, and rename |

The legacy `fs` permission is normalized to `fs.data`.

## Process Permissions

| Permission | Description |
| --- | --- |
| `execute_program` | Full process capability |
| `process.exec` | Execute programs |
| `process.inspect` | Inspect background processes |
| `process.output.read` | Read process output |
| `process.kill` | Kill processes |

`sl.process.exec()` requires the program path to be declared in `manifest.json` under `programs`. The program and working directory must stay inside the plugin directory.

## Safety Limits

- The file system rejects absolute paths, path escapes, symbolic links, and reparse points.
- Virtual paths do not expose real host paths.
- Delete operations do not recursively remove non-empty directories.
- HTTP only supports `http` and `https`, and blocks localhost and private network addresses.
- HTTP requests do not follow redirects automatically, and response bodies have size limits.
- Console commands are checked against runtime state and safety rules.
- Storage is intended for small structured data.

## UI and Element APIs

`sl.ui` registers UI behavior with the host, including:

- HTML / CSS injection;
- toast notifications;
- sidebars;
- context menus;
- component bridge.

`sl.element` queries and operates on existing page elements.

Component bridge features require extra permissions:

- `ui.component.read`
- `ui.component.write`
- `ui.component.proxy`
- `ui.component.create`

## Internationalization

Plugins can read host translations and register plugin-specific translations:

```lua
sl.i18n.registerLocale("en-US", "English")
sl.i18n.addTranslations("en-US", {
  title = "Example Plugin"
})
```

Plugin translations are stored under the `plugins.<plugin_id>.*` namespace.

## Trusted Plugins

The current Trusted plugin mechanism includes:

- manual review;
- bundled trusted catalog;
- package hash verification;
- permission ceiling checks;
- authorization when enabling.

This is not a full digital signature system.

High-risk permissions include:

- `execute_program`
- `plugin_folder_access`
- `plugins.write`
- `ui.component.proxy`

Plugins using these permissions require extra review and user confirmation.

## Development Locations

| Content | Path |
| --- | --- |
| Plugin API docs | `docs/plugin/*.md` |
| Lua runtime | `backend/tauri-host/src/plugins/runtime/` |
| Trust rules | `backend/plugin-trust/` |
| Command implementation | `backend/tauri-host/src/commands/plugins/` |
| Frontend API | `frontend/src/api/plugin.ts` |

When changing plugin APIs, check the runtime implementation, frontend wrapper, command registration, and documentation together. Plugin UI, permission behavior, and data formats are compatibility surfaces.

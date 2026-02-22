# Features

This page gives a quick overview of Sea Lantern's current capabilities and practical use cases.  
If you're getting started, begin with "Server Creation", "Java Management", and "Console".

## Console

- Real-time server log output for both startup and runtime stages
- Direct command input with command history and quick command panel
- Toolbar actions for common tasks like clearing view and exporting logs

## server.properties Editor

- Edit server config with a graphical interface instead of manual file edits
- Categorized browsing and search filtering for faster navigation
- Great for daily tuning; some settings still require a server restart

## Player Management

- Online player status overview
- Whitelist management
- Ban management
- OP permission management
- Common actions like kicking players

## Plugin System

Lua script-based plugin extension mechanism:

- Plugins can register custom UI components and pages
- Context menu extensions
- Plugin permission management panel
- Sandboxed plugin runtime
- Plugin install / enable / disable / delete workflow

## Theme System

- 5 built-in themes: Default, Midnight, Ocean, Rose, Sunset
- Dark/light mode toggle
- Acrylic/frosted glass effect (Windows)
- Complete CSS Variables design token system with runtime switching

## Multi-language Support

10 built-in languages:

- 简体中文, 繁體中文
- English, 日本語, 한국어
- Français, Deutsch, Español
- Русский, Tiếng Việt
- Runtime language switching without app restart

## Java Management

- Auto-detect Java runtimes installed on the system
- Built-in Java downloader for one-click installation
- Manual Java path selection with validation support

## Mod Management

- View installed mod/plugin files under the server directory
- Helpful for conflict checks, duplicate cleanup, and version inspection
- Focused on local management for now; online search and one-click install are still evolving

## Server Creation

- Guided workflow to lower setup friction for new servers
- Supports `jar` / `bat` / `sh` startup modes
- Includes first-launch guidance for EULA-related steps

## Safe Shutdown

- Triggers a safe stop flow when Sea Lantern closes
- Reduces the risk of save corruption from abrupt termination

## Auto Update

- Check for updates and show current/latest version info
- Includes release-notes preview and download jump
- Arch Linux follows AUR workflow; other platforms follow their own installer flow

## System Tray

- Keep server processes running after minimizing to tray
- Quickly restore window or exit from tray actions

## Usage Suggestions

- First-time setup: use "Server Creation" to bootstrap, then tune key options in "server.properties Editor"
- Daily operations: rely on "Console" and "Player Management" for frequent actions instead of repetitive manual commands
- Long-running hosting: combine "System Tray" and "Safe Shutdown" to reduce accidental interruption risk

## Scope Notes

- Behavior can differ by server core and operating system; follow page-specific notes when configuring
- Auto update is "version check + download guidance"; installation replacement is still user-confirmed

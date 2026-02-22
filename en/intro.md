<script setup>
import FeatureShowcase from '../.vitepress/theme/components/FeatureShowcase.vue'

const featureItems = [
  { title: 'Real-time Console', desc: 'View live logs, run commands directly, and keep command history.', note: 'Useful for startup troubleshooting and routine operations without switching to another terminal.' },
  { title: 'Visual Configuration', desc: 'Edit server.properties with categorized controls instead of manual files.', note: 'Common options are faster to find; settings that require restart still follow server-side behavior.' },
  { title: 'Player Management', desc: 'Whitelist, ban, and OP operations are available in one place.', note: 'Online status and permission actions are centralized to reduce repeated command memorization.' },
  { title: 'Plugin System', desc: 'Lua-based extensions with support for custom UI and context menus.', note: 'Best for local extensions and tooling; complex ecosystems may still rely on native server workflows.' },
  { title: 'Theme System', desc: 'Five built-in themes with dark/light mode; acrylic effect is supported on Windows.', note: 'Theme switching keeps the same layout and focuses on readability and visual preference.' },
  { title: 'Multi-language', desc: '10 built-in languages including Chinese, English, Japanese, and Korean.', note: 'Language can be switched at runtime, and core terms stay aligned across UI and docs.' },
  { title: 'Java Management', desc: 'Auto-detect installed runtimes and install Java with one click.', note: 'You can reuse an existing JDK or quickly prepare a runtime from inside the app.' },
  { title: 'Mod Management', desc: 'View installed server-side mods/plugins with basic management support.', note: 'Currently focused on local inspection and basic maintenance before deeper adjustments.' },
  { title: 'Safe Shutdown', desc: 'Stops the server automatically when the app closes to reduce data risk.', note: 'Helps avoid abrupt process termination and lowers save/world corruption risk.' },
  { title: 'Auto Update', desc: 'Check for new versions and jump to the download page (AUR workflow on Arch Linux).', note: 'Desktop updates are download-guided rather than silently overwriting your installation.' },
  { title: 'Cross-platform', desc: 'Supports Windows, macOS, and Linux (including Arch Linux AUR).', note: 'Some capabilities differ by platform, and platform-specific behavior is documented separately.' },
  { title: 'System Tray', desc: 'Minimize to the system tray and keep servers running in the background.', note: 'Practical for long-running servers, with quick restore and exit actions from the tray menu.' },
]
</script>

# Introduction

Sea Lantern is a **lightweight** Minecraft server management tool.  
Built with **Tauri 2 + Rust + Vue 3**.

## Features

<FeatureShowcase
  :items="featureItems"
  panel-title="Feature Details"
/>

## Tech Stack

- **Frontend**: Vue 3 + TypeScript + Vite + Pinia
- **Backend**: Rust + Tauri 2
- **Styling**: CSS Variables design system + theme engine
- **Charts**: ECharts
- **Package Manager**: pnpm
- **Linting**: oxlint + oxfmt

No Electron, no Node backend, no Webpack. Fast startup, small footprint, low memory.

## Community

QQ Group: **293748695**

## License

[GNU General Public License v3.0](https://github.com/SeaLantern-Studio/SeaLantern/blob/main/LICENSE)

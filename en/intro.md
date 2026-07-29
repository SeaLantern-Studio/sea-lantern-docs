<script setup>
import FeatureShowcase from '../.vitepress/theme/components/FeatureShowcase.vue'

const featureItems = [
  { title: 'Server Management', desc: 'Manage multiple Minecraft servers and their runtime state.' },
  { title: 'Server Creation', desc: 'Import a JAR, existing server, or startup script, with custom command support.' },
  { title: 'Core Downloads', desc: 'Find and download common Minecraft server cores in the app.' },
  { title: 'Live Console', desc: 'View live logs, send commands, and retain command history.' },
  { title: 'Configuration', desc: 'Edit startup settings and server.properties with search and diff tools.' },
  { title: 'Player Management', desc: 'Manage online players, whitelist, bans, and OP permissions.' },
  { title: 'P2P Multiplayer', desc: 'Create a multiplayer tunnel and connection ticket without a public IP.' },
  { title: 'Plugin System', desc: 'Extend pages, components, menus, and app capabilities with Lua plugins.' },
  { title: 'Server Extensions', desc: 'View and manage Mod and plugin files installed on a server.' },
  { title: 'Java Management', desc: 'Detect local Java runtimes and download a suitable version when needed.' },
  { title: 'Personalization', desc: 'Choose from multiple themes, light/dark modes, and Windows acrylic effects.' },
  { title: 'Languages', desc: 'Switch between 10 built-in languages at runtime.' },
]
</script>

# Introduction

Sea Lantern is a **lightweight** Minecraft server management tool.

## Features

<FeatureShowcase
  :items="featureItems"
  panel-title="Feature Details"
/>

## Tech Stack

- **Frontend**: Vue 3 + TypeScript + Vite
- **Backend**: Rust + Tauri 2
- **Communication**: Tauri invoke
- **Docker**: itzg/minecraft-server

No Electron, no Node backend, no Webpack. Fast startup, small footprint, low memory.

> Rendered with the system WebView.

## Community

For support or discussion, join one of our community groups:

- QQ Group 1: **293748695**
- QQ Group 2: **1085823754**

## License

[GNU Affero General Public License v3.0](https://github.com/SeaLantern-Studio/SeaLantern/blob/main/LICENSE)

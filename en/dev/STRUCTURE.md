# Project Structure

This page follows the current `main` branch of the Sea Lantern repository. The layout may change during development; source code is authoritative.

## Top-Level Layout

```text
SeaLantern/
├── src/             # Vue 3 frontend
├── crates/          # Reusable Rust crates
│   ├── core/        # Core domain, process, instance, and config logic
│   ├── infra/       # Files, network, downloads, persistence, and platform code
│   └── extra/       # Plugins, market, updates, and online features
├── server/          # Application services and RPC boundary
├── src-tauri/       # Tauri desktop host
├── docker-entry/    # Docker/headless entry point
├── docker/          # Docker build resources
├── docs/            # Source-coupled developer docs and Lua API
├── scripts/         # Version and NOTICE maintenance scripts
├── packaging/       # Platform packaging files
├── Cargo.toml       # Rust workspace configuration
├── package.json     # Frontend dependencies and repository scripts
└── pnpm-lock.yaml   # pnpm lockfile
```

## Frontend

`src/` contains the Vue 3, TypeScript, Pinia, and Vue Router frontend:

| Directory | Responsibility |
| --- | --- |
| `src/api/` | Wrappers for host capabilities |
| `src/views/` | Home, creation, console, config, players, online, and backup views |
| `src/components/` | Shared and view-specific components |
| `src/stores/` | Pinia state stores |
| `src/router/` | Page routes |
| `src/language/` | Locale resources and runtime |
| `src/themes/`, `src/styles/` | Theme definitions and global/view styles |
| `src/composables/` | Reusable Vue composables |
| `src/types/`, `src/utils/` | Types and shared utilities |

When changing a view, check its component, store, API wrapper, and locale keys as well.

## Rust Workspace

The root `Cargo.toml` currently contains these members:

| Member | Responsibility |
| --- | --- |
| `crates/core` | Process control, server instances, config, and provisioning rules |
| `crates/infra` | Archives, downloads, filesystem, network, persistence, and platforms |
| `crates/extra` | Lua plugins, config, download links, market, updates, and P2P multiplayer |
| `server` | Host-facing application services and RPC contracts |
| `src-tauri` | Desktop entry point, Tauri plugins, and window host |
| `docker-entry` | Container runtime entry point |

Keep reusable business rules in the shared crates rather than placing them directly in UI or platform entry points.

## Common Entry Points

| Change | Start here |
| --- | --- |
| Pages and navigation | `src/router/index.ts`, `src/views/`, `src/components/layout/` |
| Frontend/backend calls | `src/api/`, `server/src/rpc/` |
| Server instances and processes | `crates/core/src/instance/`, `crates/core/src/process/` |
| Downloads and files | `crates/infra/src/download/`, `crates/infra/src/fs/` |
| Sea Lantern plugins | `crates/extra/src/app_plugin/`, `src/components/plugin/` |
| Online tunnels | `crates/extra/src/online/`, `src/views/TunnelView.vue` |
| Desktop host | `src-tauri/src/`, `src-tauri/tauri.conf.json` |
| Docker entry | `docker-entry/`, `docker/` |

## Common Commands

```bash
pnpm install
pnpm dev
pnpm tauri dev
pnpm docker:dev
```

See [Environment Setup](/en/dev/environment) and [Contributing](/en/dev/CONTRIBUTING) for complete setup and check commands.

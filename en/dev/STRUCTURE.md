# Project Structure

Sea Lantern is a Tauri 2 + Vue 3 + Rust project. The repository is split into the frontend, backend Rust workspace, shared data, scripts, and source-bound technical docs.

## Top-Level Directories

```text
SeaLantern/
├── frontend/       # Vue 3 frontend, pages, state, language, themes, and Tauri API wrappers
├── backend/        # Rust workspace with core crates, Tauri host, and Docker/headless entry
├── shared/         # Shared static data, such as plugin permissions, trusted catalog, and server taxonomy
├── docs/           # Source-bound technical docs, plugin API, CLI, and design notes
├── scripts/        # Tauri launcher, version, notice, Docker smoke scripts
├── docker/         # Docker related files
├── packaging/      # Desktop packaging files
├── panic-log/      # Crash log directory placeholder
├── Cargo.toml      # Backend Rust workspace manifest
├── package.json    # Repository scripts and frontend tool entry
└── pnpm-lock.yaml  # pnpm lockfile
```

## Frontend

`frontend/` owns UI, state, language resources, themes, and calls to Tauri backend commands.

```text
frontend/
├── index.html
├── package.json
├── scripts/
└── src/
    ├── main.ts
    ├── main.next.ts
    ├── NextRoot.vue
    ├── api/
    ├── router/
    ├── pages/
    ├── views/
    ├── layout/
    ├── shell/
    ├── components/
    ├── composables/
    ├── features/
    ├── services/
    ├── host/
    ├── launcher/
    ├── stores/
    ├── language/
    ├── themes/
    ├── styles/
    ├── contracts/
    ├── types/
    ├── data/
    ├── assets/
    └── utils/
```

### Common Frontend Entry Points

| Change | Start here |
| --- | --- |
| Tauri command calls | `frontend/src/api/` |
| Routes and page entries | `frontend/src/router/`, `frontend/src/pages/`, `frontend/src/views/` |
| Page components | `frontend/src/components/` and the matching page directory |
| App shell, navigation, layout | `frontend/src/layout/`, `frontend/src/shell/`, `frontend/src/components/shell/`, `frontend/src/NextRoot.vue` |
| Cross-page flows | `frontend/src/features/`, `frontend/src/services/` |
| Reusable Vue logic | `frontend/src/composables/` |
| Global state | `frontend/src/stores/` |
| Plugin state modules | `frontend/src/stores/plugin/` |
| User-facing text | `frontend/src/language/` |
| Themes and visual variables | `frontend/src/themes/`, `frontend/src/styles/` |
| Types and contracts | `frontend/src/types/`, `frontend/src/contracts/` |

### Page Directories

`frontend/src/pages/` is organized by product area:

- `home/`
- `servers/`
- `server-instance/`
- `plugins/`
- `downloads/`
- `settings/`
- `paint/`
- `tunnel/`
- `developer/`
- `about/`

Single-server pages live under `server-instance/`, such as `console/`, `config/`, `players/`, and `extensions/`.

## Backend

`backend/` is a Rust workspace. The root `Cargo.toml` manages all crates.

```text
backend/
├── runtime-core/
├── event-core/
├── i18n-core/
├── server-config-core/
├── docker-core/
├── server-local-setup-core/
├── server-installer-core/
├── server-startup-scan-core/
├── java-installer-core/
├── server-log-core/
├── server-plugin-core/
├── plugin-trust-core/
├── lua-runtime-core/
├── server-download-links-core/
├── starter-links-core/
├── update-core/
├── tauri-host/
├── docker-entry/
└── vendor/
```

### Core Crate Responsibilities

| Crate | Responsibility |
| --- | --- |
| `runtime-core` | Runtime mode, HTTP/headless tools, panic reports |
| `event-core` | App and server event models |
| `i18n-core` | Backend language resources |
| `server-config-core` | Startup config, JVM args, CPU policy, `server.properties` rules |
| `docker-core` | Docker preview and Docker rules |
| `server-local-setup-core` | Local server adoption, startup mode inference, local startup preview helpers |
| `server-installer-core` | Server installation and core detection |
| `server-startup-scan-core` | Existing server directory scanning |
| `java-installer-core` | Java download and installation |
| `server-log-core` | Server log persistence and reading |
| `server-plugin-core` | Minecraft server plugin file scanning and management rules |
| `plugin-trust-core` | Sea Lantern plugin permission normalization, trust, and review rules |
| `lua-runtime-core` | Lua runtime boundary |
| `server-download-links-core` | Server download link parsing |
| `starter-links-core` | Starter links |
| `update-core` | Update check, download, and install flow |

Reusable rules should live in the owning `*-core` crate. `tauri-host` should focus on commands, orchestration, persistence, runtime state, and host integration.

## Tauri Host

`backend/tauri-host/` is the desktop and headless host.

```text
backend/tauri-host/
├── tauri.conf.json
├── capabilities/
├── icons/
├── tests/
└── src/
    ├── lib.rs
    ├── main.rs
    ├── runtime/
    ├── commands/
    ├── services/
    ├── models/
    ├── adapters/
    ├── hardcode_data/
    ├── plugins/
    └── utils/
```

### Commands

`backend/tauri-host/src/commands/` contains Tauri command implementations:

| Directory | Responsibility |
| --- | --- |
| `app/` | App, settings, system, i18n, and host commands |
| `downloads/` | Downloads, Java, Mod downloads |
| `online/` | Online, Join ID, tunnel |
| `plugins/` | Sea Lantern Lua plugin management, market, enable/disable, snapshots |
| `server/` | Server management, config, players, server plugin files |
| `update/` | Update check, download, install |

When adding or changing commands, check at least:

1. `frontend/src/api/*.ts`
2. `backend/tauri-host/src/runtime/command_catalog.rs`
3. `backend/tauri-host/src/commands/`

Command names, parameters, return structures, error semantics, and event fields are frontend-facing contracts.

### Services

`backend/tauri-host/src/services/` handles host service orchestration:

| Directory | Responsibility |
| --- | --- |
| `server/` | Server management, runtime control, startup, plugin files, runtime adapters |
| `download/` | Download manager and Java installer |
| `online/` | Online services and tunnel |
| `java_detector/` | Java detection |

Server startup paths must keep local jar, starter, bat, sh, ps1, custom start, and Docker start separate. When preview and execution must match, prefer shared normalized results from core crates.

## Plugin System

The Sea Lantern Lua plugin system lives in:

```text
backend/tauri-host/src/plugins/
├── api/
├── builtin/
├── manager/
└── runtime/
    ├── core/
    ├── console/
    ├── element/
    ├── filesystem/
    ├── http/
    ├── i18n/
    ├── log/
    ├── plugins_api/
    ├── process/
    ├── server/
    ├── storage/
    ├── system/
    └── ui/
```

Frontend counterparts:

- `frontend/src/api/plugin.ts`
- `frontend/src/pages/plugins/`
- `frontend/src/components/plugin/`
- `frontend/src/components/plugins/`
- `frontend/src/stores/plugin/`

Keep the two plugin systems separate:

| Type | Frontend entry | Backend entry |
| --- | --- | --- |
| Sea Lantern Lua plugins | `frontend/src/api/plugin.ts` | `backend/tauri-host/src/plugins/`, `backend/tauri-host/src/commands/plugins/` |
| Minecraft server plugin files | `frontend/src/api/mcs_plugins.ts` | `backend/server-plugin-core/`, `backend/tauri-host/src/commands/server/` |

Plugin UI snapshots, sidebar, context menus, component mirror, and permission logs are plugin-visible behavior. Check compatibility before changing them.

## Shared Data and Docs

`shared/` stores static data used across frontend and backend:

- `plugin-permissions.json`
- `plugin-trusted-catalog.json`
- `server-core-taxonomy.json`
- `startup-modes.json`

`docs/` keeps technical docs that are tightly bound to source code:

- `docs/plugin/`: Sea Lantern Lua plugin runtime API
- `docs/CLI-Guide.md`: CLI guide
- `docs/design/`: design notes

General user docs, tutorials, and contribution guides should live on the docs site instead of being added to repository `docs/`.

## Scripts

`scripts/` currently contains:

- `tauri.mjs`: repository-level Tauri launcher
- `version.mjs`: version helper
- `notice.mjs`: third-party notice helper
- `cli-docker-smoke.ps1`: Docker/CLI smoke check

Default desktop development command:

```bash
pnpm --dir frontend run tauri:dev
```

Frontend only:

```bash
pnpm --dir frontend run dev
```

HTTP / Docker backend only:

```bash
pnpm --dir frontend run dev:http:backend
```

## Common Change Routes

| Task | Start here |
| --- | --- |
| Add a frontend page | `frontend/src/router/`, `frontend/src/pages/`, `frontend/src/router/pageMeta.ts` |
| Add user-facing text | `frontend/src/language/` |
| Add a Tauri call | `frontend/src/api/`, `backend/tauri-host/src/runtime/command_catalog.rs`, `backend/tauri-host/src/commands/` |
| Server create, import, startup | `frontend/src/pages/servers/`, `backend/server-config-core/`, `backend/server-local-setup-core/`, `backend/tauri-host/src/services/server/` |
| Docker startup rules | `backend/docker-core/`, `backend/tauri-host/src/services/server/runtime/docker_itzg/` |
| Config editor | `frontend/src/features/config-editor/`, `frontend/src/pages/server-instance/config/`, `backend/server-config-core/` |
| Console and logs | `frontend/src/stores/consoleStore.ts`, `backend/server-log-core/`, backend host log reading logic |
| Players, whitelist, bans, OP | `frontend/src/api/player.ts`, `frontend/src/pages/server-instance/players/`, `backend/tauri-host/src/commands/server/` |
| Downloads, Java, server cores | `frontend/src/api/downloader.ts`, `frontend/src/api/java.ts`, `backend/java-installer-core/`, `backend/server-installer-core/` |
| Updates | `frontend/src/api/update.ts`, `frontend/src/stores/updateStore.ts`, `backend/update-core/` |
| Auth entry | `frontend/src/services/auth*.ts`, `frontend/src/stores/auth*.ts`, `frontend/src/router/authRoute.ts` |

## Check Commands

Frontend:

```bash
pnpm --dir frontend run lint
pnpm --dir frontend run build:check
pnpm --dir frontend run fmt:check
```

Backend:

```bash
cargo fmt --all -- --check
cargo check --workspace
cargo clippy --workspace -- -D warnings
```

Language resources:

```bash
pnpm --dir frontend run i18n:check
pnpm --dir frontend run i18n:sync
```

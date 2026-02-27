# Detailed Directory Structure

> Based on the `v1.0.0` tree of `SeaLantern-Studio/SeaLantern` (released on 2026-02-26).

## Top-Level Layout

```text
SeaLantern/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   ├── pull_request_template.md
│   └── workflows/
│       ├── check.yml
│       ├── release.yml
│       ├── issue-check.yml
│       └── aur-publish.yml
├── docs/
│   ├── AI_GUIDE.md
│   ├── CONTRIBUTING.md
│   └── STRUCTURE.md
├── src/                     # Vue 3 + TypeScript frontend
├── src-tauri/               # Rust + Tauri 2 backend
├── Cargo.toml
├── package.json
├── pnpm-lock.yaml
├── README.md
└── README-en.md
```

## Frontend (`src/`)

### API Layer (`src/api/`)

```text
src/api/
├── tauri.ts
├── server.ts
├── config.ts
├── settings.ts
├── player.ts
├── java.ts
├── system.ts
├── plugin.ts
├── mcs_plugins.ts
├── downloader.ts
├── update.ts
├── remoteLocales.ts
└── index.ts
```

### Component Layer (`src/components/`)

```text
src/components/
├── common/                  # shared UI primitives (SLButton/SLInput/SLSelect/SLTabs/SLDropzone...)
├── layout/                  # AppHeader/AppLayout/AppSidebar
├── console/                 # ConsoleInput/ConsoleOutput/CommandModal
├── config/                  # ConfigCategories/ConfigEntry/ConfigToolbar
├── plugin/                  # PluginComponentRenderer/PluginPermissionPanel
├── splash/                  # SplashScreen
├── views/
│   ├── create/              # creation workflow split (workflow, startup utils, step components)
│   ├── home/
│   ├── player/
│   ├── settings/
│   ├── paint/
│   └── about/
└── JavaDownloader.vue
```

### View Layer (`src/views/`)

```text
src/views/
├── HomeView.vue
├── CreateServerView.vue
├── ConsoleView.vue
├── ConfigView.vue
├── PlayerView.vue
├── SettingsView.vue
├── PaintView.vue
├── AboutView.vue
├── MarketView.vue
├── DownloadFileView.vue
├── PluginsView.vue
├── PluginsPageView.vue
├── PluginCategoryView.vue
└── PluginPageView.vue
```

### State and Infrastructure

```text
src/
├── stores/                  # server/console/settings/plugin/ui/update/i18n stores
├── composables/             # useAsync/useMessage/useTabIndicator/useAboutLinks...
├── language/                # 10 locales + index.ts
├── themes/                  # default/midnight/ocean/rose/sunset
├── styles/                  # variables/reset/typography/app + module styles
├── types/                   # common/plugin/server/theme
├── utils/                   # constants/errorHandler/serverUtils/theme/version
├── data/                    # contributors.ts
├── router/index.ts
├── App.vue
├── main.ts
└── style.css
```

## Backend (`src-tauri/`)

```text
src-tauri/
├── capabilities/default.json
├── tauri.conf.json
├── build.rs
├── Cargo.toml
└── src/
    ├── commands/            # server/player/java/settings/system/update/downloader/mcs_plugin...
    ├── services/            # server_manager/server_installer/download_manager/java_detector...
    ├── models/              # server/plugin/config/settings/download models
    ├── plugins/             # Lua plugin runtime (api/loader/manager/runtime)
    ├── utils/               # cli/path/downloader
    ├── lib.rs
    └── main.rs
```

## Key Structural Changes in v1.0.0

- Server creation flow is fully split under `src/components/views/create/`.
- Plugin-related views and permission handling are clearly separated.
- Download modules are split out on both frontend and backend.
- `src/views/DownloadFileView.vue` is now part of the routed views.
- CI workflow is streamlined into check, release, issue-check, and AUR publish.

# 詳細目錄結構

> 依據 `SeaLantern-Studio/SeaLantern` 的 `v1.0.0` 標籤目錄（發布日期：2026-02-26）整理。

## 頂層目錄

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
├── src/                     # Vue 3 + TypeScript 前端
├── src-tauri/               # Rust + Tauri 2 後端
├── Cargo.toml
├── package.json
├── pnpm-lock.yaml
├── README.md
└── README-en.md
```

## 前端結構（`src/`）

### API 層（`src/api/`）

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

### 元件層（`src/components/`）

```text
src/components/
├── common/                  # 通用元件（SLButton/SLInput/SLSelect/SLTabs/SLDropzone 等）
├── layout/                  # AppHeader/AppLayout/AppSidebar
├── console/                 # ConsoleInput/ConsoleOutput/CommandModal
├── config/                  # ConfigCategories/ConfigEntry/ConfigToolbar
├── plugin/                  # PluginComponentRenderer/PluginPermissionPanel
├── splash/                  # SplashScreen
├── views/
│   ├── create/              # 建立流程拆分（workflow、startup utils、step 元件）
│   ├── home/
│   ├── player/
│   ├── settings/
│   ├── paint/
│   └── about/
└── JavaDownloader.vue
```

### 視圖層（`src/views/`）

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

### 狀態與基礎能力

```text
src/
├── stores/                  # server/console/settings/plugin/ui/update/i18n 狀態
├── composables/             # useAsync/useMessage/useTabIndicator/useAboutLinks 等
├── language/                # 10 種語言 + index.ts
├── themes/                  # default/midnight/ocean/rose/sunset
├── styles/                  # variables/reset/typography/app + 分模組樣式
├── types/                   # common/plugin/server/theme
├── utils/                   # constants/errorHandler/serverUtils/theme/version
├── data/                    # contributors.ts
├── router/index.ts
├── App.vue
├── main.ts
└── style.css
```

## 後端結構（`src-tauri/`）

```text
src-tauri/
├── capabilities/default.json
├── tauri.conf.json
├── build.rs
├── Cargo.toml
└── src/
    ├── commands/            # server/player/java/settings/system/update/downloader/mcs_plugin 等
    ├── services/            # server_manager/server_installer/download_manager/java_detector 等
    ├── models/              # server/plugin/config/settings/download 模型
    ├── plugins/             # Lua 插件系統（api/loader/manager/runtime）
    ├── utils/               # cli/path/downloader
    ├── lib.rs
    └── main.rs
```

## v1.0.0 結構變更重點

- 建立伺服器流程完整拆分至 `src/components/views/create/`。
- 插件相關視圖與權限流程分層更清楚。
- 下載能力在前後端都拆分為獨立模組。
- `src/views/DownloadFileView.vue` 已納入路由視圖層。
- CI 工作流收斂為 check、release、issue-check、AUR publish 四條主線。

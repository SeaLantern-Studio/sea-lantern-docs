# 详细目录结构

> 基于 `SeaLantern-Studio/SeaLantern` 的 `v1.0.0` 标签目录（发布日期：2026-02-26）整理。

## 顶层目录

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
├── src/                     # Vue 3 + TS 前端
├── src-tauri/               # Rust + Tauri 2 后端
├── Cargo.toml
├── package.json
├── pnpm-lock.yaml
├── README.md
└── README-en.md
```

## 前端结构（`src/`）

### API 层（`src/api/`）

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

### 组件层（`src/components/`）

```text
src/components/
├── common/                  # 通用组件（SLButton/SLInput/SLSelect/SLTabs/SLDropzone 等）
├── layout/                  # AppHeader/AppLayout/AppSidebar
├── console/                 # ConsoleInput/ConsoleOutput/CommandModal
├── config/                  # ConfigCategories/ConfigEntry/ConfigToolbar
├── plugin/                  # PluginComponentRenderer/PluginPermissionPanel
├── splash/                  # SplashScreen
├── views/
│   ├── create/              # 创建流程拆分（workflow、startup utils、step 组件）
│   ├── home/
│   ├── player/
│   ├── settings/
│   ├── paint/
│   └── about/
└── JavaDownloader.vue
```

### 页面层（`src/views/`）

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

### 状态与基础能力

```text
src/
├── stores/                  # server/console/settings/plugin/ui/update/i18n 等状态
├── composables/             # useAsync/useMessage/useTabIndicator/useAboutLinks 等
├── language/                # 10 种语言 + index.ts
├── themes/                  # default/midnight/ocean/rose/sunset
├── styles/                  # variables/reset/typography/app + 分模块样式
├── types/                   # common/plugin/server/theme
├── utils/                   # constants/errorHandler/serverUtils/theme/version
├── data/                    # contributors.ts
├── router/index.ts
├── App.vue
├── main.ts
└── style.css
```

## 后端结构（`src-tauri/`）

```text
src-tauri/
├── capabilities/default.json
├── tauri.conf.json
├── build.rs
├── Cargo.toml
└── src/
    ├── commands/            # server/player/java/settings/system/update/downloader/mcs_plugin 等
    ├── services/            # server_manager/server_installer/download_manager/java_detector 等
    ├── models/              # server/plugin/config/settings/download 等模型
    ├── plugins/             # Lua 插件系统（api/loader/manager/runtime）
    ├── utils/               # cli/path/downloader
    ├── lib.rs
    └── main.rs
```

## 目前结构变化重点（v1.0.0）

- 创建流程拆分至 `src/components/views/create/`，覆盖导入来源、启动识别、自定义命令。
- 插件体系拆分为市场视图与权限面板，多页面结构更清晰。
- 下载能力前后端都新增独立模块（`src/api/downloader.ts`、`src-tauri/src/commands/downloader.rs`）。
- `src/views/DownloadFileView.vue` 已加入路由视图层。
- CI 工作流收敛为检查、发布、Issue 检查、AUR 发布四条主线。

# 專案結構

## 技術棧

- **前端**: Vue 3 + TypeScript + Vite + Pinia
- **後端**: Rust + Tauri 2
- **樣式**: CSS Variables 設計系統 + 主題引擎
- **圖表**: ECharts
- **套件管理**: pnpm
- **程式碼檢查**: oxlint + oxfmt

## v1.0.0 結構同步（2026-02-26）

- 建立伺服器流程拆分到 `src/components/views/create/`，支援匯入來源、啟動方式偵測與自訂命令
- 頁面子元件進一步模組化：`about/`、`home/`、`paint/`、`player/`、`settings/`
- API 層新增/完善：`src/api/downloader.ts`、`src/api/mcs_plugins.ts`
- 視圖層包含 `DownloadFileView.vue` 與插件多視圖（`PluginsView / PluginsPageView / PluginCategoryView / PluginPageView`）
- CI/CD 工作流目前為：`check.yml`、`release.yml`、`issue-check.yml`、`aur-publish.yml`

## 目錄概覽

```
SeaLantern/
├── src/                    # 前端原始碼 (Vue 3)
│   ├── api/                # Tauri invoke 封裝
│   ├── views/              # 頁面元件
│   ├── components/         # UI 元件庫
│   │   ├── common/         # SL 基礎元件（Button、Modal、Select 等）
│   │   ├── layout/         # 佈局元件（Header、Sidebar）
│   │   ├── config/         # 配置頁元件
│   │   ├── console/        # 控制台元件
│   │   ├── plugin/         # 插件系統元件
│   │   └── splash/         # 啟動畫面
│   ├── composables/        # 組合式函式（useToast、useAsync 等）
│   ├── stores/             # Pinia 狀態管理
│   ├── router/             # Vue Router 路由配置
│   ├── language/           # i18n 多語言檔案（10 種語言）
│   ├── themes/             # 主題定義（5 套內建主題）
│   ├── styles/             # 全域樣式和 CSS 變數
│   ├── types/              # TypeScript 型別定義
│   ├── utils/              # 工具函式
│   └── data/               # 靜態資料
├── src-tauri/              # 後端原始碼 (Rust)
│   ├── src/
│   │   ├── commands/       # Tauri 命令（前後端通訊介面）
│   │   ├── services/       # 業務邏輯服務
│   │   ├── models/         # 資料模型
│   │   ├── plugins/        # Lua 插件執行時
│   │   └── utils/          # 工具函式
│   └── Cargo.toml
└── .github/workflows/      # CI/CD（檢查、建構、發佈）
```

[詳細目錄結構](/zh-tw/structure-full)

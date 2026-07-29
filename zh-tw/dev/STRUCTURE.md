# 專案結構

本文以 Sea Lantern 主儲存庫目前的 `main` 分支為準。目錄會隨開發調整，請以原始碼為最終依據。

## 頂層目錄

```text
SeaLantern/
├── src/             # Vue 3 前端
├── crates/          # 可重用 Rust crate
│   ├── core/        # 核心領域與程序、實例、設定邏輯
│   ├── infra/       # 檔案、網路、下載、持久化與平台能力
│   └── extra/       # 插件、市場、更新、連線等擴充能力
├── server/          # 伺服器應用服務與 RPC 邊界
├── src-tauri/       # Tauri 桌面宿主
├── docker-entry/    # Docker/headless 入口
├── docker/          # Docker 建置資源
├── docs/            # 與原始碼同步的開發文件和 Lua API
├── scripts/         # 版本與 NOTICE 等維護腳本
├── packaging/       # Linux 等平台的封裝檔案
├── Cargo.toml       # Rust workspace 設定
├── package.json     # 前端依賴與儲存庫腳本
└── pnpm-lock.yaml   # pnpm 鎖定檔
```

## 前端

`src/` 包含 Vue 3、TypeScript、Pinia 和 Vue Router 前端：

| 目錄 | 職責 |
| --- | --- |
| `src/api/` | 呼叫宿主能力的 API 封裝 |
| `src/views/` | 首頁、建立、控制台、設定、玩家、連線、備份等頁面 |
| `src/components/` | 通用元件和各頁面子元件 |
| `src/stores/` | Pinia 狀態管理 |
| `src/router/` | 頁面路由 |
| `src/language/` | 多語言資源與執行階段 |
| `src/themes/`、`src/styles/` | 主題定義和全域/頁面樣式 |
| `src/composables/` | 可重用 Vue 組合式邏輯 |
| `src/types/`、`src/utils/` | 型別和通用工具 |

修改頁面時，通常要同時檢查對應的 view、component、store、API 和語言鍵。

## Rust workspace

根 `Cargo.toml` 目前包含以下成員：

| 成員 | 職責 |
| --- | --- |
| `crates/core` | 程序控制、伺服器實例、設定與供應流程等核心規則 |
| `crates/infra` | 歸檔、下載、檔案系統、網路、持久化和平台實作 |
| `crates/extra` | Lua 插件、設定、下載連結、市場、更新及 P2P 連線 |
| `server` | 面向宿主的應用服務和 RPC 契約 |
| `src-tauri` | 桌面應用入口、Tauri 插件與視窗宿主 |
| `docker-entry` | 容器執行入口 |

依賴方向應儘量保持為宿主依賴應用層與共享 crate；通用業務規則不要直接放進 UI 或平台入口。

## 常用入口

| 修改內容 | 優先查看 |
| --- | --- |
| 頁面與導覽 | `src/router/index.ts`、`src/views/`、`src/components/layout/` |
| 前後端呼叫 | `src/api/`、`server/src/rpc/` |
| 伺服器實例與程序 | `crates/core/src/instance/`、`crates/core/src/process/` |
| 下載與檔案操作 | `crates/infra/src/download/`、`crates/infra/src/fs/` |
| Sea Lantern 插件 | `crates/extra/src/app_plugin/`、`src/components/plugin/` |
| 連線隧道 | `crates/extra/src/online/`、`src/views/TunnelView.vue` |
| 桌面宿主 | `src-tauri/src/`、`src-tauri/tauri.conf.json` |
| Docker 入口 | `docker-entry/`、`docker/` |

## 常用命令

```bash
pnpm install
pnpm dev
pnpm tauri dev
pnpm docker:dev
```

完整環境與檢查命令見[環境設定](/zh-tw/dev/environment)和[貢獻指南](/zh-tw/dev/CONTRIBUTING)。

# 專案結構

Sea Lantern 是 Tauri 2 + Vue 3 + Rust 專案。當前倉庫按前端、後端 Rust workspace、共享資料、腳本和與原始碼綁定的文件拆分。

## 頂層目錄

```text
SeaLantern/
├── frontend/       # Vue 3 前端、頁面、狀態、語言、主題和 Tauri 呼叫封裝
├── backend/        # Rust workspace，包含共享 crate、Tauri 宿主和 Docker/headless 入口
├── shared/         # 前後端共享靜態資料，如插件權限、Trusted catalog、伺服端分類
├── docs/           # 和原始碼強綁定的技術文件、插件 API、CLI、設計記錄
├── scripts/        # Tauri 啟動、版本、notice、Docker smoke 等輔助腳本
├── docker/         # Docker 相關檔案
├── packaging/      # 桌面發行包相關檔案
├── panic-log/      # 崩潰日誌目錄占位
├── Cargo.toml      # 後端 Rust workspace 根清單
├── package.json    # 倉庫級腳本和前端工具入口
└── pnpm-lock.yaml  # pnpm 鎖定檔
```

## 前端結構

`frontend/` 負責介面、狀態、語言、主題，以及呼叫 Tauri 後端命令。

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

### 前端常用入口

| 改動內容 | 優先查看 |
| --- | --- |
| Tauri 命令呼叫 | `frontend/src/api/` |
| 路由和頁面入口 | `frontend/src/router/`、`frontend/src/pages/`、`frontend/src/views/` |
| 頁面元件 | `frontend/src/components/`、對應頁面目錄 |
| 應用外殼、導航、佈局 | `frontend/src/layout/`、`frontend/src/shell/`、`frontend/src/components/shell/`、`frontend/src/NextRoot.vue` |
| 跨頁面業務流程 | `frontend/src/features/`、`frontend/src/services/` |
| 可複用 Vue 邏輯 | `frontend/src/composables/` |
| 全域狀態 | `frontend/src/stores/` |
| 插件狀態拆分 | `frontend/src/stores/plugin/` |
| 多語言文案 | `frontend/src/language/` |
| 主題和視覺變數 | `frontend/src/themes/`、`frontend/src/styles/` |
| 型別和契約 | `frontend/src/types/`、`frontend/src/contracts/` |

### 頁面目錄

`frontend/src/pages/` 目前按業務域組織：

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

單個伺服器內部頁面在 `server-instance/` 下繼續拆分，例如 `console/`、`config/`、`players/`、`extensions/`。

## 後端結構

`backend/` 是 Rust workspace。根目錄的 `Cargo.toml` 管理所有 crate。

```text
backend/
├── runtime/
├── event/
├── i18n/
├── server-config/
├── docker/
├── server-local-setup/
├── server-installer/
├── server-startup-scan/
├── java-installer/
├── server-log/
├── server-plugin/
├── plugin-trust/
├── lua-runtime/
├── server-download-links/
├── starter-links/
├── update/
├── tauri-host/
├── docker-entry/
└── vendor/
```

### 共享 crate 分工

| crate | 職責 |
| --- | --- |
| `runtime` | 執行模式、HTTP/headless、panic report 等執行時工具 |
| `event` | 應用事件和伺服器事件模型 |
| `i18n` | 後端語言資源 |
| `server-config` | 啟動配置、JVM 參數、CPU policy、`server.properties` 規則 |
| `docker` | Docker preview 和 Docker 規則 |
| `server-local-setup` | 本地伺服器接管、啟動模式推斷、本地啟動預覽輔助 |
| `server-installer` | 伺服端安裝和核心識別 |
| `server-startup-scan` | 已有伺服器目錄掃描 |
| `java-installer` | Java 下載和安裝 |
| `server-log` | 伺服器日誌持久化和讀取 |
| `server-plugin` | Minecraft 伺服器插件檔案掃描和管理規則 |
| `plugin-trust` | Sea Lantern 插件權限歸一化、信任和審查規則 |
| `lua-runtime` | Lua 執行時邊界 |
| `server-download-links` | 伺服端下載連結解析 |
| `starter-links` | Starter 連結 |
| `update` | 更新檢查、下載和安裝流程 |

純規則優先放進對應共享 crate。`tauri-host` 負責命令暴露、服務編排、持久化、執行時狀態和宿主整合。

## Tauri 宿主

`backend/tauri-host/` 是桌面和 headless 宿主。

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

### 命令層

`backend/tauri-host/src/commands/` 是 Tauri 命令實作：

| 目錄 | 職責 |
| --- | --- |
| `app/` | 應用、設定、系統、i18n、宿主命令 |
| `downloads/` | 下載、Java、Mod 下載 |
| `online/` | 聯機、Join ID、隧道 |
| `plugins/` | Sea Lantern Lua 插件管理、市場、啟停、snapshot |
| `server/` | 伺服器管理、配置、玩家、伺服端插件檔案 |
| `update/` | 更新檢查、下載、安裝 |

新增或修改命令時，至少同時檢查：

1. `frontend/src/api/*.ts`
2. `backend/tauri-host/src/runtime/command_catalog.rs`
3. `backend/tauri-host/src/commands/`

命令名、參數、返回結構、錯誤語意和事件欄位都是前端可見契約。

### 服務層

`backend/tauri-host/src/services/` 負責宿主服務編排：

| 目錄 | 職責 |
| --- | --- |
| `server/` | 伺服器管理、執行控制、啟動、插件檔案、執行時適配 |
| `download/` | 下載管理、Java 安裝 |
| `online/` | 線上服務和隧道 |
| `java_detector/` | Java 偵測 |

伺服器啟動相關邏輯要特別注意本地 jar、starter、bat、sh、ps1、custom start、Docker 啟動是不同路徑。preview 和真實執行需要一致時，優先共享 core 層歸一化結果。

## 插件系統

Sea Lantern Lua 插件系統位於：

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

前端對應位置：

- `frontend/src/api/plugin.ts`
- `frontend/src/pages/plugins/`
- `frontend/src/components/plugin/`
- `frontend/src/components/plugins/`
- `frontend/src/stores/plugin/`

注意區分兩套插件：

| 類型 | 前端入口 | 後端入口 |
| --- | --- | --- |
| Sea Lantern Lua 插件系統 | `frontend/src/api/plugin.ts` | `backend/tauri-host/src/plugins/`、`backend/tauri-host/src/commands/plugins/` |
| Minecraft 伺服端插件檔案 | `frontend/src/api/mcs_plugins.ts` | `backend/server-plugin/`、`backend/tauri-host/src/commands/server/` |

插件 UI snapshot、sidebar、context menu、component mirror、permission log 都是插件可見行為，改動前要確認相容性。

## 共享資料和文件

`shared/` 存放前後端都會關心的靜態資料：

- `plugin-permissions.json`
- `plugin-trusted-catalog.json`
- `server-core-taxonomy.json`
- `startup-modes.json`

`docs/` 保留和原始碼同步強相關的技術文件：

- `docs/plugin/`：Sea Lantern Lua 插件執行時 API
- `docs/CLI-Guide.md`：CLI 使用說明
- `docs/design/`：設計記錄

面向使用者的總覽、教學和貢獻說明優先放到文件站，不繼續堆進倉庫內 `docs/`。

## 腳本

`scripts/` 目前包含：

- `tauri.mjs`：倉庫級 Tauri 啟動邏輯
- `version.mjs`：版本輔助
- `notice.mjs`：第三方聲明輔助
- `cli-docker-smoke.ps1`：Docker/CLI smoke 檢查

預設桌面開發路徑是：

```bash
pnpm --dir frontend run tauri:dev
```

只啟動前端：

```bash
pnpm --dir frontend run dev
```

只啟動 HTTP / Docker 後端：

```bash
pnpm --dir frontend run dev:http:backend
```

## 常見改動路線

| 要改什麼 | 先看哪裡 |
| --- | --- |
| 新增前端頁面 | `frontend/src/router/`、`frontend/src/pages/`、`frontend/src/router/pageMeta.ts` |
| 新增使用者可見文案 | `frontend/src/language/` |
| 新增 Tauri 呼叫 | `frontend/src/api/`、`backend/tauri-host/src/runtime/command_catalog.rs`、`backend/tauri-host/src/commands/` |
| 伺服器建立、匯入、啟動 | `frontend/src/pages/servers/`、`backend/server-config/`、`backend/server-local-setup/`、`backend/tauri-host/src/services/server/` |
| Docker 啟動規則 | `backend/docker/`、`backend/tauri-host/src/services/server/runtime/docker_itzg/` |
| 設定編輯 | `frontend/src/features/config-editor/`、`frontend/src/pages/server-instance/config/`、`backend/server-config/` |
| 控制台和日誌 | `frontend/src/stores/consoleStore.ts`、`backend/server-log/`、`backend/tauri-host` 日誌讀取邏輯 |
| 玩家、白名單、封禁、OP | `frontend/src/api/player.ts`、`frontend/src/pages/server-instance/players/`、`backend/tauri-host/src/commands/server/` |
| 下載任務、Java、核心下載 | `frontend/src/api/downloader.ts`、`frontend/src/api/java.ts`、`backend/java-installer/`、`backend/server-installer/` |
| 更新 | `frontend/src/api/update.ts`、`frontend/src/stores/updateStore.ts`、`backend/update/` |
| 認證入口 | `frontend/src/services/auth*.ts`、`frontend/src/stores/auth*.ts`、`frontend/src/router/authRoute.ts` |

## 檢查命令

前端：

```bash
pnpm --dir frontend run lint
pnpm --dir frontend run build:check
pnpm --dir frontend run fmt:check
```

後端：

```bash
cargo fmt --all -- --check
cargo check --workspace
cargo clippy --workspace -- -D warnings
```

語言資源：

```bash
pnpm --dir frontend run i18n:check
pnpm --dir frontend run i18n:sync
```

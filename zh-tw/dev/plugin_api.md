# 插件 API

Sea Lantern 插件執行時基於 Lua。插件透過全域 `sl` 命名空間存取宿主提供的能力。

詳細介面定義、參數說明和限制，以主倉庫 `docs/lua-api/` 為準。

:::warning 注意
本文中的插件指 Sea Lantern Lua 插件，不包含 Minecraft 伺服器 Bukkit / Spigot / Paper 插件檔案。
伺服器插件檔案管理屬於獨立模組。
:::

## 執行時模型

- 插件執行時會建立全域 `sl` 表。
- 插件能力由 `manifest.json` 中宣告的 `permissions` 控制。
- 未授權模組呼叫時會回傳權限錯誤。
- 插件執行在受限 Lua 環境中，只開放必要標準函式庫。
- `sl.i18n` 預設可用，其餘模組需要對應權限。

## API 模組

| 模組 | 權限 | 說明 |
| --- | --- | --- |
| `sl.log` | `log` | 輸出插件日誌 |
| `sl.storage` | `storage` | 插件私有鍵值儲存 |
| `sl.fs` | `fs.*` | 沙箱檔案系統操作 |
| `sl.api` | `api` | 插件 API 註冊與呼叫 |
| `sl.ui` | `ui.*` | UI 注入、Toast、選單和元件橋接 |
| `sl.element` | `element` | 頁面元素查詢與操作 |
| `sl.server` | `server` | 伺服器資訊和日誌存取 |
| `sl.console` | `console` | 控制台命令和狀態存取 |
| `sl.system` | `system` | 系統及應用資訊查詢 |
| `sl.http` | `network` | 受限 HTTP 請求 |
| `sl.process` | `process.*` | 執行插件目錄內程式 |
| `sl.plugins` | `plugins.*` | 存取其他插件資源 |
| `sl.i18n` | 無 | 國際化介面 |

## 基礎呼叫

```lua
sl.log.info("plugin loaded")

local locale = sl.i18n.getLocale()
local title = sl.i18n.t("common.app_name")

sl.storage.set("enabled", true)
local enabled = sl.storage.get("enabled")

local servers = sl.server.list()
sl.console.send("server-id", "say Hello")
```

## 檔案系統

檔案系統採用 scope 隔離：

```lua
local text = sl.fs.read("data", "config.txt")
sl.fs.write("data", "output.txt", "Hello")
```

支援的 scope：

| Scope | 說明 |
| --- | --- |
| `data` | 插件私有資料目錄 |
| `server` | 目前伺服器目錄 |
| `global` | 全域共享目錄 |

權限：

| 權限 | 說明 |
| --- | --- |
| `fs.<scope>.read` | 讀取檔案 |
| `fs.<scope>.write` | 寫入檔案 |
| `fs.<scope>.list` | 列出目錄 |
| `fs.<scope>.meta` | 查詢檔案資訊 |
| `fs.<scope>.delete` | 刪除檔案 |
| `fs.<scope>.transfer` | 移動、複製、重新命名 |

舊權限 `fs` 會轉換為 `fs.data`。

## 程序權限

| 權限 | 說明 |
| --- | --- |
| `execute_program` | 完整程序能力 |
| `process.exec` | 執行程式 |
| `process.inspect` | 查詢背景程序 |
| `process.output.read` | 讀取輸出 |
| `process.kill` | 終止程序 |

`sl.process.exec()` 要求程式路徑在 `manifest.json` 的 `programs` 中宣告，且程式和工作目錄必須位於插件目錄內。

## 安全限制

- 檔案系統拒絕絕對路徑、路徑越界、符號連結和 reparse point。
- 虛擬路徑不會暴露宿主真實路徑。
- 刪除操作不會遞迴刪除非空目錄。
- HTTP 僅支援 `http` 和 `https`，禁止存取本機和私有網路位址。
- HTTP 請求不自動跟隨重定向，回應內容有大小限制。
- 控制台命令會經過狀態和安全規則校驗。
- 儲存介面適用於小型結構化資料。

## UI 與元素操作

`sl.ui` 用於向宿主註冊 UI 行為，包括：

- HTML / CSS 注入；
- Toast 通知；
- 側邊欄；
- 上下文選單；
- 元件橋接。

`sl.element` 用於查詢和操作既有頁面元素。

元件橋接需要額外權限：

- `ui.component.read`
- `ui.component.write`
- `ui.component.proxy`
- `ui.component.create`

## 國際化

插件可以讀取宿主語言，也可以註冊插件專屬翻譯：

```lua
sl.i18n.registerLocale("zh-TW", "繁體中文")
sl.i18n.addTranslations("zh-TW", {
  title = "範例插件"
})
```

插件翻譯統一進入 `plugins.<plugin_id>.*` 命名空間。

## Trusted 插件

目前 Trusted 插件機制包括：

- 人工審核；
- 內建 trusted catalog；
- 套件 hash 校驗；
- 權限上限校驗；
- 啟用時授權。

目前機制不等同於完整數位簽章體系。

高風險權限包括：

- `execute_program`
- `plugin_folder_access`
- `plugins.write`
- `ui.component.proxy`

此類插件需要額外審核和使用者確認。

## 開發位置

| 內容 | 路徑 |
| --- | --- |
| 插件 API 文件 | `docs/lua-api/*.md` |
| Lua 執行時 | `crates/extra/src/app_plugin/engine/` |
| 載入、清單與管理 | `crates/extra/src/app_plugin/` |
| 前端 API | `src/api/plugin.ts` |
| 插件 UI | `src/components/plugin/` |

修改插件 API 時，需要同步檢查執行時實作、前端封裝、插件 UI 以及文件。插件 UI、權限行為和資料格式都屬於相容性介面。

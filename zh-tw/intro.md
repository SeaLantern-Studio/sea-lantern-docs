# 專案簡介

Sea Lantern（海晶燈）是一個輕量化的 Minecraft 伺服器管理工具，基於 Tauri 2 + Rust + Vue 3 建構。

## 特性

- **即時控制台** — 即時查看伺服器日誌，直接輸入命令，支援命令歷史
- **圖形化配置** — server.properties 視覺化編輯，分類展示，告別手改檔案
- **玩家管理** — 白名單、封禁、OP 一鍵操作
- **插件系統** — 基於 Lua 腳本的插件擴展，支援自訂 UI 元件和右鍵選單
- **主題系統** — 5 套內建主題（預設、午夜、海洋、玫瑰、日落），支援明暗模式和亞克力效果
- **多語言支援** — 內建 12 種語言（中文、英語、日語、韓語、法語、德語、西班牙語、俄語、越南語等）
- **Java 管理** — 自動偵測已安裝的 Java，支援一鍵下載安裝
- **Mod 管理** — 伺服端 Mod/插件的檢視與管理
- **安全退出** — 關閉軟體時自動停止伺服器，不會遺失存檔
- **自動更新** — 檢查新版本，一鍵下載更新
- **跨平台** — 支援 Windows、macOS、Linux（含 Arch Linux AUR）

## 技術棧

- **前端**: Vue 3 + TypeScript + Vite + Pinia
- **後端**: Rust + Tauri 2
- **樣式**: CSS Variables 設計系統 + 主題引擎
- **圖表**: ECharts
- **套件管理**: pnpm
- **程式碼檢查**: oxlint + oxfmt

沒有 Electron，沒有 Node 後端，沒有 Webpack。啟動快，體積小，記憶體省。

## 交流

QQ 交流群：**293748695**，歡迎加入討論！

## 開源協議

[GNU General Public License v3.0](https://github.com/SeaLantern-Studio/SeaLantern/blob/main/LICENSE)

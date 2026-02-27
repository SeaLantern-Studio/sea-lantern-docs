<script setup>
import FeatureShowcase from '../.vitepress/theme/components/FeatureShowcase.vue'

const featureItems = [
  { title: '即時控制台', desc: '即時查看日誌，直接輸入命令，並支援命令歷史。', note: '適合排查啟動錯誤與日常維運，不需頻繁切換外部終端。' },
  { title: '圖形化配置', desc: 'server.properties 視覺化編輯，依分類整理，減少手動改檔。', note: '常見參數可快速定位；需重啟生效的項目仍遵循伺服端規則。' },
  { title: '玩家管理', desc: '白名單、封禁、OP 操作集中在同一入口。', note: '線上狀態與權限操作集中呈現，降低手動記憶指令成本。' },
  { title: '插件系統', desc: '基於 Lua 腳本擴展，支援自訂 UI 元件、右鍵選單與插件市場。', note: 'v1.0.0 持續優化權限面板與市場狀態保留，使用流程更穩定。' },
  { title: '建立流程 2.0', desc: '支援 JAR/腳本/既有伺服器匯入，智慧偵測開服方式並可自訂命令。', note: '可在建立階段自動安裝整合包，減少首次開服手動操作。' },
  { title: '主題系統', desc: '內建 5 套主題，支援明暗模式；Windows 支援亞克力效果。', note: '切換主題不改變功能布局，重點在可讀性與視覺風格。' },
  { title: '多語言支援', desc: '內建 10 種語言，包含中文、英語、日語、韓語等。', note: '支援執行中切換語言，介面與文件術語盡量保持一致。' },
  { title: 'Java 管理', desc: '自動偵測已安裝 Java，並支援一鍵下載安裝。', note: 'v1.0.0 擴充常見安裝路徑掃描，降低已安裝卻未識別的情況。' },
  { title: 'Mod 管理', desc: '檢視伺服端已安裝的 Mod/插件，並提供基礎管理能力。', note: '目前以本地檢視與基礎維護為主，方便先排查再調整。' },
  { title: '安全退出', desc: '關閉軟體時自動停止伺服器，降低存檔損壞風險。', note: '避免直接強制結束行程，降低世界與玩家資料異常機率。' },
  { title: '自動更新', desc: '檢查新版本並跳轉下載頁面（Arch Linux 使用 AUR 更新）。', note: '桌面端以下載引導為主，不會在背景靜默覆蓋你的安裝。' },
  { title: '跨平台', desc: '支援 Windows、macOS、Linux（含 Arch Linux AUR）。', note: '不同平台能力會有差異，文件會單獨標示平台特定行為。' },
]
</script>

# 專案簡介

Sea Lantern（海晶燈）是一個**輕量化**的 Minecraft 伺服器管理工具。  
基於 **Tauri 2 + Rust + Vue 3** 建構。

## 特性

<FeatureShowcase
  :items="featureItems"
  panel-title="功能說明"
/>

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

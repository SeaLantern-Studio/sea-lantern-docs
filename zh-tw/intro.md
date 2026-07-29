<script setup>
import FeatureShowcase from '../.vitepress/theme/components/FeatureShowcase.vue'

const featureItems = [
  { title: '伺服器管理', desc: '集中管理多個 Minecraft 伺服器及其執行狀態。' },
  { title: '伺服器建立', desc: '支援 JAR、既有伺服器和啟動腳本匯入，並可自訂啟動命令。' },
  { title: '核心下載', desc: '在應用內查找並下載常用 Minecraft 伺服端核心。' },
  { title: '即時控制台', desc: '即時查看日誌、傳送命令並保留命令歷史。' },
  { title: '設定管理', desc: '視覺化編輯啟動設定和 server.properties，支援搜尋與差異比較。' },
  { title: '玩家管理', desc: '管理線上玩家、白名單、封禁和 OP 權限。' },
  { title: 'P2P 連線', desc: '無需公網 IP，建立連線隧道並產生連線憑證。' },
  { title: '插件系統', desc: '透過 Lua 插件擴充頁面、元件、選單和應用能力。' },
  { title: '伺服端擴充', desc: '查看和管理伺服器中的 Mod 與插件檔案。' },
  { title: 'Java 管理', desc: '自動偵測本機 Java，並支援按需下載安裝。' },
  { title: '個人化', desc: '提供多套主題、明暗模式和 Windows 亞克力效果。' },
  { title: '多語言', desc: '內建 10 種語言，支援執行階段切換。' },
]
</script>

# 專案簡介

Sea Lantern（海晶燈）是一個**輕量化**的 Minecraft 伺服器管理工具。

## 特性

<FeatureShowcase
  :items="featureItems"
  panel-title="功能說明"
/>

## 技術棧

- **前端**: Vue 3 + TypeScript + Vite
- **後端**: Rust + Tauri 2
- **通訊**: Tauri invoke
- **Docker**: itzg/minecraft-server

沒有 Electron，沒有 Node 後端，沒有 Webpack。啟動快，體積小，記憶體省。

> 使用系統 Webview 渲染。

## 社群

如果你在使用中遇到問題，或想參與討論，可以透過以下方式聯絡我們：

- QQ 一群：**293748695**
- QQ 二群：**1085823754**

## 開源協議

[GNU Affero General Public License v3.0](https://github.com/SeaLantern-Studio/SeaLantern/blob/main/LICENSE)

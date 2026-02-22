# 更新日誌

[GitHub Releases](https://github.com/SeaLantern-Studio/SeaLantern/releases)

## v0.6.5 <Badge type="tip" text="最新" />

[GitHub Release](https://github.com/SeaLantern-Studio/SeaLantern/releases/tag/sea-lantern-v0.6.5)

> 2026-02-20

### 技術改進
- 新增組合式函式：useTabIndicator、useAsync、useMessage
- 伺服器狀態刷新改為並行 Promise.all
- 記憶體/連接埠輸入框改進驗證邏輯
- 文字顏色統一使用 CSS 變數

### 問題修復
- 修復 Arch Linux 更新問題
- 修復語言切換時 Tab 指示器位置不更新
- 修復側邊欄展開/收起狀態顯示邏輯
- 修復 0% 下載進度顯示異常
- 修復視窗控制按鈕圖示方向問題

### 文檔與工程
- 新增雙語 Pull Request 範本
- 重構專案結構文檔（中英文）
- 新增 Star History 圖表和貢獻者牆
- 完善 AUR 自動發布工作流程

---

## v0.6.2

[GitHub Release](https://github.com/SeaLantern-Studio/SeaLantern/releases/tag/sea-lantern-v0.6.2)

> 2026-02-17

### 新功能
- 重構設定頁面並新增自動儲存功能
- 新增 Arch Linux package files 支援
- 新增多語言支援：日語、西班牙語、德語、俄語、越南語、英式英語、澳洲英語等
- 新增 i18n 梗體中文支援
- 優化 CI 檢查邏輯，僅按需執行

### 介面優化
- 優化首頁 UI 佈局，調整開啟資料夾的互動邏輯
- 增強暗色模式對比度、新增標籤指示器動畫
- 優化「一言」功能載入邏輯
- 優化應用關閉行為的事件處理邏輯

### 技術改進
- 重構控制台與設定頁面元件結構
- 重寫 pkg.tar.gz 包建置邏輯
- 修復 Arch 桌面環境下檔案圖示顯示異常

---

## v0.6.0

[GitHub Release](https://github.com/SeaLantern-Studio/SeaLantern/releases/tag/sea-lantern-v0.6.0)

> 2026-02-16

### 新功能
- 系統匣選單與應用唯一實例化
- 原生色彩主題功能
- bat/sh 啟動指令碼支援
- 色彩編輯器與色彩選擇器
- 自訂快捷指令
- 貢獻者資訊展示

### 修復與優化
- 優化啟動穩定性，修復 TypeScript/執行時問題
- 修復多執行緒下載器問題
- 修復符號連結導致 Java 偵測重複
- 修復 macOS 和 Linux 磁碟空間計算錯誤
- 修復離線/停服/封禁重連等狀態解析問題
- 重構自動更新流程
- 修復大量國際化問題

---

## v0.5.0

[GitHub Release](https://github.com/SeaLantern-Studio/SeaLantern/releases/tag/sea-lantern-v0.5.0)

> 2026-02-14

大量更新，感謝每一位貢獻者。

---

## v0.4.1

[GitHub Release](https://github.com/SeaLantern-Studio/SeaLantern/releases/tag/v0.4.1)

> 2026-02-14

- 優化 Rust 編譯設定，啟用 LTO 和二進位大小優化
- 精簡 Tokio 依賴，減少不必要的功能模組
- 新增前端程式碼分割，優化載入效能

---

## v0.4.0

[GitHub Release](https://github.com/SeaLantern-Studio/SeaLantern/releases/tag/v0.4.0)

> 2026-02-14

- 暗色模式支援
- Windows 壓克力毛玻璃效果
- 字型選擇功能
- Java 搜尋優化（Windows 登錄檔）
- Linux Wayland 白屏修復
- UI 元件美化

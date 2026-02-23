# 快速開始

## 系統需求

| 項目 | 最低需求 |
|------|---------|
| 作業系統 | Windows 10+、macOS 10.15+、Linux (glibc 2.31+) |
| Java | Java 8+（用於執行 Minecraft 伺服端） |
| 記憶體 | 建議 4GB 以上（Minecraft 伺服端需要額外記憶體） |

::: tip Windows 版本說明
Sea Lantern 使用 WebView2 執行環境，**要求 Windows 10（版本 1909 及以上）或 Windows 11**。Windows 7/8/8.1 使用者請參考 [常見問題 - 舊版 Windows](/zh-tw/faq#舊版-windows-執行方案) 中的替代方案。
:::

## 1. 下載安裝

前往 [下載頁面](/zh-tw/download) 取得適合您作業系統的安裝包，雙擊執行即可完成安裝。

Ubuntu 使用者也可使用 PPA 安裝（見下載頁 Linux 小節）。

Arch Linux 使用者可透過 AUR 安裝（見下載頁 Linux 小節）。

## 2. 取得伺服端核心

您需要一個 Minecraft 伺服端 JAR 檔案來建立伺服器。如果您還沒有，請參考 [伺服端核心取得](/zh-tw/server-jar) 頁面下載。

::: tip 推薦
對於大多數玩家，推薦使用 [Paper](https://papermc.io/downloads/paper) — 效能優秀、插件生態豐富。
:::

## 3. 設定 Java

啟動 Sea Lantern 後，軟體會**自動偵測**系統中已安裝的 Java。如果沒有合適的版本，可以使用內建的 Java 下載器一鍵安裝。

::: info
Minecraft 不同版本對 Java 的要求不同：
- 1.16.5 及以下 → Java 8 或 Java 11
- 1.17 ~ 1.20.4 → Java 17
- 1.20.5+ → Java 21
:::

## 4. 建立伺服器

1. 點擊「建立伺服器」按鈕
2. 匯入您下載的伺服端 JAR 檔案
3. 選擇 Java 執行環境版本
4. 為您的伺服器命名
5. 首次啟動時需要同意 Minecraft EULA

## 5. 啟動伺服器

點擊啟動按鈕，等待控制台顯示 `Done!` 即表示伺服器啟動成功。此時您可以在 Minecraft 中透過 `localhost` 連線到您的伺服器。

---

接下來，查看 [使用教學](/zh-tw/tutorial) 了解更多操作細節，或瀏覽 [功能總覽](/zh-tw/features) 了解所有功能。

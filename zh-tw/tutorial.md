# 使用教學

本頁詳細介紹 Sea Lantern 的各項功能使用方法。

## 建立第一個伺服器

### 匯入來源（JAR / 現有伺服器 / 啟動腳本）

1. 點擊主畫面的「建立伺服器」按鈕
2. 在引導畫面選擇匯入來源：伺服器端 JAR、現有伺服器目錄或啟動腳本（`bat` / `sh`）
3. 如果還沒有伺服器端，請參考 [核心獲取](/zh/server-jar)

### 啟動方式辨識與自訂指令

- Sea Lantern 會根據匯入內容智慧辨識啟動方式
- 當辨識結果不符合預期時，你可以手動切換並填寫自訂開服指令
- 建立流程支援整合包自動安裝，減少首次開服的手動步驟

### 選擇 Java 版本

完成匯入後，Sea Lantern 會列出系統中已偵測到的 Java 版本。選擇與你的 Minecraft 版本匹配的 Java：

| Minecraft 版本 | 推薦 Java |
|---------------|----------|
| 1.16.5 及以下 | Java 8 / 11 |
| 1.17 ~ 1.20.4 | Java 17 |
| 1.20.5+ | Java 21 |

::: tip
如果清單中沒有合適的 Java，點擊「下載 Java」按鈕，Sea Lantern 會自動下載並安裝所需版本。
:::

### 命名與配置

為你的伺服器取一個名字。你也可以在這裡調整初始記憶體分配等參數，但這些都可以稍後修改。

### 同意 EULA

首次啟動時，Sea Lantern 會提示你同意 Minecraft EULA。確認後伺服器才能正常執行。

[官方EULA解釋](https://www.minecraft.net/zh-hans/eula)

## 控制台

控制台是 Sea Lantern 的核心畫面，提供以下功能：

### 查看日誌

伺服器執行時的所有輸出都會即時顯示在控制台中，包括：
- 伺服器啟動/關閉資訊
- 玩家加入/離開
- 聊天訊息
- 錯誤和警告資訊

### 輸入指令

在控制台底部的輸入框中輸入 Minecraft 伺服器指令（無需 `/` 前綴），按 Enter 執行。

常用指令範例：
```
say 歡迎來到伺服器！
op Steve
whitelist add Alex
stop
```

### 指令歷史

按 `↑` / `↓` 箭頭鍵可以瀏覽之前執行過的指令，方便重複操作。

### 快捷指令面板

控制台工具列提供常用操作的快捷按鈕，如安全停止伺服器、重啟等。

## server.properties 配置

Sea Lantern 提供了圖形化的 server.properties 編輯器，讓你無需手動修改檔案。

### 常用配置項

| 配置項 | 說明 | 預設值 |
|-------|------|-------|
| `server-port` | 伺服器連接埠 | 25565 |
| `max-players` | 最大玩家數 | 20 |
| `difficulty` | 遊戲難度 | easy |
| `gamemode` | 預設遊戲模式 | survival |
| `motd` | 伺服器簡介（顯示在伺服器列表） | A Minecraft Server |
| `online-mode` | 正版驗證 | true |
| `pvp` | 是否允許 PVP | true |
| `white-list` | 是否啟用白名單 | false |

### 搜尋與篩選

配置項支援分類瀏覽和關鍵字搜尋，可以快速定位你要修改的選項。

::: warning
修改配置後需要**重啟伺服器**才能生效。
:::

## 玩家管理

### 白名單

啟用白名單後，只有白名單中的玩家才能加入伺服器。

- 添加玩家：輸入玩家名點擊添加，或在控制台執行 `whitelist add 玩家名`
- 移除玩家：在清單中點擊移除按鈕
- 開關白名單：在 server.properties 中設定 `white-list` 為 `true` 或 `false`

### 封鎖管理

- 封鎖玩家：在玩家清單中點擊封鎖，或執行 `ban 玩家名`
- 解除封鎖：在封鎖清單中點擊解除封鎖，或執行 `pardon 玩家名`
- IP 封鎖：執行 `ban-ip IP位址`

### OP 權限

OP（管理員）擁有伺服器的最高權限。

- 給予 OP：執行 `op 玩家名`
- 移除 OP：執行 `deop 玩家名`

::: warning
謹慎給予 OP 權限，擁有 OP 的玩家可以執行任何伺服器指令。
:::

## 插件安裝

::: info
插件功能僅適用於 Paper / Spigot 等支援插件的伺服器端。Vanilla、Forge 和 Fabric 伺服器端不支援 Bukkit 插件。
:::

### 獲取插件

常見的插件下載管道：

- [SpigotMC](https://www.spigotmc.org/resources/) — 最大的 Spigot 插件社群，需要註冊帳戶（免費），注意檢查插件的相容性版本和評分
- [Modrinth](https://modrinth.com/plugins) — 現代化的插件/Mod 平台
- [Hangar](https://hangar.papermc.io/) — PaperMC 官方插件平台
- [Polymart](https://polymart.org/) — 類似 SpigotMC，介面更現代化
- [Bukkit](https://dev.bukkit.org/) — 老牌插件平台
- [GitHub](https://github.com) — 搜尋開源插件專案，通常在 Releases 部分提供下載

### 安裝步驟

1. **準備工作**
   - 確保伺服器已停止（如果正在執行）
   - 找到伺服器目錄中的 `plugins` 資料夾
   - 如果沒有 `plugins` 資料夾，可手動建立一個

2. **放置插件檔案**
   - 將下載的插件 `.jar` 檔案複製到 `plugins` 資料夾中
   - 確保插件檔案名不包含特殊字元或空格
   - 建議每次只安裝一個插件以避免衝突

3. **配置插件**
   - 啟動伺服器，插件會自動產生設定檔
   - 在 `plugins` 資料夾中找到插件的設定資料夾
   - 根據需要編輯設定檔（通常是 `config.yml`）

4. **重啟伺服器**
   - 重啟伺服器以使插件生效
   - 檢查控制台日誌確認插件載入成功
   - 使用 `plugins` 指令查看已載入的插件清單

### 常用插件推薦

**管理類插件：**

| 插件 | 功能 | 連結 |
|------|------|------|
| EssentialsX | 基礎指令集（傳送、家、經濟等） | <https://essentialsx.net/downloads> | 
| LuckPerms | 權限管理 |<https://luckperms.net/download>|
| WorldEdit | 強大的地圖編輯工具 |<https://modrinth.com/plugin/worldedit>|
| WorldGuard | 區域保護和權限管理 |<https://modrinth.com/plugin/worldguard/version/7.0.11>|

**伺服器安全插件：**

| 插件 | 功能 | 連結 |
|------|------|------|
| AuthMe | 提供伺服器登入密碼保護（離線伺服器必加） |<https://www.spigotmc.org/resources/authmereloaded.6269/>|

**遊戲增強類插件：**

| 插件 | 功能 | 連結 |
|------|------|------|
| CoreProtect | 方塊日誌/回滾 |<https://modrinth.com/plugin/coreprotect>|
| Multiverse-Core | 多世界管理 |<https://modrinth.com/plugin/multiverse-core>|
| DiscordSRV | 伺服器與 Discord 整合 |<https://www.spigotmc.org/resources/discordsrv.18494/>|

**經濟系統插件：**

| 插件 | 功能 | 連結 |
|------|------|------|
| Vault | 經濟/權限 API（需要搭配經濟插件使用） |<https://www.spigotmc.org/resources/vault.34315/>|
| Shopkeepers | 商人 NPC 系統 |<https://www.spigotmc.org/resources/shopkeepers.80756/>|

### 插件相容性注意事項

- 確保插件與你的伺服器端和 Minecraft 版本相容
- 檢查插件之間的依賴關係
- 避免安裝功能重複的插件
- 定期更新插件以獲得新功能和安全修復
- 備份伺服器資料後再安裝新插件

## 進階設定

### 記憶體分配

Minecraft 伺服器對記憶體需求較大，建議根據玩家數量合理分配：

| 玩家數 | 推薦記憶體 |
|-------|---------|
| 1-5 人 | 2-4 GB |
| 5-15 人 | 4-6 GB |
| 15-30 人 | 6-8 GB |
| 30+ 人 | 8 GB+ |

在 Sea Lantern 的伺服器設定中可以調整記憶體分配。

### JVM 參數

Sea Lantern 允許你自訂 JVM 啟動參數。對於 Paper 伺服器端，推薦使用 Aikar's Flags：

```
-XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200
-XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC
-XX:+AlwaysPreTouch -XX:G1NewSizePercent=30
-XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M
-XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5
-XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15
-XX:G1MixedGCLiveThresholdPercent=90
-XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32
-XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1
```

::: warning
如果你不瞭解 JVM 參數的作用，建議使用預設配置。錯誤的參數可能導致伺服器不穩定。
:::

### 安全退出

當你關閉 Sea Lantern 時，程式會自動向伺服器傳送 `stop` 指令，等待伺服器安全關閉後再退出。這可以防止存檔損壞。

::: danger
**不要**直接透過工作管理員強制關閉正在執行的伺服器，這可能導致存檔遺失或損壞。
:::

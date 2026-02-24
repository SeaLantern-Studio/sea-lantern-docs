# 常見問題

## 無法啟動伺服器

### 提示「Java 未找到」

Sea Lantern 需要 Java 來執行 Minecraft 伺服端。解決方法：

1. 在 Sea Lantern 中使用內建 Java 下載器安裝 Java
2. 或手動安裝 Java 後重啟 Sea Lantern，程式會自動偵測

### 啟動後立即當機

常見原因：
- **Java 版本不相符**：檢查您的 Java 版本是否符合要求（參考 [快速開始](/zh-tw/getting-started#_3-設定-java)）
- **記憶體不足**：嘗試增加分配的記憶體
- **JAR 檔案損壞**：重新下載伺服端 JAR
- **連接埠被佔用**：檢查 25565 連接埠是否被其他程式佔用，或在 server.properties 中更換連接埠

### 提示「EULA 未同意」

首次啟動伺服器需要同意 Minecraft EULA。Sea Lantern 會彈出提示，點擊同意即可。

## 控制台無回應

### 伺服器似乎卡住了

- 檢查控制台最後的日誌輸出，可能正在載入世界或插件
- 對於大型世界，首次載入可能需要較長時間
- 如果確實當機，使用 Sea Lantern 的安全停止按鈕關閉伺服器，然後重新啟動

### 命令沒有反應

- 確認命令格式正確（控制台中不需要 `/` 前綴）
- 確認伺服器已完全啟動（控制台顯示 `Done!`）

## 無法連線伺服器

### 本機連線

在 Minecraft 中新增伺服器，位址填寫 `localhost` 或 `127.0.0.1`。

- 確認伺服器已啟動且控制台顯示 `Done!`
- 確認用戶端版本與伺服端版本一致
- 如果修改過連接埠，位址需要加上連接埠號，如 `localhost:25566`

### 區域網路連線

其他玩家使用您的**區域網路 IP** 連線（如 `192.168.1.100:25565`）。

- 確保您和其他玩家在同一個區域網路中
- 檢查防火牆是否放行了伺服器連接埠

### 外網連線

外網玩家需要您的**公網 IP** 或網域名稱。

- 需要在路由器上設定連接埠轉發（將外部 25565 轉發到您的內網 IP）
- 或使用內網穿透工具（如 frp、ngrok）
- 檢查防火牆設定

::: warning
將伺服器暴露到公網時，建議：
- 啟用 `online-mode`（正版驗證）
- 啟用白名單
- 定期備份存檔
:::

## 舊版 Windows 執行方案

Sea Lantern 基於 Tauri 2，要求 Windows 10（版本 1909 及以上）或 Windows 11。**不支援** Windows 7、Windows 8、Windows 8.1。

對於仍在使用舊版系統的使用者，可以透過安裝 VxKex 擴展核心來補全所需執行庫，使 Sea Lantern 在舊版 Windows 上執行。此方式同樣適用於一些無法在老系統上正常執行的軟體。

### 具體步驟

1. **取得 Sea Lantern 軟體安裝包**
   - 前往 [下載頁面](/zh-tw/download) 下載 Windows 安裝包
   - 安裝完成後**先不要開啟** Sea Lantern

2. **下載並安裝 VxKex 擴展核心**
   - 此處提供的是國內的一個分支
   - VxKex-NEXT：[github.com/YuZhouRen86/VxKex-NEXT](https://github.com/YuZhouRen86/VxKex-NEXT)
   - 藍奏雲：[geekerz.lanzoue.com/b0ra5olfi](https://geekerz.lanzoue.com/b0ra5olfi)
   - 百度網盤：[pan.baidu.com/s/1w0JUk4JpoKiZQVi2LMoqwA?pwd=0000](https://pan.baidu.com/s/1w0JUk4JpoKiZQVi2LMoqwA?pwd=0000)（提取碼：0000）
   - 下載完成後直接安裝即可

3. **為 Sea Lantern 啟用 VxKex**
   - 右鍵 Sea Lantern 主程式，選擇「內容」，選擇「VxKex」分頁
   - 勾選「為此程式啟用 VxKex NEXT」和「報告其他版本的 Windows」
   - 點擊套用，確定
   - 此時 Sea Lantern 即可在 Windows 7 上正常執行
   - 除連線功能外，其他功能均正常

### 影片參考

如果不會操作請參考以下影片：[【讓 Win7 強行相容 Win10 應用？VxKex 擴展核心安裝體驗】](https://www.bilibili.com/video/BV1SedHYsE6b/)

::: danger 重要警告與免責聲明
- 使用 VxKex 等非官方方法在 Windows 7/8/8.1 上執行 Sea Lantern **並不保證能正常運作**，可能會出現各種錯誤和相容性問題
- **開發者不會接受任何透過此方法執行軟體所產生的錯誤回饋，也不會對由此產生的問題進行修復**
- 使用此類方法可能存在系統安全風險，使用者需自行承擔相關責任
- 強烈建議升級到 Windows 10/11 以獲得最佳體驗和完整功能支援
- Sea Lantern 的開發和測試均基於現代 Windows 系統，對舊版系統的相容性不在官方支援範圍內
:::

## ArchLinux 執行方案
ArchLinux 欄目可透過 AUR 安裝 Sea Lantern，安裝程式會自動處理依賴關係，確保軟體正常運行。
### Arch 上的更新問題
由於 ArchLinux 的滾動更新機制，某些依賴庫可能會進行重大更新，導致 Sea Lantern 無法正常運行。因此，若您使用的檔案系統為 BTRFS，建議在更新前使用快照功能備份系統，以便在出現問題時快速回滾至先前狀態。
1. **安裝 Sea Lantern**
- 使用 AUR 包管理器（如 yay）安裝：
```bash
yay -S sealantern
```
***注意這裡不是 sea-lantern，而是 sealantern***
- 安裝完成後即可在應用程式選單中找到 Sea Lantern 並啟動，或是使用指令列：
```bash
sea-lantern
``````

2. **更新 Sea Lantern**
- AUR 包會隨著官方版本更新而更新，使用 AUR 包管理器檢查更新：
```bash
yay -Syu sea-lantern
```
- 如果更新後出現問題，可以回滾到之前的版本：
```bash
yay -S sea-lantern-<previous_version>
``````

3. **更新失敗的解決步驟**
- 如果更新後 Sea Lantern 無法啟動，首先不要慌張，嘗試回滾到之前的版本。
- 接下來可以在 GitHub 上查看是否有其他使用者報告類似問題，或是等待開發者發佈修復版本。
- 在此期間，建議不要刪除舊版本的安裝檔，以便隨時回滾。
- 如果你有相關能力，可以嘗試自行修復問題並提交 Pull Request，協助社群更快地解決問題。
如果在使用指令列進行更新時發現仍是舊版本，可以嘗試使用指令更新套件：
```bash
yay -Syu --devel sea-lantern
``````

如果還是不行，可以嘗試刪除快取：
```bash
yay -Sc sea-lantern
``````

## 其他常見問題

### Sea Lantern 需要什麼權限？

Sea Lantern 需要存取檔案系統、網路和執行程式的權限，這些是管理 Minecraft 伺服器所必需的。

### Sea Lantern 是否安全？

Sea Lantern 是開源軟體，程式碼完全透明。它不會連線到任何第三方伺服器，所有資料都儲存在本機。

### 支援哪些 Minecraft 版本？

Sea Lantern 支援所有標準的 Minecraft 伺服器版本，只需使用對應版本的伺服器 JAR 檔案。

### 如何備份伺服器？

伺服器資料存放在伺服器目錄中，重點備份以下內容：

- `world/` 目錄（主世界存檔）
- `world_nether/` 和 `world_the_end/`（下界和終界）
- `plugins/` 目錄（插件及其設定）
- `server.properties`（伺服器設定）

::: tip
建議定期手動備份，或使用自動備份插件。
:::

### 伺服器安全性

- 啟用 `online-mode=true` 開啟正版驗證
- 使用白名單限制玩家加入
- 謹慎給予 OP 權限
- 定期更新伺服端版本以修復安全漏洞
- 不要安裝來源不明的插件

### 版本更新後不相容

- 更新伺服端前**務必備份**
- 確認所有插件都支援新版本
- 不建議跨多個大版本直接升級（如從 1.16 直接升到 1.21）
- 如果出現問題，可以回退到備份的版本

# 伺服端核心取得

Minecraft 伺服器需要一個伺服端核心（JAR 檔案）才能執行。本頁介紹常見的伺服端類型及其取得方式。

## 原版伺服端（Vanilla）

Mojang 官方提供的原版伺服端，不支援任何插件或 Mod。

- 下載位址：[Minecraft 官網](https://www.minecraft.net/zh-hant/download/server)
- 適用情境：純原版體驗，不需要任何擴展

::: warning
原版伺服端效能較低，建議僅用於少人數本地連線。
:::

## Paper（推薦）

基於 Spigot 的高效能伺服端，是目前最流行的選擇。

- 下載位址：[papermc.io](https://papermc.io/downloads/paper)
- 適用情境：需要插件、追求效能的伺服器
- 插件相容：支援 Bukkit / Spigot / Paper 插件

::: tip 為什麼推薦 Paper？
- 效能遠超原版和 Spigot，對紅石和生物 AI 有最佳化
- 社群活躍，插件相容性好
- 自帶反作弊和安全修補
- 更新速度快，新版本支援及時
:::

## Spigot

老牌的插件伺服端，Paper 的上游專案。

- 取得方式：透過 [BuildTools](https://www.spigotmc.org/wiki/buildtools/) 自行編譯
- 適用情境：需要 Spigot 專屬插件，或與 Paper 有相容性問題時

::: info
Spigot 不提供直接下載的 JAR 檔案，需要使用 BuildTools 編譯。對新手不太友善，建議優先選擇 Paper。
:::

## Forge

Mod 伺服端，用於執行 Java 版 Mod。

- 下載位址：[Forge 官網](https://files.minecraftforge.net/)
- 適用情境：需要執行 Forge Mod 的模組伺服器
- 注意：**不相容 Bukkit/Spigot 插件**

## Fabric

輕量級 Mod 載入器，啟動速度快。

- 下載位址：[Fabric 官網](https://fabricmc.net/use/installer/)
- 適用情境：需要執行 Fabric Mod 的模組伺服器
- 注意：**不相容 Bukkit/Spigot 插件**，需要使用 Fabric Mod

## Purpur

基於 Paper 的分支，提供更多設定選項。

- 下載位址：[Purpur 官網](https://purpurmc.org/downloads)
- 適用情境：需要更多自訂設定選項的伺服器
- 插件相容：支援 Bukkit / Spigot / Paper 插件

## Pumpkin（實驗性）

基於 Rust 的新型伺服器專案。

- 官網：[pumpkinmc.org](https://pumpkinmc.org/)
- 下載頁：[Pumpkin Download](https://pumpkinmc.org/download/)
- 文件：[docs.pumpkinmc.org](https://docs.pumpkinmc.org/)
- 適用情境：技術嘗鮮、測試 Rust 伺服器方案
- 發布形式：常見為可執行檔（不是 `.jar`）
- 效能：整體表現很強，當前主要短板是生態相容性

::: warning
Pumpkin 與傳統 Bukkit/Paper 生態不同，當前主要風險是生態相容性。建議先在測試環境驗證，再用於正式服。
如果下載的是可執行檔，請在 Sea Lantern 中使用腳本啟動模式（`bat` / `sh`）呼叫該可執行檔，而不是按 JAR 匯入。
:::

## 如何選擇？

| 類型 | 插件支援 | Mod 支援 | 效能 | 推薦度 |
|------|---------|---------|------|-------|
| Paper | ✅ Bukkit/Spigot/Paper | ❌ | ⭐⭐⭐ | ⭐⭐⭐ |
| Purpur | ✅ Bukkit/Spigot/Paper | ❌ | ⭐⭐⭐ | ⭐⭐ |
| Spigot | ✅ Bukkit/Spigot | ❌ | ⭐⭐ | ⭐⭐ |
| Vanilla | ❌ | ❌ | ⭐ | ⭐ |
| Forge | ❌ | ✅ Forge Mod | ⭐⭐ | ⭐⭐ |
| Fabric | ❌ | ✅ Fabric Mod | ⭐⭐⭐ | ⭐⭐ |
| Pumpkin | ⚠️ 與 Bukkit/Paper 生態不同 | ❌ | ⭐⭐⭐⭐ | ⭐⭐ |

## 注意事項

### 版本相容性

伺服端版本必須與用戶端版本一致，否則玩家無法加入。例如：

- 伺服端 1.21.4 → 用戶端也必須是 1.21.4
- 部分模組伺服端支援向下相容，但建議保持一致

### Minecraft EULA

首次啟動任何 Minecraft 伺服端時，您需要同意 [Minecraft EULA](https://www.minecraft.net/eula)。Sea Lantern 會在建立伺服器時引導您完成這一步。

### 下載後如何使用？

1. 多數核心下載得到 `.jar` 檔案（Pumpkin 等專案可能提供可執行檔）
2. 在 Sea Lantern 中點擊「建立伺服器」，選擇匯入來源（JAR / 既有伺服器 / 啟動腳本）
3. 若是 `.jar` 可直接匯入；若是可執行檔，請使用腳本啟動模式（`bat` / `sh`）
4. 建立引導會嘗試自動識別開服方式；必要時可手動調整並填寫自訂開服命令
5. 詳細步驟請參考 [快速開始](/zh-tw/getting-started)

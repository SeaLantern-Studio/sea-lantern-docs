# 貢獻指南

感謝你對 Sea Lantern 專案的關注！這份文件會協助你了解如何為專案做出貢獻。

## 可接受 PR 範圍

對於非專案組織成員，目前優先接受範圍清楚、審查成本可控的 PR：

- 文件修正
- i18n 文案修正
- 明確且小範圍的錯字、連結或描述修復
- 高品質、可重現、非 AI 批量生成的 bug fix
- 已在 Issue 中討論，並被專案組採納的功能、重構或行為調整

:::warning 注意
較大的功能、架構、互動或目錄結構改動，請先提交 Issue 討論。未經討論且審查成本較高的 PR，專案組可能會直接關閉。
:::

### 為什麼？

這樣做是為了讓貢獻範圍保持可控，避免貢獻方向與開發組計畫衝突，同時給高品質修復和已採納提案留出空間。

我們的原則是：任何貢獻對專案的價值，都應大於審查它所需的工作量。

開始較大改動前，請先與專案組溝通。

開發組邀請會綜合考量：

- 工程判斷和程式碼品質；
- 對專案結構、邊界和維護成本的理解；
- 過往專案經驗和問題定位能力；
- 溝通、協作和長期維護意願；
- 持續貢獻的穩定性和可靠性。

## 開發環境要求

| 依賴 | 版本 |
| --- | --- |
| Node.js | 22.12.0+ |
| Rust | stable |
| pnpm | 11.5.3 |

## 程式碼規範

### Rust

1. **格式化**

   ```bash
   cargo fmt --all
   ```

2. **程式碼檢查**

   ```bash
   cargo clippy --workspace -- -D warnings
   ```

3. **命名規範**

   - 檔名：使用 `snake_case`，例如 `server_manager.rs`。
   - 函式名：使用 `snake_case`，例如 `get_server_list`。
   - 結構體：使用 `PascalCase`，例如 `ServerInstance`。
   - 常數：使用 `SCREAMING_SNAKE_CASE`，例如 `MAX_MEMORY`。

4. **註解規範**

   - 公開 API 建議保留文件註解。
   - 複雜邏輯建議新增有用的行內註解。
   - 避免無意義註解。
   - 避免不專業的註解內容。

5. **錯誤處理**

   - 在符合本地模式時使用 `Result<T, String>` 回傳錯誤。
   - 錯誤資訊要清楚且對使用者友善。
   - 避免使用 `unwrap()`，優先使用 `?` 或合適的 `unwrap_or`。

### 前端

1. **Vue 元件**

   - 元件名使用 `PascalCase`，例如 `ServerCard.vue`。
   - 使用 `<script setup>` 語法。
   - Props 和 emits 必須定義型別。

2. **TypeScript**

   - 啟用嚴格模式。
   - 避免使用 `any`，優先使用具體型別。
   - 介面名使用 `PascalCase`。

3. **樣式**

   - 使用 CSS 變數，例如 `var(--sl-*)`。
   - 避免硬編碼顏色。
   - 視情況使用 scoped 樣式。

4. **格式化和檢查**

   ```bash
   pnpm fmt
   pnpm fmt:check
   pnpm lint
   pnpm lint:fix
   ```

5. **型別引用**

   - 宣告變數時指定明確型別。
   - 避免使用 `any`。
   - 使用 `ref<T>` 或 `reactive` 時視情況指定泛型型別。

### UI 元件與圖示

- 優先使用 Headless UI for Vue v1 和按需匯入的圖示庫，例如 Lucide。
- Headless UI 提供無樣式、可存取性的互動元件，例如 `Listbox`、`Disclosure`、`Dialog`。
- 圖示優先使用元件庫，不要大量重複硬編碼 SVG 路徑。
- 推薦用 Headless UI 的 `Listbox` 替換自訂下拉或選擇器，用 Lucide 圖示替換硬編碼圖示。

這樣可以減少冗餘 DOM，統一可存取性處理，並讓樣式和行為分離。

## Git 工作流

### 分支命名

- `feat/功能名` - 新功能
- `fix/問題描述` - Bug 修復
- `refactor/任務描述` - 重構
- `chore/任務描述` - 雜項任務
- `docs/文件說明` - 文件更新

### Commit 建議

提交訊息目前不再由本地 Hook 或 CI 強制校驗，但仍建議保持清楚、可讀，方便後續審查與回溯。

推薦使用簡潔的約定式風格：

```text
feat(scope): 新增某項能力
fix: 修復某個具體問題
chore: 調整建置或目錄結構
```

提交前建議自行執行必要檢查，CI 會在 PR 或推送時繼續校驗程式碼品質。

### Pull Request 流程

1. **Fork 專案並建立分支**

   ```bash
   git checkout -b feat/your-feature
   ```

2. **開發並提交**

   ```bash
   cargo fmt --all -- --check
   cargo clippy --workspace -- -D warnings
   pnpm fmt:check
   pnpm lint
   pnpm build

   git add .
   git commit -m "feat(scope): 你的功能描述"
   ```

3. **推送並建立 PR**

   ```bash
   git push origin feat/your-feature
   ```

4. **PR 標題和描述**

   - 標題簡潔明確。
   - 描述包含變更摘要、測試方法、相關 Issue。

## 程式碼審查標準

### 建議滿足

- CI 通過。
- 程式碼格式正確。
- 無 clippy 警告。
- 無 oxlint 警告。
- 功能完整且可用。
- 無明顯效能問題。

### 推薦滿足

- 有適當註解。
- 有相關測試。
- 更新相關文件。
- UI 變更符合設計規範。

## 常見問題

### 如何執行開發環境？

```bash
pnpm install
pnpm tauri:dev
```

### 如何建置發行版本？

```bash
pnpm tauri:build
```

但我們不推薦把本地建置用作正式 Release 產物。

如果要按倉庫目前的 GitHub Actions 流程發布正式版本或 Nightly 版本，請以倉庫中的 workflow 設定為準。

### Clippy 檢查失敗怎麼辦？

1. 查看具體警告。
2. 執行 `cargo clippy --fix` 自動修復部分問題。
3. 手動修復剩餘問題。
4. 如果某些警告不合理，可以使用局部 `#[allow(clippy::...)]`。

### 格式化檢查失敗怎麼辦？

嘗試：

```bash
cargo fmt --all
```

## 取得協助

- 在 Issue 中提問。
- 聯絡維護者。
- 查看專案文件。

## 行為準則

- 尊重所有貢獻者。
- 保持友善和專業。
- 接受建設性的回饋。
- 幫助新手貢獻者。

再次感謝你的貢獻！

# 貢獻指南

感謝您對 Sea Lantern 的關注！

## 開發環境

| 依賴 | 版本 |
| --- | --- |
| Node.js | 22.12.0+ |
| Rust | stable |
| pnpm | 11.5.3 |

## 開發步驟

1. Fork 倉庫
2. 克隆到本地
3. 安裝依賴：`pnpm --dir frontend install`
4. 啟動開發：`pnpm --dir frontend run tauri:dev`

## 程式碼規範

提交前請執行：

- 前端：`pnpm --dir frontend run lint` + `pnpm --dir frontend run fmt:check`
- 後端：`cargo fmt --all -- --check` + `cargo clippy --workspace -- -D warnings`

## 提交 PR

1. 建立功能分支
2. 編寫程式碼並通過檢查
3. 提交 Pull Request 到 `beta` 分支

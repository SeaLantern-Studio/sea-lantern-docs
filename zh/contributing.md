# 贡献指南

感谢你对 Sea Lantern 的关注！

## 开发环境

- Node.js 20+
- Rust stable
- pnpm 9.x（通过 `corepack enable` 启用）

## 开发步骤

1. Fork 仓库
2. 克隆到本地
3. 安装依赖：`pnpm install`
4. 启动开发：`pnpm tauri dev`

## 代码规范

提交前请运行：

- 前端：`pnpm run lint` + `pnpm run fmt:check`
- 后端：`cargo fmt --all -- --check` + `cargo clippy --workspace -- -D warnings`

## 提交 PR

1. 创建功能分支
2. 编写代码并通过检查
3. 提交 Pull Request 到 `dev` 分支

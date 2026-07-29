# 项目结构

本文以 Sea Lantern 主仓库当前 `main` 分支为准。目录会随开发调整，请以源码为最终依据。

## 顶层目录

```text
SeaLantern/
├── src/             # Vue 3 前端
├── crates/          # 可复用 Rust crate
│   ├── core/        # 核心领域与进程、实例、配置逻辑
│   ├── infra/       # 文件、网络、下载、持久化与平台能力
│   └── extra/       # 插件、市场、更新、联机等扩展能力
├── server/          # 服务器应用服务与 RPC 边界
├── src-tauri/       # Tauri 桌面宿主
├── docker-entry/    # Docker/headless 入口
├── docker/          # Docker 构建资源
├── docs/            # 与源码同步的开发文档和 Lua API
├── scripts/         # 版本与 NOTICE 等维护脚本
├── packaging/       # Linux 等平台的打包文件
├── Cargo.toml       # Rust workspace 配置
├── package.json     # 前端依赖与仓库脚本
└── pnpm-lock.yaml   # pnpm 锁文件
```

## 前端

`src/` 包含 Vue 3、TypeScript、Pinia 和 Vue Router 前端：

| 目录 | 职责 |
| --- | --- |
| `src/api/` | 调用宿主能力的 API 封装 |
| `src/views/` | 首页、创建、控制台、配置、玩家、联机、备份等页面 |
| `src/components/` | 通用组件和各页面子组件 |
| `src/stores/` | Pinia 状态管理 |
| `src/router/` | 页面路由 |
| `src/language/` | 多语言资源与运行时 |
| `src/themes/`、`src/styles/` | 主题定义和全局/页面样式 |
| `src/composables/` | 可复用 Vue 组合式逻辑 |
| `src/types/`、`src/utils/` | 类型和通用工具 |

修改页面时，通常要同时检查对应的 view、component、store、API 和语言键。

## Rust workspace

根 `Cargo.toml` 当前包含以下成员：

| 成员 | 职责 |
| --- | --- |
| `crates/core` | 进程控制、服务器实例、配置与供应流程等核心规则 |
| `crates/infra` | 归档、下载、文件系统、网络、持久化和平台实现 |
| `crates/extra` | Lua 插件、配置、下载链接、市场、更新及 P2P 联机 |
| `server` | 面向宿主的应用服务和 RPC 契约 |
| `src-tauri` | 桌面应用入口、Tauri 插件与窗口宿主 |
| `docker-entry` | 容器运行入口 |

依赖方向应尽量保持为宿主依赖应用层与共享 crate；通用业务规则不要直接放进 UI 或平台入口。

## 常用入口

| 修改内容 | 优先查看 |
| --- | --- |
| 页面与导航 | `src/router/index.ts`、`src/views/`、`src/components/layout/` |
| 前后端调用 | `src/api/`、`server/src/rpc/` |
| 服务器实例与进程 | `crates/core/src/instance/`、`crates/core/src/process/` |
| 下载与文件操作 | `crates/infra/src/download/`、`crates/infra/src/fs/` |
| Sea Lantern 插件 | `crates/extra/src/app_plugin/`、`src/components/plugin/` |
| 联机隧道 | `crates/extra/src/online/`、`src/views/TunnelView.vue` |
| 桌面宿主 | `src-tauri/src/`、`src-tauri/tauri.conf.json` |
| Docker 入口 | `docker-entry/`、`docker/` |

## 常用命令

```bash
pnpm install
pnpm dev
pnpm tauri dev
pnpm docker:dev
```

完整环境与检查命令见[环境配置](/zh/dev/environment)和[贡献指南](/zh/dev/CONTRIBUTING)。

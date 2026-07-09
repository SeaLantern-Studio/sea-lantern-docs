# 项目结构

Sea Lantern 是 Tauri 2 + Vue 3 + Rust 项目。当前仓库按前端、后端 Rust workspace、共享数据、脚本和源码绑定文档拆分。

## 顶层目录

```text
SeaLantern/
├── frontend/       # Vue 3 前端、页面、状态、语言、主题和 Tauri 调用封装
├── backend/        # Rust workspace，包含 core crates、Tauri 宿主和 Docker/headless 入口
├── shared/         # 前后端共享静态数据，如插件权限、Trusted catalog、服务端分类
├── docs/           # 和源码强绑定的技术文档、插件 API、CLI、设计记录
├── scripts/        # Tauri 启动、版本、notice、Docker smoke 等辅助脚本
├── docker/         # Docker 相关文件
├── packaging/      # 桌面发行包相关文件
├── panic-log/      # 崩溃日志目录占位
├── Cargo.toml      # 后端 Rust workspace 根清单
├── package.json    # 仓库级脚本和前端工具入口
└── pnpm-lock.yaml  # pnpm 锁文件
```

## 前端结构

`frontend/` 负责界面、状态、语言、主题，以及调用 Tauri 后端命令。

```text
frontend/
├── index.html
├── package.json
├── scripts/
└── src/
    ├── main.ts
    ├── main.next.ts
    ├── NextRoot.vue
    ├── api/
    ├── router/
    ├── pages/
    ├── views/
    ├── layout/
    ├── shell/
    ├── components/
    ├── composables/
    ├── features/
    ├── services/
    ├── host/
    ├── launcher/
    ├── stores/
    ├── language/
    ├── themes/
    ├── styles/
    ├── contracts/
    ├── types/
    ├── data/
    ├── assets/
    └── utils/
```

### 前端常用入口

| 改动内容 | 优先查看 |
| --- | --- |
| Tauri 命令调用 | `frontend/src/api/` |
| 路由和页面入口 | `frontend/src/router/`、`frontend/src/pages/`、`frontend/src/views/` |
| 页面组件 | `frontend/src/components/`、对应页面目录 |
| 应用外壳、导航、布局 | `frontend/src/layout/`、`frontend/src/shell/`、`frontend/src/components/shell/`、`frontend/src/NextRoot.vue` |
| 跨页面业务流程 | `frontend/src/features/`、`frontend/src/services/` |
| 可复用 Vue 逻辑 | `frontend/src/composables/` |
| 全局状态 | `frontend/src/stores/` |
| 插件状态拆分 | `frontend/src/stores/plugin/` |
| 多语言文案 | `frontend/src/language/` |
| 主题和视觉变量 | `frontend/src/themes/`、`frontend/src/styles/` |
| 类型和契约 | `frontend/src/types/`、`frontend/src/contracts/` |

### 页面目录

`frontend/src/pages/` 当前按业务域组织：

- `home/`
- `servers/`
- `server-instance/`
- `plugins/`
- `downloads/`
- `settings/`
- `paint/`
- `tunnel/`
- `developer/`
- `about/`

单个服务器内部页面在 `server-instance/` 下继续拆分，例如 `console/`、`config/`、`players/`、`extensions/`。

## 后端结构

`backend/` 是 Rust workspace。根目录的 `Cargo.toml` 管理所有 crate。

```text
backend/
├── runtime-core/
├── event-core/
├── i18n-core/
├── server-config-core/
├── docker-core/
├── server-local-setup-core/
├── server-installer-core/
├── server-startup-scan-core/
├── java-installer-core/
├── server-log-core/
├── server-plugin-core/
├── plugin-trust-core/
├── lua-runtime-core/
├── server-download-links-core/
├── starter-links-core/
├── update-core/
├── tauri-host/
├── docker-entry/
└── vendor/
```

### Core crate 分工

| crate | 职责 |
| --- | --- |
| `runtime-core` | 运行模式、HTTP/headless、panic report 等运行时工具 |
| `event-core` | 应用事件和服务器事件模型 |
| `i18n-core` | 后端语言资源 |
| `server-config-core` | 启动配置、JVM 参数、CPU policy、`server.properties` 规则 |
| `docker-core` | Docker preview 和 Docker 规则 |
| `server-local-setup-core` | 本地服务器接管、启动模式推断、本地启动预览辅助 |
| `server-installer-core` | 服务端安装和核心识别 |
| `server-startup-scan-core` | 已有服务器目录扫描 |
| `java-installer-core` | Java 下载和安装 |
| `server-log-core` | 服务器日志持久化和读取 |
| `server-plugin-core` | Minecraft 服务端插件文件扫描和管理规则 |
| `plugin-trust-core` | Sea Lantern 插件权限归一化、信任和审查规则 |
| `lua-runtime-core` | Lua 运行时边界 |
| `server-download-links-core` | 服务端下载链接解析 |
| `starter-links-core` | Starter 链接 |
| `update-core` | 更新检查、下载和安装流程 |

纯规则优先放进对应 `*-core` crate。`tauri-host` 负责命令暴露、服务编排、持久化、运行时状态和宿主集成。

## Tauri 宿主

`backend/tauri-host/` 是桌面和 headless 宿主。

```text
backend/tauri-host/
├── tauri.conf.json
├── capabilities/
├── icons/
├── tests/
└── src/
    ├── lib.rs
    ├── main.rs
    ├── runtime/
    ├── commands/
    ├── services/
    ├── models/
    ├── adapters/
    ├── hardcode_data/
    ├── plugins/
    └── utils/
```

### 命令层

`backend/tauri-host/src/commands/` 是 Tauri 命令实现：

| 目录 | 职责 |
| --- | --- |
| `app/` | 应用、设置、系统、i18n、宿主命令 |
| `downloads/` | 下载、Java、Mod 下载 |
| `online/` | 联机、Join ID、隧道 |
| `plugins/` | Sea Lantern Lua 插件管理、市场、启停、snapshot |
| `server/` | 服务器管理、配置、玩家、服务端插件文件 |
| `update/` | 更新检查、下载、安装 |

新增或修改命令时，至少同时检查：

1. `frontend/src/api/*.ts`
2. `backend/tauri-host/src/runtime/command_catalog.rs`
3. `backend/tauri-host/src/commands/`

命令名、参数、返回结构、错误语义和事件字段都是前端可见契约。

### 服务层

`backend/tauri-host/src/services/` 负责宿主服务编排：

| 目录 | 职责 |
| --- | --- |
| `server/` | 服务器管理、运行控制、启动、插件文件、运行时适配 |
| `download/` | 下载管理、Java 安装 |
| `online/` | 在线服务和隧道 |
| `java_detector/` | Java 检测 |

服务器启动相关逻辑要特别注意本地 jar、starter、bat、sh、ps1、custom start、Docker 启动是不同路径。preview 和真实执行需要一致时，优先共享 core 层归一化结果。

## 插件系统

Sea Lantern Lua 插件系统位于：

```text
backend/tauri-host/src/plugins/
├── api/
├── builtin/
├── manager/
└── runtime/
    ├── core/
    ├── console/
    ├── element/
    ├── filesystem/
    ├── http/
    ├── i18n/
    ├── log/
    ├── plugins_api/
    ├── process/
    ├── server/
    ├── storage/
    ├── system/
    └── ui/
```

前端对应位置：

- `frontend/src/api/plugin.ts`
- `frontend/src/pages/plugins/`
- `frontend/src/components/plugin/`
- `frontend/src/components/plugins/`
- `frontend/src/stores/plugin/`

注意区分两套插件：

| 类型 | 前端入口 | 后端入口 |
| --- | --- | --- |
| Sea Lantern Lua 插件系统 | `frontend/src/api/plugin.ts` | `backend/tauri-host/src/plugins/`、`backend/tauri-host/src/commands/plugins/` |
| Minecraft 服务端插件文件 | `frontend/src/api/mcs_plugins.ts` | `backend/server-plugin-core/`、`backend/tauri-host/src/commands/server/` |

插件 UI snapshot、sidebar、context menu、component mirror、permission log 都是插件可见行为，改动前要确认兼容性。

## 共享数据和文档

`shared/` 存放前后端都会关心的静态数据：

- `plugin-permissions.json`
- `plugin-trusted-catalog.json`
- `server-core-taxonomy.json`
- `startup-modes.json`

`docs/` 保留和源码同步强相关的技术文档：

- `docs/plugin/`：Sea Lantern Lua 插件运行时 API
- `docs/CLI-Guide.md`：CLI 使用说明
- `docs/design/`：设计记录

面向用户的总览、教程和贡献说明优先放到文档站，不继续堆进仓库内 `docs/`。

## 脚本

`scripts/` 当前包含：

- `tauri.mjs`：仓库级 Tauri 启动逻辑
- `version.mjs`：版本辅助
- `notice.mjs`：第三方声明辅助
- `cli-docker-smoke.ps1`：Docker/CLI smoke 检查

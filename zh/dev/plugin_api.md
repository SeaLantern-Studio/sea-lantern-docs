# 插件 API

Sea Lantern 插件运行时基于 Lua。插件通过全局 `sl` 命名空间访问宿主提供的能力。

详细接口定义、参数说明和限制以主仓库 `docs/plugin/` 为准。

:::warning 注意
本文中的插件指 Sea Lantern Lua 插件，不包含 Minecraft 服务端 Bukkit / Spigot / Paper 插件文件。
服务端插件文件管理属于独立模块。
:::

## 运行时模型

- 插件运行时创建全局 `sl` 表。
- 插件能力由 `manifest.json` 中声明的 `permissions` 控制。
- 未授权模块调用时会返回权限错误。
- 插件运行在受限 Lua 环境中，仅开放必要标准库。
- `sl.i18n` 默认可用，其余模块需要对应权限。

## API 模块

| 模块 | 权限 | 说明 |
| --- | --- | --- |
| `sl.log` | `log` | 输出插件日志 |
| `sl.storage` | `storage` | 插件私有键值存储 |
| `sl.fs` | `fs.*` | 沙箱文件系统操作 |
| `sl.api` | `api` | 插件 API 注册与调用 |
| `sl.ui` | `ui.*` | UI 注入、Toast、菜单和组件桥接 |
| `sl.element` | `element` | 页面元素查询与操作 |
| `sl.server` | `server` | 服务器信息和日志访问 |
| `sl.console` | `console` | 控制台命令和状态访问 |
| `sl.system` | `system` | 系统及应用信息查询 |
| `sl.http` | `network` | 受限 HTTP 请求 |
| `sl.process` | `process.*` | 执行插件目录内程序 |
| `sl.plugins` | `plugins.*` | 访问其他插件资源 |
| `sl.i18n` | 无 | 国际化接口 |

## 基础调用

```lua
sl.log.info("plugin loaded")

local locale = sl.i18n.getLocale()
local title = sl.i18n.t("common.app_name")

sl.storage.set("enabled", true)
local enabled = sl.storage.get("enabled")

local servers = sl.server.list()
sl.console.send("server-id", "say Hello")
```

## 文件系统

文件系统采用 scope 隔离：

```lua
local text = sl.fs.read("data", "config.txt")
sl.fs.write("data", "output.txt", "Hello")
```

支持的 scope：

| Scope | 说明 |
| --- | --- |
| `data` | 插件私有数据目录 |
| `server` | 当前服务器目录 |
| `global` | 全局共享目录 |

权限：

| 权限 | 说明 |
| --- | --- |
| `fs.<scope>.read` | 读取文件 |
| `fs.<scope>.write` | 写入文件 |
| `fs.<scope>.list` | 列出目录 |
| `fs.<scope>.meta` | 查询文件信息 |
| `fs.<scope>.delete` | 删除文件 |
| `fs.<scope>.transfer` | 移动、复制、重命名 |

旧权限 `fs` 会转换为 `fs.data`。

## 进程权限

| 权限 | 说明 |
| --- | --- |
| `execute_program` | 完整进程能力 |
| `process.exec` | 执行程序 |
| `process.inspect` | 查询后台进程 |
| `process.output.read` | 读取输出 |
| `process.kill` | 终止进程 |

`sl.process.exec()` 要求程序路径在 `manifest.json` 的 `programs` 中声明，且程序和工作目录必须位于插件目录内。

## 安全限制

- 文件系统拒绝绝对路径、路径越界、符号链接和 reparse point。
- 虚拟路径不会暴露宿主真实路径。
- 删除操作不会递归删除非空目录。
- HTTP 仅支持 `http` 和 `https`，禁止访问本机和私有网络地址。
- HTTP 请求不自动跟随重定向，响应体存在大小限制。
- 控制台命令会经过状态和安全规则校验。
- 存储接口适用于小型结构化数据。

## UI 与元素操作

`sl.ui` 用于向宿主注册 UI 行为，包括：

- HTML / CSS 注入；
- Toast 通知；
- 侧边栏；
- 上下文菜单；
- 组件桥接。

`sl.element` 用于查询和操作已有页面元素。

组件桥接需要额外权限：

- `ui.component.read`
- `ui.component.write`
- `ui.component.proxy`
- `ui.component.create`

## 国际化

插件可以读取宿主语言，也可以注册插件专属翻译：

```lua
sl.i18n.registerLocale("zh-CN", "简体中文")
sl.i18n.addTranslations("zh-CN", {
  title = "示例插件"
})
```

插件翻译统一进入 `plugins.<plugin_id>.*` 命名空间。

## Trusted 插件

当前 Trusted 插件机制包括：

- 人工审核；
- 内置 trusted catalog；
- 包 hash 校验；
- 权限上限校验；
- 启用时授权。

当前机制不等同于完整数字签名体系。

高风险权限包括：

- `execute_program`
- `plugin_folder_access`
- `plugins.write`
- `ui.component.proxy`

此类插件需要额外审核和用户确认。

## 开发位置

| 内容 | 路径 |
| --- | --- |
| 插件 API 文档 | `docs/plugin/*.md` |
| Lua 运行时 | `backend/tauri-host/src/plugins/runtime/` |
| 信任规则 | `backend/plugin-trust-core/` |
| 命令实现 | `backend/tauri-host/src/commands/plugins/` |
| 前端 API | `frontend/src/api/plugin.ts` |

修改插件 API 时，需要同步检查运行时实现、前端封装、命令注册以及文档。插件 UI、权限行为和数据格式均属于兼容性接口。

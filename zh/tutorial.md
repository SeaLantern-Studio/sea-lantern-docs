# 使用教程

本页详细介绍 Sea Lantern 的各项功能使用方法。

## 创建第一个服务器

### 导入来源（JAR / 已有服务器 / 启动脚本）

1. 点击主界面的「创建服务器」按钮
2. 在引导界面选择导入来源：服务端 JAR、已有服务器目录或启动脚本（`bat` / `sh`）
3. 如果还没有服务端，请参考 [核心获取](/zh/server-jar)

### 启动方式识别与自定义命令

- Sea Lantern 会根据导入内容智能识别启动方式
- 当识别结果不符合预期时，你可以手动切换并填写自定义开服命令
- 创建流程支持整合包自动安装，减少首次开服的手动步骤

### 选择 Java 版本

完成导入后，Sea Lantern 会列出系统中已检测到的 Java 版本。选择与你的 Minecraft 版本匹配的 Java：

| Minecraft 版本 | 推荐 Java |
|---------------|----------|
| 1.16.5 及以下 | Java 8 / 11 |
| 1.17 ~ 1.20.4 | Java 17 |
| 1.20.5+ | Java 21 |

::: tip
如果列表中没有合适的 Java，点击「下载 Java」按钮，Sea Lantern 会自动下载并安装所需版本。
:::

### 命名和配置

为你的服务器取一个名字。你也可以在这里调整初始内存分配等参数，但这些都可以稍后修改。

### 同意 EULA

首次启动时，Sea Lantern 会提示你同意 Minecraft EULA。确认后服务器才能正常运行。

## 控制台

控制台是 Sea Lantern 的核心界面，提供以下功能：

### 查看日志

服务器运行时的所有输出都会实时显示在控制台中，包括：
- 服务器启动/关闭信息
- 玩家加入/离开
- 聊天消息
- 错误和警告信息

### 输入命令

在控制台底部的输入框中输入 Minecraft 服务器命令（无需 `/` 前缀），按回车执行。

常用命令示例：
```
say 欢迎来到服务器！
op Steve
whitelist add Alex
stop
```

### 命令历史

按 `↑` / `↓` 箭头键可以浏览之前执行过的命令，方便重复操作。

### 快捷命令面板

控制台工具栏提供常用操作的快捷按钮，如安全停止服务器、重启等。

## server.properties 配置

Sea Lantern 提供了图形化的 server.properties 编辑器，让你无需手动修改文件。

### 常用配置项

| 配置项 | 说明 | 默认值 |
|-------|------|-------|
| `server-port` | 服务器端口 | 25565 |
| `max-players` | 最大玩家数 | 20 |
| `difficulty` | 游戏难度 | easy |
| `gamemode` | 默认游戏模式 | survival |
| `motd` | 服务器简介（显示在服务器列表） | A Minecraft Server |
| `online-mode` | 正版验证 | true |
| `pvp` | 是否允许 PVP | true |
| `white-list` | 是否启用白名单 | false |

### 搜索和筛选

配置项支持分类浏览和关键词搜索，可以快速定位你要修改的选项。

::: warning
修改配置后需要**重启服务器**才能生效。
:::

## 玩家管理

### 白名单

启用白名单后，只有白名单中的玩家才能加入服务器。

- 添加玩家：输入玩家名点击添加，或在控制台执行 `whitelist add 玩家名`
- 移除玩家：在列表中点击移除按钮
- 开关白名单：在 server.properties 中设置 `white-list` 为 `true` 或 `false`

### 封禁管理

- 封禁玩家：在玩家列表中点击封禁，或执行 `ban 玩家名`
- 解除封禁：在封禁列表中点击解封，或执行 `pardon 玩家名`
- IP 封禁：执行 `ban-ip IP地址`

### OP 权限

OP（管理员）拥有服务器的最高权限。

- 给予 OP：执行 `op 玩家名`
- 移除 OP：执行 `deop 玩家名`

::: warning
谨慎给予 OP 权限，拥有 OP 的玩家可以执行任何服务器命令。
:::

## 插件安装

::: info
插件功能仅适用于 Paper / Spigot 等支持插件的服务端。Vanilla、Forge 和 Fabric 服务端不支持 Bukkit 插件。
:::

### 获取插件

常见的插件下载渠道：

- [SpigotMC](https://www.spigotmc.org/resources/) — 最大的 Spigot 插件社区，需要注册账户（免费），注意检查插件的兼容性版本和评分
- [Modrinth](https://modrinth.com/plugins) — 现代化的插件/Mod 平台
- [Hangar](https://hangar.papermc.io/) — PaperMC 官方插件平台
- [Polymart](https://polymart.org/) — 类似 SpigotMC，界面更现代化
- [Bukkit](https://dev.bukkit.org/) — 老牌插件平台
- [GitHub](https://github.com) — 搜索开源插件项目，通常在 Releases 部分提供下载

### 安装步骤

1. **准备工作**
   - 确保服务器已停止（如果正在运行）
   - 找到服务器目录中的 `plugins` 文件夹
   - 如果没有 `plugins` 文件夹，可手动创建一个

2. **放置插件文件**
   - 将下载的插件 `.jar` 文件复制到 `plugins` 文件夹中
   - 确保插件文件名不包含特殊字符或空格
   - 建议每次只安装一个插件以避免冲突

3. **配置插件**
   - 启动服务器，插件会自动生成配置文件
   - 在 `plugins` 文件夹中找到插件的配置文件夹
   - 根据需要编辑配置文件（通常是 `config.yml`）

4. **重启服务器**
   - 重启服务器以使插件生效
   - 检查控制台日志确认插件加载成功
   - 使用 `plugins` 命令查看已加载的插件列表

### 常用插件推荐

**管理类插件：**

| 插件 | 功能 |
|------|------|
| EssentialsX | 基础指令集（传送、家、经济等） |
| LuckPerms | 权限管理 |
| WorldEdit | 强大的地图编辑工具 |
| WorldGuard | 区域保护和权限管理 |

**游戏增强类插件：**

| 插件 | 功能 |
|------|------|
| CoreProtect | 方块日志/回滚 |
| Multiverse-Core | 多世界管理 |
| DiscordSRV | 服务器与 Discord 集成 |

**经济系统插件：**

| 插件 | 功能 |
|------|------|
| Vault | 经济/权限 API（需要配合经济插件使用） |
| Shopkeepers | 商人 NPC 系统 |

### 插件兼容性注意事项

- 确保插件与你的服务端和 Minecraft 版本兼容
- 检查插件之间的依赖关系
- 避免安装功能重复的插件
- 定期更新插件以获得新功能和安全修复
- 备份服务器数据后再安装新插件

## 高级设置

### 内存分配

Minecraft 服务器对内存需求较大，建议根据玩家数量合理分配：

| 玩家数 | 推荐内存 |
|-------|---------|
| 1-5 人 | 2-4 GB |
| 5-15 人 | 4-6 GB |
| 15-30 人 | 6-8 GB |
| 30+ 人 | 8 GB+ |

在 Sea Lantern 的服务器设置中可以调整内存分配。

### JVM 参数

Sea Lantern 允许你自定义 JVM 启动参数。对于 Paper 服务端，推荐使用 Aikar's Flags：

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
如果你不了解 JVM 参数的作用，建议使用默认配置。错误的参数可能导致服务器不稳定。
:::

### 安全退出

当你关闭 Sea Lantern 时，程序会自动向服务器发送 `stop` 命令，等待服务器安全关闭后再退出。这可以防止存档损坏。

::: danger
**不要**直接通过任务管理器强制关闭正在运行的服务器，这可能导致存档丢失或损坏。
:::

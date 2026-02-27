# 核心获取

Minecraft 服务器需要一个服务端核心（JAR 文件）才能运行。本页介绍常见的服务端类型及其获取方式。

## 原版服务端（Vanilla）

Mojang 官方提供的原版服务端，不支持任何插件或 Mod。

- 下载地址：[Minecraft 官网](https://www.minecraft.net/zh-hans/download/server)
- 适用场景：纯原版体验，不需要任何扩展

::: warning
原版服务端性能较低，建议仅用于少人数本地联机。
:::

## Paper（推荐）

基于 Spigot 的高性能服务端，是目前最流行的选择。

- 下载地址：[papermc.io](https://papermc.io/downloads/paper)
- 适用场景：需要插件、追求性能的服务器
- 插件兼容：支持 Bukkit / Spigot / Paper 插件

::: tip 为什么推荐 Paper？
- 性能远超原版和 Spigot，对红石和生物 AI 有优化
- 社区活跃，插件兼容性好
- 自带反作弊和安全修补
- 更新速度快，新版本支持及时
:::

## Spigot

老牌的插件服务端，Paper 的上游项目。

- 获取方式：通过 [BuildTools](https://www.spigotmc.org/wiki/buildtools/) 自行编译
- 适用场景：需要 Spigot 专属插件，或与 Paper 有兼容性问题时

::: info
Spigot 不提供直接下载的 JAR 文件，需要使用 BuildTools 编译。对新手不太友好，建议优先选择 Paper。
:::

## Forge

老牌 Mod 服务端，用于运行 Java 版的Forge端Mod。

- 下载地址：[Forge 官网](https://files.minecraftforge.net/)
- 适用场景：需要运行 Forge Mod 的模组服务器
- 注意：**不兼容 Bukkit/Spigot 插件**

## Fabric

轻量级 Mod 加载器，启动速度快。

- 下载地址：[Fabric 官网](https://fabricmc.net/use/installer/)
- 适用场景：需要运行 Fabric Mod 的模组服务器
- 注意：**不兼容 Bukkit/Spigot 插件，需要使用 Fabric Mod**大部分 Fabric Mod 还需要您将 Fabric API 安装到 mods 文件夹中。来源：[Fabic 中文网](https://fabricmc.net.cn/use/server/)
## Purpur

基于 Paper 的分支，提供更多配置选项。

- 下载地址：[Purpur 官网](https://purpurmc.org/downloads)
- 适用场景：需要更多自定义配置选项的服务器
- 插件兼容：支持 Bukkit / Spigot / Paper 插件

## Pumpkin（实验性）

基于 Rust 的新型服务器项目。

- 官网：[pumpkinmc.org](https://pumpkinmc.org/)
- 下载页：[Pumpkin Download](https://pumpkinmc.org/download/)
- 文档：[docs.pumpkinmc.org](https://docs.pumpkinmc.org/)
- 适用场景：技术尝鲜、测试 Rust 服务器方案
- 发布形式：常见为可执行文件（不是 `.jar`）
- 性能：整体表现很强，当前主要短板是生态兼容性

::: warning
Pumpkin 与传统 Bukkit/Paper 生态不同，当前主要风险是生态兼容性。建议先在测试环境验证，再用于正式服。
如果下载的是可执行文件，请在 Sea Lantern 中使用脚本启动模式（`bat` / `sh`）调用该可执行文件，而不是按 JAR 导入。
:::

## 如何选择？

| 类型 | 插件支持 | Mod 支持 | 性能 | 推荐度 |
|------|---------|---------|------|-------|
| Paper | ✅ Bukkit/Spigot/Paper | ❌ | ⭐⭐⭐ | ⭐⭐⭐ |
| Purpur | ✅ Bukkit/Spigot/Paper | ❌ | ⭐⭐⭐ | ⭐⭐ |
| Spigot | ✅ Bukkit/Spigot | ❌ | ⭐⭐ | ⭐⭐ |
| Vanilla | ❌ | ❌ | ⭐ | ⭐ |
| Forge | ❌ | ✅ Forge Mod | ⭐⭐ | ⭐⭐ |
| Fabric | ❌ | ✅ Fabric Mod | ⭐⭐⭐ | ⭐⭐ |
| Pumpkin | ⚠️ 与 Bukkit/Paper 生态不同 | ❌ | ⭐⭐⭐⭐ | ⭐⭐ |

## 注意事项

### 版本兼容性

服务端版本必须与客户端版本一致，否则玩家无法加入。例如：

- 服务端 1.21.4 → 客户端也必须是 1.21.4
- 部分模组服务端支持向下兼容，但建议保持一致

### Minecraft EULA

首次启动任何 Minecraft 服务端时，你需要同意 [Minecraft EULA](https://www.minecraft.net/eula)。Sea Lantern 会在创建服务器时引导你完成这一步。

### 下载后如何使用？

1. 大多数核心下载得到 `.jar` 文件（Pumpkin 等项目可能提供可执行文件）
2. 在 Sea Lantern 中点击「创建服务器」，选择导入来源（JAR / 既有服务器 / 启动脚本）
3. 若是 `.jar` 可直接导入；若是可执行文件，请使用脚本模式（`bat` / `sh`）
4. 创建向导会尝试自动识别开服方式；必要时可手动调整并填写自定义开服命令
5. 详细步骤请参考 [快速开始](/zh/getting-started)

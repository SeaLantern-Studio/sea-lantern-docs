# 快速开始

## 系统要求

| 项目 | 最低要求 |
|------|---------|
| 操作系统 | Windows 10+、macOS 10.15+、Linux (glibc 2.31+) |
| Java | Java 8+（用于运行 Minecraft 服务端） |
| 内存 | 建议 4GB 以上（Minecraft 服务端需要额外内存） |

::: tip Windows 版本说明
Sea Lantern 使用 WebView2 运行时，**要求 Windows 10（版本 1909 及以上）或 Windows 11**。Windows 7/8/8.1 用户请参考 [常见问题 - 旧版 Windows](/zh/faq#旧版-windows-运行方案) 中的替代方案。
:::

## 1. 下载安装

前往 [下载页面](/zh/download) 获取适合你操作系统的安装包，双击运行即可完成安装。

Ubuntu 用户也可以使用 PPA 安装（见下载页 Linux 小节）。

Arch Linux 用户可通过 AUR 安装（见下载页 Linux 小节）。

## 2. 获取服务端核心

你需要一个 Minecraft 服务端 JAR 文件来创建服务器。如果你还没有，请参考 [核心获取](/zh/server-jar) 页面下载。

::: tip 推荐
对于大多数玩家，推荐使用 [Paper](https://papermc.io/downloads/paper) — 性能优秀、插件生态丰富。
:::

## 3. 配置 Java

启动 Sea Lantern 后，软件会**自动检测**系统中已安装的 Java。如果没有合适的版本，可以使用内置的 Java 下载器一键安装。

::: info
Minecraft 不同版本对 Java 的要求不同：
- 1.16.5 及以下 → Java 8 或 Java 11
- 1.17 ~ 1.20.4 → Java 17
- 1.20.5+ → Java 21
:::

## 4. 创建服务器

1. 点击「创建服务器」按钮
2. 导入你下载的服务端 JAR 文件
3. 选择 Java 运行时版本
4. 为你的服务器命名
5. 首次启动时需要同意 Minecraft EULA

## 5. 启动服务器

点击启动按钮，等待控制台显示 `Done!` 即表示服务器启动成功。此时你可以在 Minecraft 中通过 `localhost` 连接到你的服务器。

---

接下来，查看 [使用教程](/zh/tutorial) 了解更多操作细节，或浏览 [功能总览](/zh/features) 了解所有功能。

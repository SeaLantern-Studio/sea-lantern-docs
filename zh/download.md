<script setup>
import { VERSION, RELEASE_BASE } from '../.vitepress/version'
</script>

# 下载安装

按你的系统选择对应安装包下载并安装。  
- 建议优先使用安装包格式（Windows 选 EXE，macOS 选 DMG）。
- 如需先看改动内容，点击上方版本号查看更新日志。

## 最新版本

当前最新版本：
<a :href="`/zh/changelog#v${VERSION.replace(/\./g, '-')}`"><strong>v{{ VERSION }}</strong></a>

::: tip 架构支持更新（v1.0.0+）
Windows 和 Linux 现已提供 ARM64 安装包，可按你的设备架构选择下载。
:::

## Windows

| 格式 | 说明 |
|------|------|
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${VERSION}_x64-setup.exe`">EXE 安装包</a> | 推荐，双击安装 |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${VERSION}_x64_zh-CN.msi`">MSI 安装包</a> | Windows Installer 格式 |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${VERSION}_arm64-setup.exe`">EXE 安装包 (ARM64)</a> | 适用于 Windows on ARM |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${VERSION}_arm64_zh-CN.msi`">MSI 安装包 (ARM64)</a> | Windows Installer (ARM64) |

## macOS

| 格式 | 说明 |
|------|------|
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${VERSION}_aarch64.dmg`">DMG (Apple Silicon)</a> | M1 / M2 / M3 / M4 |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${VERSION}_x64.dmg`">DMG (Intel)</a> | x64 架构 |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_aarch64.app.tar.gz`">app.tar.gz (Apple Silicon)</a> | 便携压缩包 |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_x64.app.tar.gz`">app.tar.gz (Intel)</a> | 便携压缩包 |

## Linux

| 格式 | 说明 |
|------|------|
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${VERSION}_amd64.deb`">DEB</a> | Debian / Ubuntu |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${VERSION}_arm64.deb`">DEB (ARM64)</a> | Debian / Ubuntu ARM64 |
| <a :href="`${RELEASE_BASE}/Sea.Lantern-${VERSION}-1.x86_64.rpm`">RPM</a> | Fedora / RHEL (x86_64) |
| <a :href="`${RELEASE_BASE}/Sea.Lantern-${VERSION}-1.aarch64.rpm`">RPM (ARM64)</a> | Fedora / RHEL (aarch64) |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${VERSION}_amd64.AppImage`">AppImage</a> | 通用格式 |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${VERSION}_aarch64.AppImage`">AppImage (ARM64)</a> | 通用格式 (ARM64) |
| <a :href="`${RELEASE_BASE}/sealantern-${VERSION}-1-x86_64.pkg.tar.zst`">pkg.tar.zst</a> | Arch Linux 可安装包 (x86_64) |

Arch Linux 用户可通过 AUR 安装，例如：

```bash
yay -S sealantern
```

### Ubuntu PPA（社区维护）

Ubuntu 用户可通过 PPA 快速安装：

```bash
sudo add-apt-repository ppa:brianeee7878/sealantern
sudo apt update
sudo apt install sea-lantern-ppa-updater
```

支持 Ubuntu 20.04 LTS、22.04 LTS 和 24.04 LTS。

该 PPA 为社区维护渠道，不属于官方发布渠道；如遇问题请改用上方 DEB 安装包。

## 系统要求

- Windows 10+ / macOS 10.15+ / Linux (glibc 2.31+)
- Java 8及以上（用于运行 Minecraft 服务端）
## Java要求
- 来自Minecraft Wiki的Minecraft对Java的运行标准：（https://zh.minecraft.wiki/w/Java%E7%89%88）
- Java配置
  * 自1.12（17w13a）起，运行Minecraft的最低要求为Java 8。若玩家不确定设备是否已安装Java 8，安装程序会默认自动安装并使用支持Minecraft运行的Java版本。
  * 自1.17（21w19a）起，运行Minecraft的最低要求为Java 16。
  * 自1.18（1.18-pre2）起，运行Minecraft的最低要求为Java 17。
  * 自1.20.5（24w14a）起，运行Minecraft的最低要求为Java 21，且操作系统须为64位。
  * 自26.1（26.1-snapshot-1）起，运行Minecraft的最低要求为Java 25。
- 需要注意的是，若使用的Java版本与操作系统位数不匹配（32位或64位）、使用部分Java 7版本，或安装多个Java版本来运行Minecraft Java版，可能会出现一些运行问题。

- 运行Java版需要稳定的互联网连接，用于下载游戏文件、验证用户名以及连接多人游戏服务器。至少需要连接一次互联网以完成Java版的下载和运行；之后可在断开互联网连接的情况下游玩，但接收更新或联机需在联网状态下进行。

- Java版无法在Windows RT平板上运行。

- Java版无法在Chromebook上原生运行，但在设置Crouton后可运行Java（及Java版Minecraft）。

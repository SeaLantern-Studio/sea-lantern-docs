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

## Windows

| 格式 | 说明 |
|------|------|
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${VERSION}_x64-setup.exe`">EXE 安装包</a> | 推荐，双击安装 |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${VERSION}_x64_zh-CN.msi`">MSI 安装包</a> | Windows Installer 格式 |

## macOS

| 格式 | 说明 |
|------|------|
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${VERSION}_aarch64.dmg`">DMG (Apple Silicon)</a> | M1 / M2 / M3 / M4 |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${VERSION}_x64.dmg`">DMG (Intel)</a> | x64 架构 |

## Linux

| 格式 | 说明 |
|------|------|
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${VERSION}_amd64.deb`">DEB</a> | Debian / Ubuntu |
| <a :href="`${RELEASE_BASE}/Sea.Lantern-${VERSION}-1.x86_64.rpm`">RPM</a> | Fedora / RHEL |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${VERSION}_amd64.AppImage`">AppImage</a> | 通用格式 |

Arch Linux 用户可通过 AUR 安装，例如：

```bash
yay -S sealantern
```

## 系统要求

- Windows 10+ / macOS 10.15+ / Linux (glibc 2.31+)
- Java 8+（用于运行 Minecraft 服务端）

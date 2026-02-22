<script setup>
import { VERSION, RELEASE_BASE } from '../.vitepress/version'
</script>

# 下載安裝

請依你的系統選擇對應安裝包下載並安裝。  
- 建議優先使用安裝包格式（Windows 選 EXE，macOS 選 DMG）。
- 若想先看改動內容，請點上方版本號查看更新日誌。

## 最新版本

當前最新版本：
<a :href="`/zh-tw/changelog#v${VERSION.replace(/\./g, '-')}`"><strong>v{{ VERSION }}</strong></a>

## Windows

| 格式 | 說明 |
|------|------|
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${VERSION}_x64-setup.exe`">EXE 安裝包</a> | 推薦，雙擊安裝 |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${VERSION}_x64_zh-CN.msi`">MSI 安裝包</a> | Windows Installer 格式 |

## macOS

| 格式 | 說明 |
|------|------|
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${VERSION}_aarch64.dmg`">DMG (Apple Silicon)</a> | M1 / M2 / M3 / M4 |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${VERSION}_x64.dmg`">DMG (Intel)</a> | x64 架構 |

## Linux

| 格式 | 說明 |
|------|------|
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${VERSION}_amd64.deb`">DEB</a> | Debian / Ubuntu |
| <a :href="`${RELEASE_BASE}/Sea.Lantern-${VERSION}-1.x86_64.rpm`">RPM</a> | Fedora / RHEL |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${VERSION}_amd64.AppImage`">AppImage</a> | 通用格式 |

Arch Linux 使用者可透過 AUR 安裝，例如：

```bash
yay -S sealantern
```

## 系統需求

- Windows 10+ / macOS 10.15+ / Linux (glibc 2.31+)
- Java 8+（用於執行 Minecraft 伺服端）

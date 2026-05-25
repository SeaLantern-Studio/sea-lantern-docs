<script setup>
import { VERSION, RELEASE_BASE, ASSET_VERSION, RPM_ASSET_VERSION, ARCH_PKG_ASSET_VERSION } from '../.vitepress/version'
</script>

# 下載安裝

請依你的系統選擇對應安裝包下載並安裝。  
- 建議優先使用安裝包格式（Windows 選 EXE，macOS 選 DMG）。
- 較為特殊的是Docker
    1. 此版本無頭，這代表著你可以在伺服器運行
    2. 此版本跨平台，可以在支持docker的所有平台運行
- 若想先看改動內容，請點上方版本號查看更新日誌。

## 最新版本

當前最新版本：
<a :href="`/zh-tw/changelog#v${VERSION.replace(/\./g, '-')}`"><strong>v{{ VERSION }}</strong></a>

::: tip 架構支援更新（v1.0.0+）
Windows 與 Linux 已提供 ARM64 安裝包，可依裝置架構選擇下載。
:::

## Windows

| 格式 | 說明 |
|------|------|
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_x64-setup.exe`">EXE 安裝包</a> | 推薦，雙擊安裝 |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_x64_zh-CN.msi`">MSI 安裝包</a> | Windows Installer 格式 |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_arm64-setup.exe`">EXE 安裝包 (ARM64)</a> | 適用 Windows on ARM |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_arm64_zh-CN.msi`">MSI 安裝包 (ARM64)</a> | Windows Installer (ARM64) |

## macOS

| 格式 | 說明 |
|------|------|
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_aarch64.dmg`">DMG (Apple Silicon)</a> | M1 / M2 / M3 / M4 |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_x64.dmg`">DMG (Intel)</a> | x64 架構 |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_aarch64.app.tar.gz`">app.tar.gz (Apple Silicon)</a> | 可攜壓縮包 |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_x64.app.tar.gz`">app.tar.gz (Intel)</a> | 可攜壓縮包 |

目前 Release 中的 `dmg` 與 `app.tar.gz` 均尚未完成 Apple 簽名/公證，macOS 可能提示「已損壞，無法開啟」或「無法驗證開發者」。

- `dmg`：先雙擊開啟 DMG，並將 `Sea Lantern.app` 拖到 `/Applications`，再於終端機執行：

```bash
xattr -dr com.apple.quarantine /Applications/Sea\ Lantern.app
```

- `app.tar.gz`：先解壓，再於解壓後的目前目錄執行：

```bash
xattr -dr com.apple.quarantine ./Sea\ Lantern.app
```

若仍被攔截，可到「系統設定 -> 隱私權與安全性」點選「仍要打開」，或在 App 右鍵選單中選擇「打開」。

## Linux

| 格式 | 說明 |
|------|------|
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_amd64.deb`">DEB</a> | Debian / Ubuntu |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_arm64.deb`">DEB (ARM64)</a> | Debian / Ubuntu ARM64 |
| <a :href="`${RELEASE_BASE}/Sea.Lantern-${RPM_ASSET_VERSION}.x86_64.rpm`">RPM</a> | Fedora / RHEL (x86_64) |
| <a :href="`${RELEASE_BASE}/Sea.Lantern-${RPM_ASSET_VERSION}.aarch64.rpm`">RPM (ARM64)</a> | Fedora / RHEL (aarch64) |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_amd64.AppImage`">AppImage</a> | 通用格式 |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_aarch64.AppImage`">AppImage (ARM64)</a> | 通用格式 (ARM64) |
| <a :href="`${RELEASE_BASE}/sealantern-${ARCH_PKG_ASSET_VERSION}-x86_64.pkg.tar.zst`">pkg.tar.zst</a> | Arch Linux 可安裝套件 (x86_64) |

Arch Linux 使用者可透過 AUR 安裝，例如：

```bash
yay -S sealantern
```

### Ubuntu PPA（社群維護）

Ubuntu 使用者可透過 PPA 快速安裝：

```bash
sudo add-apt-repository ppa:brianeee7878/sealantern
sudo apt update
sudo apt install sea-lantern-ppa-updater
```

支援 Ubuntu 20.04 LTS、22.04 LTS 與 24.04 LTS。

該 PPA 為社群維護渠道，不屬於官方發布渠道；若遇到問題請改用上方 DEB 安裝包。

## Docker
1. 安裝docker詳見部分[安裝docker](https://www.bilibili.com/video/BV1vm421T7Kw/?share_source=copy_web&vd_source=67ab86499fd78344263cc23e969c3fe4)
2. 拉取最新的海晶燈docker鏡像
```bash
docker pull penetr4t10n/sealantern:latest
```
3. 運行最新的海晶燈錄像
tip:docker內的網路環境是隔離的所以要把web端口和伺服器端口暴露
```
docker run -d 
--name sealantern 
-p 3000:3000 
-p 25565:25565/tcp 
penetr4t10n/sealantern:latest
```

## 系統需求

- Windows 10+ / macOS 10.15+ / Linux (glibc 2.31+)
- Java 8+（用於執行 Minecraft 伺服端）

<script setup>
import { VERSION, RELEASE_BASE, ASSET_VERSION, RPM_ASSET_VERSION, ARCH_PKG_ASSET_VERSION } from '../.vitepress/version'
</script>

# 下載安裝

## 最新版本

目前最新版本：
<strong>v{{ VERSION }}</strong>

按你的系統選擇對應安裝包下載並安裝。  
- 建議優先使用安裝包格式（Windows 選 exe，macOS 選 dmg）
- 較為特殊的是 Docker
  - 此版本無頭，可以在伺服器執行
  - 此版本跨平台，可以在支援 Docker 的所有平台執行

## Windows

| 格式 | 說明 |
|------|------|
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_x64-setup.exe`">exe 安裝包</a> | 推薦，雙擊安裝 |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_x64_zh-CN.msi`">msi 安裝包</a> | Windows Installer 格式 |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_arm64-setup.exe`">exe 安裝包 (ARM64)</a> | 適用於 Windows on ARM |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_arm64_zh-CN.msi`">msi 安裝包 (ARM64)</a> | Windows Installer (ARM64) |

## macOS

| 格式 | 說明 |
|------|------|
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_aarch64.dmg`">dmg (Apple Silicon)</a> | M1 / M2 / M3 / M4 |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_x64.dmg`">dmg (Intel)</a> | x64 架構 |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_aarch64.app.tar.gz`">app.tar.gz (Apple Silicon)</a> | 可攜壓縮包 |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_x64.app.tar.gz`">app.tar.gz (Intel)</a> | 可攜壓縮包 |

目前 Release 中的 `dmg` 與 `app.tar.gz` 均未進行 Apple 簽名/公證，macOS 可能提示「已損壞，無法開啟」或「無法驗證開發者」。

- `dmg`：先雙擊開啟 DMG，並將 `Sea Lantern.app` 拖到 `/Applications`，再在終端機執行：

```bash
xattr -dr com.apple.quarantine /Applications/Sea\ Lantern.app
```

- `app.tar.gz`：先解壓，再在解壓後的目前目錄執行：

```bash
xattr -dr com.apple.quarantine ./Sea\ Lantern.app
```

若仍被攔截，可在「系統設定 -> 隱私權與安全性」中點擊「仍要打開」，或右鍵應用後選擇「打開」。

## Linux

| 格式 | 說明 |
|------|------|
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_amd64.deb`">deb</a> | Debian / Ubuntu |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_arm64.deb`">deb (ARM64)</a> | Debian / Ubuntu ARM64 |
| <a :href="`${RELEASE_BASE}/Sea.Lantern-${RPM_ASSET_VERSION}.x86_64.rpm`">rpm</a> | Fedora / RHEL (x86_64) |
| <a :href="`${RELEASE_BASE}/Sea.Lantern-${RPM_ASSET_VERSION}.aarch64.rpm`">rpm (ARM64)</a> | Fedora / RHEL (aarch64) |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_amd64.AppImage`">AppImage</a> | 通用格式 |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_aarch64.AppImage`">AppImage (ARM64)</a> | 通用格式 (ARM64) |
| <a :href="`${RELEASE_BASE}/sealantern-${ARCH_PKG_ASSET_VERSION}-x86_64.pkg.tar.zst`">pkg.tar.zst</a> | Arch Linux 可安裝包 (x86_64) |

Arch Linux 使用者可透過 AUR 安裝，例如：

```bash
sudo pacman -S sealantern
```

### Ubuntu PPA（社群維護）

Ubuntu 使用者可透過 PPA 快速安裝：

```bash
sudo add-apt-repository ppa:brianeee7878/sealantern
sudo apt update
sudo apt install sea-lantern-ppa-updater
```

該 PPA 為社群維護渠道，不屬於官方發布渠道；如遇問題請改用上方 deb 安裝包。

## Docker

- 安裝 Docker。詳見 [安裝 Docker](https://www.bilibili.com/video/BV1vm421T7Kw/?share_source=copy_web&vd_source=67ab86499fd78344263cc23e969c3fe4)
- 拉取最新的海晶燈 Docker 映像
  ```bash
  docker pull penetr4t10n/sealantern:latest
  ```
- 執行最新的海晶燈 Docker 映像
  ```
  docker run -d \
    --name sealantern \
    -p 3000:3000 \
    -p 25565:25565/tcp \
    penetr4t10n/sealantern:latest
  ```
:::tip 注意
Docker 內的網路環境是隔離的，因此需要暴露 web 端口和伺服器端口
:::

## 系統要求

- Windows 10+ / macOS 10.15+ / Linux (glibc 2.31+)
- Java 8 及以上（用於執行 Minecraft 伺服器）
## Java 要求
- 來自 Minecraft Wiki 的 Minecraft 對 Java 的執行標準：https://zh.minecraft.wiki/w/Java%E7%89%88
- Java 配置
  * 自 1.12（17w13a）起，執行 Minecraft 的最低要求為 Java 8。若玩家不確定裝置是否已安裝 Java 8，安裝程式會預設自動安裝並使用支援 Minecraft 執行的 Java 版本。
  * 自 1.17（21w19a）起，執行 Minecraft 的最低要求為 Java 16。
  * 自 1.18（1.18-pre2）起，執行 Minecraft 的最低要求為 Java 17。
  * 自 1.20.5（24w14a）起，執行 Minecraft 的最低要求為 Java 21，且作業系統須為 64 位元。
  * 自 26.1（26.1-snapshot-1）起，執行 Minecraft 的最低要求為 Java 25。
- 需要注意的是，若使用的 Java 版本與作業系統位元數不相符（32 位元或 64 位元）、使用部分 Java 7 版本，或安裝多個 Java 版本來執行 Minecraft Java 版，可能會出現一些執行問題。

- 使用 Java 執行階段需要穩定的網際網路連線，用於下載遊戲檔案、驗證使用者名稱以及連線多人遊戲伺服器。至少需要連線一次網際網路以完成 Java 執行階段的下載和執行；之後可在離線狀態下遊玩，但接收更新或連線仍需在連線狀態下進行。

- Java 執行階段無法在 Windows RT 平板上執行。

- Java 執行階段不在 Chromebook 上原生支援，但在設定 Crouton 後可執行（即 Java 版 Minecraft）。

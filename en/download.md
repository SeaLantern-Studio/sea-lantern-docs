<script setup>
import { VERSION, RELEASE_BASE, ASSET_VERSION, ARCH_PKG_ASSET_VERSION } from '../.vitepress/version'
</script>

# Download

Choose the package that matches your system, then install directly.  
- Installer formats are recommended for most users (EXE on Windows, DMG on macOS).
- If you want to review changes first, click the version link above.

## Latest Version

Current latest version:
<a :href="`/en/changelog#v${VERSION.replace(/\./g, '-')}`"><strong>v{{ VERSION }}</strong></a>

::: tip Architecture update (v1.0.0+)
Windows and Linux ARM64 packages are now available. Choose the one matching your device architecture.
:::

## Windows

| Format | Description |
|--------|-------------|
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_x64-setup.exe`">EXE Installer</a> | Recommended, double-click to install |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_x64_zh-CN.msi`">MSI Installer</a> | Windows Installer format |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_arm64-setup.exe`">EXE Installer (ARM64)</a> | For Windows on ARM |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_arm64_zh-CN.msi`">MSI Installer (ARM64)</a> | Windows Installer (ARM64) |

## macOS

| Format | Description |
|--------|-------------|
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_aarch64.dmg`">DMG (Apple Silicon)</a> | M1 / M2 / M3 / M4 |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_x64.dmg`">DMG (Intel)</a> | x64 architecture |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_aarch64.app.tar.gz`">app.tar.gz (Apple Silicon)</a> | Portable archive |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_x64.app.tar.gz`">app.tar.gz (Intel)</a> | Portable archive |

## Linux

| Format | Description |
|--------|-------------|
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_amd64.deb`">DEB</a> | Debian / Ubuntu |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_arm64.deb`">DEB (ARM64)</a> | Debian / Ubuntu ARM64 |
| <a :href="`${RELEASE_BASE}/Sea.Lantern-${ASSET_VERSION}.x86_64.rpm`">RPM</a> | Fedora / RHEL (x86_64) |
| <a :href="`${RELEASE_BASE}/Sea.Lantern-${ASSET_VERSION}.aarch64.rpm`">RPM (ARM64)</a> | Fedora / RHEL (aarch64) |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_amd64.AppImage`">AppImage</a> | Universal format |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_aarch64.AppImage`">AppImage (ARM64)</a> | Universal format (ARM64) |
| <a :href="`${RELEASE_BASE}/sealantern-${ARCH_PKG_ASSET_VERSION}-x86_64.pkg.tar.zst`">pkg.tar.zst</a> | Arch Linux package (x86_64) |

Arch Linux users can install via AUR, for example:

```bash
yay -S sealantern
```

### Ubuntu PPA (Community-maintained)

Ubuntu users can install via PPA:

```bash
sudo add-apt-repository ppa:brianeee7878/sealantern
sudo apt update
sudo apt install sea-lantern-ppa-updater
```

Supports Ubuntu 20.04 LTS, 22.04 LTS, and 24.04 LTS.

This PPA is community-maintained and not an official release channel. If you run into issues, use the DEB package above.

## System Requirements

- Windows 10+ / macOS 10.15+ / Linux (glibc 2.31+)
- Java 8+ (for running Minecraft server)

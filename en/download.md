<script setup>
import { VERSION, RELEASE_BASE } from '../.vitepress/version'
</script>

# Download

Choose the package that matches your system, then install directly.  
- Installer formats are recommended for most users (EXE on Windows, DMG on macOS).
- If you want to review changes first, click the version link above.

## Latest Version

Current latest version:
<a :href="`/en/changelog#v${VERSION.replace(/\./g, '-')}`"><strong>v{{ VERSION }}</strong></a>

## Windows

| Format | Description |
|--------|-------------|
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${VERSION}_x64-setup.exe`">EXE Installer</a> | Recommended, double-click to install |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${VERSION}_x64_zh-CN.msi`">MSI Installer</a> | Windows Installer format |

## macOS

| Format | Description |
|--------|-------------|
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${VERSION}_aarch64.dmg`">DMG (Apple Silicon)</a> | M1 / M2 / M3 / M4 |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${VERSION}_x64.dmg`">DMG (Intel)</a> | x64 architecture |

## Linux

| Format | Description |
|--------|-------------|
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${VERSION}_amd64.deb`">DEB</a> | Debian / Ubuntu |
| <a :href="`${RELEASE_BASE}/Sea.Lantern-${VERSION}-1.x86_64.rpm`">RPM</a> | Fedora / RHEL |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${VERSION}_amd64.AppImage`">AppImage</a> | Universal format |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${VERSION}.pkg.tar.zst`">pkg.tar.zst</a> | Archlinux Installable package|

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

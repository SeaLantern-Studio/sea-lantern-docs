<script setup>
import { VERSION, RELEASE_BASE, ASSET_VERSION, RPM_ASSET_VERSION, ARCH_PKG_ASSET_VERSION } from '../.vitepress/version'
</script>

# Download

## Latest Version

Current latest version:
<strong>v{{ VERSION }}</strong>

Choose the package that matches your system, then download and install it.  
- Installer formats are recommended first (Windows: exe, macOS: dmg)
- Docker is a special case
  - This version is headless and can run on a server
  - This version is cross-platform and can run on any platform that supports Docker

## Windows

| Format | Description |
|--------|-------------|
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_x64-setup.exe`">exe installer</a> | Recommended, double-click to install |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_x64_zh-CN.msi`">msi installer</a> | Windows Installer format |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_arm64-setup.exe`">exe installer (ARM64)</a> | For Windows on ARM |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_arm64_zh-CN.msi`">msi installer (ARM64)</a> | Windows Installer (ARM64) |

## macOS

| Format | Description |
|--------|-------------|
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_aarch64.dmg`">dmg (Apple Silicon)</a> | M1 / M2 / M3 / M4 |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_x64.dmg`">dmg (Intel)</a> | x64 architecture |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_aarch64.app.tar.gz`">app.tar.gz (Apple Silicon)</a> | Portable archive |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_x64.app.tar.gz`">app.tar.gz (Intel)</a> | Portable archive |

The `dmg` and `app.tar.gz` files in the current release are not Apple-signed or notarized. macOS may warn that the app is “damaged” or that the developer cannot be verified.

- `dmg`: open the DMG first, drag `Sea Lantern.app` into `/Applications`, then run this in Terminal:

```bash
xattr -dr com.apple.quarantine /Applications/Sea\ Lantern.app
```

- `app.tar.gz`: extract it first, then run this in the extracted directory:

```bash
xattr -dr com.apple.quarantine ./Sea\ Lantern.app
```

If it is still blocked, open “System Settings -> Privacy & Security” and click “Open Anyway”, or right-click the app and choose “Open”.

## Linux

| Format | Description |
|--------|-------------|
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_amd64.deb`">deb</a> | Debian / Ubuntu |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_arm64.deb`">deb (ARM64)</a> | Debian / Ubuntu ARM64 |
| <a :href="`${RELEASE_BASE}/Sea.Lantern-${RPM_ASSET_VERSION}.x86_64.rpm`">rpm</a> | Fedora / RHEL (x86_64) |
| <a :href="`${RELEASE_BASE}/Sea.Lantern-${RPM_ASSET_VERSION}.aarch64.rpm`">rpm (ARM64)</a> | Fedora / RHEL (aarch64) |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_amd64.AppImage`">AppImage</a> | Universal format |
| <a :href="`${RELEASE_BASE}/Sea.Lantern_${ASSET_VERSION}_aarch64.AppImage`">AppImage (ARM64)</a> | Universal format (ARM64) |
| <a :href="`${RELEASE_BASE}/sealantern-${ARCH_PKG_ASSET_VERSION}-x86_64.pkg.tar.zst`">pkg.tar.zst</a> | Arch Linux installable package (x86_64) |

Arch Linux users can install via AUR, for example:

```bash
sudo pacman -S sealantern
```

### Ubuntu PPA (community-maintained)

Ubuntu users can install quickly via PPA:

```bash
sudo add-apt-repository ppa:brianeee7878/sealantern
sudo apt update
sudo apt install sea-lantern-ppa-updater
```

This PPA is community-maintained and is not an official release channel. If you run into issues, use the deb package above instead.

## Docker

- Install Docker. See [Install Docker](https://www.bilibili.com/video/BV1vm421T7Kw/?share_source=copy_web&vd_source=67ab86499fd78344263cc23e969c3fe4)
- Pull the latest Sea Lantern Docker image
  ```bash
  docker pull penetr4t10n/sealantern:latest
  ```
- Run the latest Sea Lantern Docker image
  ```
  docker run -d \
    --name sealantern \
    -p 3000:3000 \
    -p 25565:25565/tcp \
    penetr4t10n/sealantern:latest
  ```
:::tip Note
The network environment inside Docker is isolated, so the web port and server port need to be exposed.
:::

## System Requirements

- Windows 10+ / macOS 10.15+ / Linux (glibc 2.31+)
- Java 8 or later (for running Minecraft servers)
## Java Requirements
- Minecraft Java requirements from Minecraft Wiki: https://minecraft.wiki/w/Java_Edition
- Java configuration
  * Since 1.12 (17w13a), the minimum requirement for running Minecraft is Java 8. If players are not sure whether Java 8 is installed on their device, the installer automatically installs and uses a Java version that supports Minecraft by default.
  * Since 1.17 (21w19a), the minimum requirement for running Minecraft is Java 16.
  * Since 1.18 (1.18-pre2), the minimum requirement for running Minecraft is Java 17.
  * Since 1.20.5 (24w14a), the minimum requirement for running Minecraft is Java 21, and the operating system must be 64-bit.
  * Since 26.1 (26.1-snapshot-1), the minimum requirement for running Minecraft is Java 25.
- Note that runtime issues may occur if the Java version does not match the operating system architecture (32-bit or 64-bit), if some Java 7 versions are used, or if multiple Java versions are installed to run Minecraft Java Edition.

- The Java runtime requires a stable internet connection to download game files, verify usernames, and connect to multiplayer servers. An internet connection is required at least once to download and run the Java runtime. After that, offline play is possible, but updates and multiplayer still require internet access.

- The Java runtime cannot run on Windows RT tablets.

- The Java runtime is not natively supported on Chromebooks, but it can run after setting up Crouton (that is, Minecraft Java Edition).

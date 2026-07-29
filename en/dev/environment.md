# Environment Setup

Sea Lantern is a Tauri 2 + Vue 3 + Rust project. The development environment needs:

- Node.js: runs the frontend toolchain.
- pnpm: installs and manages frontend dependencies.
- Rust: compiles the backend and Tauri host.
- System build dependencies: allow Tauri to build the desktop app on the current operating system.

Install them in the order below.

## Version Requirements

| Tool | Recommended version |
| --- | --- |
| Node.js | 24 LTS (minimum 20.19.0) |
| pnpm | 9.15.9 |
| Rust | stable |
| Git | latest |

## Install Node.js

Use [fnm](https://www.fnmnode.com/guide/install.html) to install and manage Node.js. fnm supports Windows, macOS, and Linux, and lets you switch versions directly when the project upgrades Node.js.

After installing fnm and configuring your shell according to the fnm documentation, install the Node.js version required by this project:

```bash
fnm install 24
fnm default 24
fnm use 24
node -v
npm -v
```

Make sure `node -v` prints `v24.x` before installing pnpm. The minimum compatible version is Node.js 20.19.0; 24 LTS is recommended. If Node.js downloads are slow, see the mirror configuration in the fnm documentation. If you do not want to use a version manager, use the [official Node.js download page](https://nodejs.org/en/download) instead.

## Install pnpm

Sea Lantern pins pnpm 9.15.9 in `package.json`. Do not use npm or yarn to modify the lockfile.

Use Corepack to pin the pnpm version required by the project:

```bash
npm install --global corepack@latest
corepack enable pnpm
corepack prepare pnpm@9.15.9 --activate
pnpm -v
```

See [pnpm Installation](https://pnpm.io/installation) for the official installation guide.

## Install Rust

Rust should be installed and managed with rustup.

### Windows

1. Open the [official Rust installation page](https://rust-lang.org/tools/install/).
2. Download and run `rustup-init.exe`.
3. If the installer asks you to install Visual Studio C++ Build Tools, follow the prompt.
4. In Visual Studio Installer, select `Desktop development with C++`.
5. Use an MSVC Rust target, such as `x86_64-pc-windows-msvc`.

After installation, reopen PowerShell:

```powershell
rustc --version
cargo --version
rustup show
```

If Tauri later reports C++ linker, `link.exe`, or Windows SDK errors, reopen Visual Studio Installer and confirm that the C++ desktop development components and Windows SDK are installed.

### macOS

Install Xcode Command Line Tools first:

```bash
xcode-select --install
```

Then install Rust:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

After installation, reopen the terminal:

```bash
rustc --version
cargo --version
```

### Linux

Make sure basic build tools are installed first. For Debian / Ubuntu:

```bash
sudo apt update
sudo apt install -y build-essential curl
```

Then install Rust:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

After installation, load the environment variables as prompted, or reopen the terminal:

```bash
rustc --version
cargo --version
```

## Install Tauri System Dependencies

Tauri needs the system WebView and native build tools. See [Tauri Prerequisites](https://v2.tauri.app/start/prerequisites/) for the official guide.

### Windows

Two dependencies are required:

- [Microsoft C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/)
- [Microsoft Edge WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2/)

Windows 10 version 1803 and later usually include WebView2. If build or runtime errors say WebView2 is missing, install the Evergreen Bootstrapper.

### macOS

For desktop development, Xcode Command Line Tools are usually enough:

```bash
xcode-select --install
```

Install full Xcode only if you need signing, packaging, iOS, or broader Apple platform builds.

### Linux

Package names differ by distribution. For Debian / Ubuntu:

```bash
sudo apt update
sudo apt install -y \
  libwebkit2gtk-4.1-dev \
  build-essential \
  curl \
  wget \
  file \
  libxdo-dev \
  libssl-dev \
  libayatana-appindicator3-dev \
  librsvg2-dev
```

If you use Arch, Fedora, openSUSE, Alpine, or NixOS, install the matching packages from [Tauri Prerequisites](https://v2.tauri.app/start/prerequisites/#linux).

## Final Check

Make sure these commands print version numbers:

```bash
node -v
pnpm -v
rustc --version
cargo --version
git --version
```

Then clone the project and install dependencies:

```bash
git clone https://github.com/SeaLantern-Studio/SeaLantern.git
cd SeaLantern
pnpm install
```

Common start command:

```bash
pnpm tauri dev
```

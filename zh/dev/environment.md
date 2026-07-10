# 环境配置

Sea Lantern 是 Tauri 2 + Vue 3 + Rust 项目。开发环境需要准备好：

- Node.js：运行前端工具链。
- pnpm：安装和管理前端依赖。
- Rust：编译后端和 Tauri 宿主。
- 系统构建依赖：让 Tauri 能在当前操作系统上编译桌面应用。

建议按本文顺序安装。

## 版本要求

| 工具 | 建议版本 |
| --- | --- |
| Node.js | 22.12.0+ |
| pnpm | 11.11.0 |
| Rust | stable |
| Git | latest |

## 安装 Node.js

推荐使用 [fnm](https://www.fnmnode.com/zh-cn/guide/install.html) 安装和管理 Node.js。fnm 支持 Windows、macOS 和 Linux，后续项目升级 Node.js 时可以直接切换版本。

按 fnm 文档完成安装和 Shell 配置后，安装项目需要的 Node.js 版本：

```bash
fnm install 22
fnm default 22
fnm use 22
node -v
npm -v
```

确认 `node -v` 显示 `v22.x` 或更高版本后，再继续安装 pnpm。如果 fnm 下载 Node.js 很慢，可以参考 fnm 文档中的镜像配置；不想使用版本管理器时，再考虑 [Node.js 官方下载页](https://nodejs.org/zh-cn/download)。

## 安装 pnpm

Sea Lantern 使用 pnpm。pnpm 官方文档说明，pnpm 11 需要 Node.js 22 或更高版本；因此请先用 fnm 完成 Node.js 安装。

推荐使用 Corepack 固定项目需要的 pnpm 版本：

```bash
npm install --global corepack@latest
corepack enable pnpm
corepack prepare pnpm@11.11.0 --activate
pnpm -v
```

pnpm 官方安装说明见 [pnpm Installation](https://pnpm.io/zh/installation)。

## 安装 Rust

Rust 推荐通过 rustup 安装和管理。

### Windows

1. 打开 [Rust 官方安装页](https://rust-lang.org/zh-CN/tools/install/)。
2. 下载并运行 `rustup-init.exe`。
3. 如果安装器提示安装 Visual Studio C++ Build Tools，请按提示安装。
4. Visual Studio Installer 中需要选择 `Desktop development with C++`。
5. Rust 工具链请选择 MSVC 目标，例如 `x86_64-pc-windows-msvc`。

安装后重新打开 PowerShell：

```powershell
rustc --version
cargo --version
rustup show
```

如果后续 Tauri 编译时报 C++ linker、`link.exe` 或 Windows SDK 相关错误，优先回到 Visual Studio Installer，确认 C++ 桌面开发组件和 Windows SDK 已安装。

### macOS

先安装 Xcode Command Line Tools：

```bash
xcode-select --install
```

然后安装 Rust：

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

安装完成后重开终端：

```bash
rustc --version
cargo --version
```

### Linux

先确保系统有基础编译工具。以 Debian / Ubuntu 为例：

```bash
sudo apt update
sudo apt install -y build-essential curl
```

然后安装 Rust：

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

安装完成后按提示加载环境变量，或直接重开终端：

```bash
rustc --version
cargo --version
```

## 安装 Tauri 系统依赖

Tauri 需要系统 WebView 和原生构建工具。官方说明见 [Tauri Prerequisites](https://v2.tauri.app/start/prerequisites/)。

### Windows

需要两类依赖：

- [Microsoft C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/)
- [Microsoft Edge WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2/)

Windows 10 1803 及更新版本通常已经带有 WebView2；如果构建或运行时报 WebView2 缺失，再安装 Evergreen Bootstrapper。

### macOS

只开发桌面端时，通常安装 Xcode Command Line Tools 即可：

```bash
xcode-select --install
```

如果要处理签名、打包、iOS 或更完整的 Apple 平台构建，再安装完整 Xcode。

### Linux

不同发行版包名不同。以 Debian / Ubuntu 为例：

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

如果你使用 Arch、Fedora、openSUSE、Alpine 或 NixOS，请按 [Tauri Prerequisites](https://v2.tauri.app/zh-cn/start/prerequisites/#linux) 中对应发行版的命令安装。

## 最后检查

确认这些命令都能输出版本号：

```bash
node -v
pnpm -v
rustc --version
cargo --version
git --version
```

确认后再拉取项目并安装依赖：

```bash
git clone https://github.com/SeaLantern-Studio/SeaLantern.git
cd SeaLantern
git switch beta
pnpm install
```

常用启动命令：

```bash
pnpm tauri:dev
```

# 環境配置

Sea Lantern 是 Tauri 2 + Vue 3 + Rust 專案。開發環境需要準備好：

- Node.js：執行前端工具鏈。
- pnpm：安裝和管理前端依賴。
- Rust：編譯後端和 Tauri 宿主。
- 系統建置依賴：讓 Tauri 能在目前作業系統上編譯桌面應用。

建議按本文順序安裝。

## 版本要求

| 工具 | 建議版本 |
| --- | --- |
| Node.js | 22.12.0+ |
| pnpm | 11.11.0 |
| Rust | stable |
| Git | latest |

## 安裝 Node.js

推薦使用 [fnm](https://www.fnmnode.com/zh-cn/guide/install.html) 安裝和管理 Node.js。fnm 支援 Windows、macOS 和 Linux，後續專案升級 Node.js 時可以直接切換版本。

按 fnm 文件完成安裝和 Shell 配置後，安裝專案需要的 Node.js 版本：

```bash
fnm install 22
fnm default 22
fnm use 22
node -v
npm -v
```

確認 `node -v` 顯示 `v22.x` 或更新版本後，再繼續安裝 pnpm。如果 fnm 下載 Node.js 很慢，可以參考 fnm 文件中的鏡像配置；不想使用版本管理器時，再考慮 [Node.js 官方下載頁](https://nodejs.org/zh-tw/download)。

## 安裝 pnpm

Sea Lantern 使用 pnpm。pnpm 官方文件說明，pnpm 11 需要 Node.js 22 或更新版本；因此請先用 fnm 完成 Node.js 安裝。

推薦使用 Corepack 固定專案需要的 pnpm 版本：

```bash
npm install --global corepack@latest
corepack enable pnpm
corepack prepare pnpm@11.11.0 --activate
pnpm -v
```

pnpm 官方安裝說明見 [pnpm Installation](https://pnpm.io/zh-TW/installation)。

## 安裝 Rust

Rust 推薦透過 rustup 安裝和管理。

### Windows

1. 打開 [Rust 官方安裝頁](https://rust-lang.org/zh-TW/tools/install/)。
2. 下載並執行 `rustup-init.exe`。
3. 如果安裝器提示安裝 Visual Studio C++ Build Tools，請按提示安裝。
4. Visual Studio Installer 中需要選擇 `Desktop development with C++`。
5. Rust 工具鏈請選擇 MSVC 目標，例如 `x86_64-pc-windows-msvc`。

安裝後重新打開 PowerShell：

```powershell
rustc --version
cargo --version
rustup show
```

如果後續 Tauri 編譯回報 C++ linker、`link.exe` 或 Windows SDK 相關錯誤，優先回到 Visual Studio Installer，確認 C++ 桌面開發元件和 Windows SDK 已安裝。

### macOS

先安裝 Xcode Command Line Tools：

```bash
xcode-select --install
```

然後安裝 Rust：

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

安裝完成後重開終端機：

```bash
rustc --version
cargo --version
```

### Linux

先確保系統有基礎編譯工具。以 Debian / Ubuntu 為例：

```bash
sudo apt update
sudo apt install -y build-essential curl
```

然後安裝 Rust：

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

安裝完成後按提示載入環境變數，或直接重開終端機：

```bash
rustc --version
cargo --version
```

## 安裝 Tauri 系統依賴

Tauri 需要系統 WebView 和原生建置工具。官方說明見 [Tauri Prerequisites](https://v2.tauri.app/start/prerequisites/)。

### Windows

需要兩類依賴：

- [Microsoft C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/)
- [Microsoft Edge WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2/)

Windows 10 1803 及更新版本通常已經帶有 WebView2；如果建置或執行回報 WebView2 缺失，再安裝 Evergreen Bootstrapper。

### macOS

只開發桌面端時，通常安裝 Xcode Command Line Tools 即可：

```bash
xcode-select --install
```

如果要處理簽名、打包、iOS 或更完整的 Apple 平台建置，再安裝完整 Xcode。

### Linux

不同發行版套件名稱不同。以 Debian / Ubuntu 為例：

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

如果你使用 Arch、Fedora、openSUSE、Alpine 或 NixOS，請按 [Tauri Prerequisites](https://v2.tauri.app/start/prerequisites/#linux) 中對應發行版的命令安裝。

## 最後檢查

確認這些命令都能輸出版本號：

```bash
node -v
pnpm -v
rustc --version
cargo --version
git --version
```

確認後再拉取專案並安裝依賴：

```bash
git clone https://github.com/SeaLantern-Studio/SeaLantern.git
cd SeaLantern
git switch beta
pnpm install
```

常用啟動命令：

```bash
pnpm tauri:dev
```

# 项目简介

Sea Lantern（海晶灯）是一个轻量化的 Minecraft 服务器管理工具，基于 Tauri 2 + Rust + Vue 3 构建。

## 特性

- **实时控制台** — 实时查看服务器日志，直接输入命令，支持命令历史
- **图形化配置** — server.properties 可视化编辑，分类展示，告别手改文件
- **玩家管理** — 白名单、封禁、OP 一键操作
- **插件系统** — 基于 Lua 脚本的插件扩展，支持自定义 UI 组件和右键菜单
- **主题系统** — 5 套内置主题（默认、午夜、海洋、玫瑰、日落），支持明暗模式和亚克力效果
- **多语言支持** — 内置 12 种语言（中文、英语、日语、韩语、法语、德语、西班牙语、俄语、越南语等）
- **Java 管理** — 自动检测已安装的 Java，支持一键下载安装
- **Mod 管理** — 服务端 Mod/插件的查看与管理
- **安全退出** — 关闭软件时自动停止服务器，不会丢失存档
- **自动更新** — 检查新版本，一键下载更新
- **跨平台** — 支持 Windows、macOS、Linux（含 Arch Linux AUR）

## 技术栈

- **前端**: Vue 3 + TypeScript + Vite + Pinia
- **后端**: Rust + Tauri 2
- **样式**: CSS Variables 设计系统 + 主题引擎
- **图表**: ECharts
- **包管理**: pnpm
- **代码检查**: oxlint + oxfmt

没有 Electron，没有 Node 后端，没有 Webpack。启动快，体积小，内存省。

## 交流

QQ 交流群：**293748695**，欢迎加入讨论！

## 开源协议

[GNU General Public License v3.0](https://github.com/SeaLantern-Studio/SeaLantern/blob/main/LICENSE)

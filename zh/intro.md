<script setup>
import FeatureShowcase from '../.vitepress/theme/components/FeatureShowcase.vue'

const featureItems = [
  { title: '实时控制台', desc: '实时查看服务器日志，直接输入命令，支持命令历史。', note: '适合排查启动报错和日常运维，不必频繁切换外部终端。' },
  { title: '图形化配置', desc: 'server.properties 可视化编辑，按分类组织，减少手改文件。', note: '常见参数可快速定位；涉及重启生效的项仍遵循服务端规则。' },
  { title: '玩家管理', desc: '白名单、封禁、OP 一键操作，常用管理集中在一个入口。', note: '在线状态与权限操作集中展示，减少手动记忆复杂指令。' },
  { title: '插件系统', desc: '基于 Lua 脚本扩展，支持自定义 UI 组件、右键菜单与插件市场。', note: '插件权限面板与市场体验在 v1.0.0 持续优化，状态保留更稳定。' },
  { title: '创建流程 2.0', desc: '支持 JAR/脚本/已有服务器导入，智能识别开服方式并可自定义命令。', note: '可在创建阶段自动安装整合包，减少首次开服的手动配置量。' },
  { title: '主题系统', desc: '内置 5 套主题，支持明暗模式；Windows 支持亚克力效果。', note: '主题切换不影响功能布局，主要改变视觉风格与可读性。' },
  { title: '多语言支持', desc: '内置 10 种语言，覆盖中文、英语、日语、韩语等。', note: '支持运行时切换语言，常用术语在界面与文档中尽量保持一致。' },
  { title: 'Java 管理', desc: '自动检测已安装 Java，并支持一键下载安装。', note: '扫描路径在 v1.0.0 扩展，常见安装目录的识别率更高。' },
  { title: 'Mod 管理', desc: '查看服务端已安装的 Mod/插件，并提供基础管理能力。', note: '当前以本地查看与基础维护为主，便于先排查冲突再调整。' },
  { title: '安全退出', desc: '关闭软件时自动停止服务器，降低存档损坏风险。', note: '避免直接强制结束进程，减少世界与玩家数据异常概率。' },
  { title: '自动更新', desc: '检查新版本并跳转下载页面（Arch Linux 使用 AUR 更新）。', note: '桌面端以下载引导为主，不会在后台静默覆盖你的安装。' },
  { title: '跨平台', desc: '支持 Windows、macOS、Linux（含 Arch Linux AUR）。', note: '各平台能力存在差异，文档会单独标注平台特定行为。' },
]
</script>

# 项目简介

Sea Lantern（海晶灯）是一个**轻量化**的 Minecraft 服务器管理工具。  
基于 **Tauri 2 + Rust + Vue 3** 构建。

## 特性

<FeatureShowcase
  :items="featureItems"
  panel-title="功能说明"
/>

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

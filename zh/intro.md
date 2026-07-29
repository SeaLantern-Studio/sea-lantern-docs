<script setup>
import FeatureShowcase from '../.vitepress/theme/components/FeatureShowcase.vue'

const featureItems = [
  { title: '服务器管理', desc: '集中管理多个 Minecraft 服务器及其运行状态。' },
  { title: '服务器创建', desc: '支持 JAR、已有服务器和启动脚本导入，并可自定义启动命令。' },
  { title: '核心下载', desc: '在应用内查找并下载常用 Minecraft 服务端核心。' },
  { title: '实时控制台', desc: '实时查看日志、发送命令并保留命令历史。' },
  { title: '配置管理', desc: '可视化编辑启动配置和 server.properties，支持搜索与差异对比。' },
  { title: '玩家管理', desc: '管理在线玩家、白名单、封禁和 OP 权限。' },
  { title: 'P2P 联机', desc: '无需公网 IP，创建联机隧道并生成联机凭证。' },
  { title: '插件系统', desc: '通过 Lua 插件扩展页面、组件、菜单和应用能力。' },
  { title: '服务端扩展', desc: '查看和管理服务器中的 Mod 与插件文件。' },
  { title: 'Java 管理', desc: '自动检测本机 Java，并支持按需下载安装。' },
  { title: '个性化', desc: '提供多套主题、明暗模式和 Windows 亚克力效果。' },
  { title: '多语言', desc: '内置 10 种语言，支持运行时切换。' },
]
</script>

# 项目简介

Sea Lantern（海晶灯）是一个**轻量化**的 Minecraft 服务器管理工具。

## 特性

<FeatureShowcase
  :items="featureItems"
  panel-title="功能说明"
/>

## 技术栈

- **前端**: Vue 3 + TypeScript + Vite
- **后端**: Rust + Tauri 2
- **通信**: Tauri invoke
- **Docker**: itzg/minecraft-server

没有 Electron，没有 Node 后端，没有 Webpack。启动快，体积小，内存省。

> 使用系统 Webview 渲染。

## 社区

如果你在使用中遇到问题，或者想参与讨论，可以通过以下方式联系我们：

- QQ 一群：**293748695**
- QQ 二群：**1085823754**

## 开源协议

[GNU Affero General Public License v3.0](https://github.com/SeaLantern-Studio/SeaLantern/blob/main/LICENSE)

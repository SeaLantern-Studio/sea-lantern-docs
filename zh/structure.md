# 项目结构

## 技术栈

- **前端**: Vue 3 + TypeScript + Vite + Pinia
- **后端**: Rust + Tauri 2
- **样式**: CSS Variables 设计系统 + 主题引擎
- **图表**: ECharts
- **包管理**: pnpm
- **代码检查**: oxlint + oxfmt

## 目录概览

```
SeaLantern/
├── src/                    # 前端源码 (Vue 3)
│   ├── api/                # Tauri invoke 封装
│   ├── views/              # 页面组件
│   ├── components/         # UI 组件库
│   │   ├── common/         # SL 基础组件（Button、Modal、Select 等）
│   │   ├── layout/         # 布局组件（Header、Sidebar）
│   │   ├── config/         # 配置页组件
│   │   ├── console/        # 控制台组件
│   │   ├── plugin/         # 插件系统组件
│   │   └── splash/         # 启动屏
│   ├── composables/        # 组合式函数（useToast、useAsync 等）
│   ├── stores/             # Pinia 状态管理
│   ├── router/             # Vue Router 路由配置
│   ├── language/           # i18n 多语言文件（10 种语言）
│   ├── themes/             # 主题定义（5 套内置主题）
│   ├── styles/             # 全局样式和 CSS 变量
│   ├── types/              # TypeScript 类型定义
│   ├── utils/              # 工具函数
│   └── data/               # 静态数据
├── src-tauri/              # 后端源码 (Rust)
│   ├── src/
│   │   ├── commands/       # Tauri 命令（前后端通信接口）
│   │   ├── services/       # 业务逻辑服务
│   │   ├── models/         # 数据模型
│   │   ├── plugins/        # Lua 插件运行时
│   │   └── utils/          # 工具函数
│   └── Cargo.toml
└── .github/workflows/      # CI/CD（检查、构建、发布）
```

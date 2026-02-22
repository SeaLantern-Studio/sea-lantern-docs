<div align="center">

<img src="public/logo.ico" alt="logo" width="120" height="120">

# Sea Lantern Docs

[Sea Lantern（海晶灯）](https://github.com/SeaLantern-Studio/SeaLantern) 官方文档站，基于 [VitePress](https://vitepress.dev) 构建

[![deploy](https://img.shields.io/github/actions/workflow/status/SeaLantern-Studio/sea-lantern-docs/deploy.yml?style=flat&logo=github&label=部署)](https://github.com/SeaLantern-Studio/sea-lantern-docs/actions) [![docs](https://img.shields.io/website?url=https%3A%2F%2Fdocs.ideaflash.cn&style=flat&label=文档站)](https://docs.ideaflash.cn) [![license](https://img.shields.io/github/license/SeaLantern-Studio/sea-lantern-docs?style=flat&label=许可证)](./LICENSE)

<kbd>简体中文</kbd> <kbd>[English](README_en.md)</kbd>

---

</div>

## 在线访问

[![docs](https://img.shields.io/website?url=https%3A%2F%2Fdocs.ideaflash.cn&style=for-the-badge&label=docs.ideaflash.cn)](https://docs.ideaflash.cn)

[![docs](https://img.shields.io/website?url=https%3A%2F%2Fsealantern-studio.needhelp.icu&style=for-the-badge&label=sealantern-studio.needhelp.icu)](https://sealantern-studio.needhelp.icu)

支持三种语言：简体中文 · English · 繁體中文

## 本地开发

需要 [Node.js](https://nodejs.org) 20+：

```bash
corepack enable          # 启用 pnpm
pnpm install             # 安装依赖
pnpm dev                 # 启动开发服务器 (localhost:5173)
```

构建与预览：

```bash
pnpm build               # 生产构建
pnpm preview             # 预览构建结果
```

## 目录结构

```
├── .vitepress/           # VitePress 配置与主题
│   ├── config/           # 多语言配置
│   └── theme/            # 自定义主题
├── en/                   # English
├── zh/                   # 简体中文
├── zh-tw/                # 繁體中文
├── public/               # 静态资源
└── index.md              # 首页（重定向到 /zh/intro）
```

## 部署

推送到 `main` 分支后，GitHub Actions 自动构建并部署到服务器。

## 参与贡献

欢迎改进文档！请阅读 [贡献指南](./CONTRIBUTING.md)。

## 许可证

[GPL-3.0](./LICENSE)

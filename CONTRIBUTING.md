# 贡献指南

[English](./CONTRIBUTING_en.md)

感谢你对 Sea Lantern 文档的关注！以下是参与贡献的流程。

## 环境准备

- [Node.js](https://nodejs.org) 24 LTS
- [pnpm](https://pnpm.io) 9.15.9（通过 `corepack enable` 启用）

## 开发流程

1. Fork 本仓库
2. 克隆到本地：
   ```bash
   git clone https://github.com/<your-username>/sea-lantern-docs.git
   cd sea-lantern-docs
   ```
3. 安装依赖并启动：
   ```bash
   pnpm install
   pnpm dev
   ```
4. 浏览器打开 `http://localhost:5173` 预览

## 文档结构

文档按语言分目录存放，三种语言的文件结构保持一致：

| 目录 | 语言 |
|------|------|
| `zh/` | 简体中文 |
| `en/` | English |
| `zh-tw/` | 繁體中文 |

修改内容时，请同步更新所有语言版本。如果不熟悉某种语言，可以只修改你熟悉的版本，在 PR 中注明即可。

## 编写规范

- 使用 Markdown 编写，遵循 [VitePress Markdown 扩展](https://vitepress.dev/guide/markdown) 语法
- 每个页面需要 frontmatter（至少包含标题）
- 图片等静态资源放在 `public/` 目录下
- 保持各语言目录的文件结构一致
- 根目录的 `README.md`、`CONTRIBUTING.md` 等仓库级文件已通过 `srcExclude` 排除构建，**不要在文档页面（`zh/`、`en/`、`zh-tw/`）中链接这些文件**，否则 VitePress 构建时会报 dead link

## 提交 PR

1. 基于 `main` 创建功能分支：
   ```bash
   git checkout -b docs/your-topic
   ```
2. 提交更改前确认构建通过：
   ```bash
   pnpm build
   ```
3. 提交 Pull Request 到 `main` 分支
4. 在 PR 描述中说明修改内容和涉及的语言版本

## 常见贡献场景

- **修复错误**: 修正文档中的错别字、过时信息或失效链接
- **补充内容**: 为已有章节添加更详细的说明或示例
- **新增页面**: 添加新的文档页面（需同时在 VitePress 配置中注册侧边栏）
- **翻译**: 将已有内容翻译为其他语言版本

## 有问题？

- 提交 [Issue](https://github.com/SeaLantern-Studio/sea-lantern-docs/issues)
- QQ 交流群：**293748695**

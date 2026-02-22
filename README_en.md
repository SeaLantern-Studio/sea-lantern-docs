<div align="center">

<img src="public/logo.svg" alt="logo" width="120" height="120">

# Sea Lantern Docs

The official documentation site for [Sea Lantern](https://github.com/SeaLantern-Studio/SeaLantern), built with [VitePress](https://vitepress.dev)

[![deploy](https://img.shields.io/github/actions/workflow/status/SeaLantern-Studio/sea-lantern-docs/deploy.yml?style=flat&logo=github&label=Deploy)](https://github.com/SeaLantern-Studio/sea-lantern-docs/actions) [![docs](https://img.shields.io/website?url=https%3A%2F%2Fdocs.ideaflash.cn&style=flat&label=Docs)](https://docs.ideaflash.cn) [![license](https://img.shields.io/github/license/SeaLantern-Studio/sea-lantern-docs?style=flat&label=License)](./LICENSE)

<kbd>[简体中文](README.md)</kbd> <kbd>English</kbd>

---

</div>

## Live Site

[![docs](https://img.shields.io/website?url=https%3A%2F%2Fdocs.ideaflash.cn&style=for-the-badge&label=docs.ideaflash.cn)](https://docs.ideaflash.cn)

Available in three languages: 简体中文 · English · 繁體中文

## Local Development

Requires [Node.js](https://nodejs.org) 20+:

```bash
corepack enable          # Enable pnpm
pnpm install             # Install dependencies
pnpm dev                 # Start dev server (localhost:5173)
```

Build and preview:

```bash
pnpm build               # Production build
pnpm preview             # Preview build output
```

## Directory Structure

```
├── .vitepress/           # VitePress config & theme
│   ├── config/           # Multi-language config
│   └── theme/            # Custom theme
├── en/                   # English
├── zh/                   # 简体中文
├── zh-tw/                # 繁體中文
├── public/               # Static assets
└── index.md              # Home (redirects to /zh/intro)
```

## Deployment

Pushing to `main` triggers GitHub Actions to build and deploy automatically.

## Contributing

Contributions are welcome! Please read the [Contributing Guide](./CONTRIBUTING_en.md).

## License

[GPL-3.0](./LICENSE)

# Contributing Guide

[中文](./CONTRIBUTING.md)

Thanks for your interest in the Sea Lantern documentation! Here's how to contribute.

## Prerequisites

- [Node.js](https://nodejs.org) 24 LTS
- [pnpm](https://pnpm.io) 9.15.9 (enable via `corepack enable`)

## Development

1. Fork this repository
2. Clone locally:
   ```bash
   git clone https://github.com/<your-username>/sea-lantern-docs.git
   cd sea-lantern-docs
   ```
3. Install dependencies and start:
   ```bash
   pnpm install
   pnpm dev
   ```
4. Open `http://localhost:5173` in your browser

## Documentation Structure

Documentation is organized by language, with all three locales sharing the same file structure:

| Directory | Language |
|-----------|----------|
| `zh/` | Simplified Chinese |
| `en/` | English |
| `zh-tw/` | Traditional Chinese |

Please update all language versions when making changes. If you're not comfortable with a language, just update the ones you know and note it in your PR.

## Writing Guidelines

- Write in Markdown, following [VitePress Markdown Extensions](https://vitepress.dev/guide/markdown)
- Each page needs frontmatter (at least a title)
- Place static assets (images, etc.) in the `public/` directory
- Keep file structures consistent across all language directories
- Root-level files like `README.md` and `CONTRIBUTING.md` are excluded from the build via `srcExclude`. **Do not link to these files from documentation pages** (`zh/`, `en/`, `zh-tw/`), or VitePress will report dead links

## Submitting a PR

1. Create a feature branch from `main`:
   ```bash
   git checkout -b docs/your-topic
   ```
2. Verify the build passes before committing:
   ```bash
   pnpm build
   ```
3. Submit a Pull Request to the `main` branch
4. Describe your changes and which languages are affected in the PR description

## Common Contributions

- **Fix errors**: Correct typos, outdated info, or broken links
- **Add content**: Provide more detailed explanations or examples
- **New pages**: Add new documentation pages (also register them in the VitePress sidebar config)
- **Translation**: Translate existing content to other language versions

## Questions?

- Open an [Issue](https://github.com/SeaLantern-Studio/sea-lantern-docs/issues)
- QQ Group: **293748695**

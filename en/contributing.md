# Contributing

Thanks for your interest in Sea Lantern!

## Development Environment

- Node.js 20+
- Rust stable
- pnpm 9.15.9 (enable via `corepack enable`)

## Development Steps

1. Fork the repository
2. Clone locally
3. Install dependencies: `pnpm install`
4. Start development: `pnpm tauri dev`

## Code Standards

Run before committing:

- Frontend: `pnpm run lint` + `pnpm run fmt:check`
- Backend: `cargo fmt --all -- --check` + `cargo clippy --workspace -- -D warnings`

## Submit a PR

1. Create a feature branch
2. Write code and pass all checks
3. Submit a Pull Request to the `dev` branch

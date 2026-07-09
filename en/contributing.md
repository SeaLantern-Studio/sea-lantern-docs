# Contributing

Thanks for your interest in Sea Lantern!

## Development Environment

| Dependency | Version |
| --- | --- |
| Node.js | 22.12.0+ |
| Rust | stable |
| pnpm | 11.5.3 |

## Development Steps

1. Fork the repository
2. Clone locally
3. Install dependencies: `pnpm --dir frontend install`
4. Start development: `pnpm --dir frontend run tauri:dev`

## Code Standards

Run before committing:

- Frontend: `pnpm --dir frontend run lint` + `pnpm --dir frontend run fmt:check`
- Backend: `cargo fmt --all -- --check` + `cargo clippy --workspace -- -D warnings`

## Submit a PR

1. Create a feature branch
2. Write code and pass all checks
3. Submit a Pull Request to the `beta` branch

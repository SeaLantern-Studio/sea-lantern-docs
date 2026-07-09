# Contributing Guide

Thank you for your interest in Sea Lantern. This guide explains how to contribute to the project.

## Acceptable PR Scope

For contributors outside the project organization, accepted PRs should have clear scope and reasonable review cost. We especially welcome:

- documentation fixes;
- i18n text fixes;
- clear and small typo, link, or wording fixes;
- high-quality, reproducible bug fixes that are not AI-generated in bulk;
- features, refactors, or behavior changes that were discussed in an issue and accepted by the project team.

:::warning Note
For larger feature, architecture, interaction, or directory-structure changes, open an issue first. High-cost PRs submitted without prior discussion may be closed directly.
:::

### Why?

This keeps contribution review manageable, avoids work that conflicts with the development team's current plans, and still leaves room for high-quality fixes and accepted proposals.

Our principle is that the value of a contribution should be greater than the effort required to review it.

Please communicate with the project team before starting larger work.

Development team invitations consider:

- engineering judgment and code quality;
- understanding of project structure, boundaries, and maintenance cost;
- prior project experience and debugging ability;
- communication, collaboration, and willingness to maintain work over time;
- consistency and reliability across contributions.

## Development Environment

| Dependency | Version |
| --- | --- |
| Node.js | 22.12.0+ |
| Rust | stable |
| pnpm | 11.5.3 |

## Code Style

### Rust

1. **Formatting**

   ```bash
   cargo fmt --all
   ```

2. **Checks**

   ```bash
   cargo clippy --workspace -- -D warnings
   ```

3. **Naming**

   - Files: `snake_case`, such as `server_manager.rs`.
   - Functions: `snake_case`, such as `get_server_list`.
   - Structs: `PascalCase`, such as `ServerInstance`.
   - Constants: `SCREAMING_SNAKE_CASE`, such as `MAX_MEMORY`.

4. **Comments**

   - Public APIs should have doc comments.
   - Complex logic should have useful inline comments.
   - Avoid meaningless comments.
   - Avoid unprofessional comments.

5. **Error handling**

   - Return errors with `Result<T, String>` where that is the local pattern.
   - Error messages should be clear and user-friendly.
   - Avoid `unwrap()`. Prefer `?` or `unwrap_or` when appropriate.

### Frontend

1. **Vue components**

   - Use `PascalCase` component names, such as `ServerCard.vue`.
   - Use `<script setup>`.
   - Props and emits must be typed.

2. **TypeScript**

   - Keep strict mode enabled.
   - Avoid `any`; prefer concrete types.
   - Use `PascalCase` for interface names.

3. **Styles**

   - Use CSS variables such as `var(--sl-*)`.
   - Avoid hard-coded colors.
   - Use scoped styles where appropriate.

4. **Formatting and checks**

   ```bash
   pnpm --dir frontend run fmt
   pnpm --dir frontend run fmt:check
   pnpm --dir frontend run lint
   pnpm --dir frontend run lint:fix
   ```

5. **Typed refs**

   - Give declared variables clear types.
   - Avoid `any`.
   - Use generic types with `ref<T>` or `reactive` when needed.

### UI Components and Icons

- Prefer Headless UI for Vue v1 and on-demand icon imports such as Lucide.
- Headless UI provides accessible unstyled interaction primitives such as `Listbox`, `Disclosure`, and `Dialog`.
- Use icon components instead of repeating hard-coded SVG paths.
- Prefer Headless UI `Listbox` for custom select controls, and Lucide icons for common icon needs.

This keeps DOM duplication lower, improves accessibility consistency, and separates behavior from styling.

## Git Workflow

### Branch Naming

- `feat/name` - new feature
- `fix/description` - bug fix
- `refactor/task` - refactor
- `chore/task` - maintenance
- `docs/description` - documentation

### Commits

Commit messages are no longer enforced by local hooks or CI, but they should remain clear and readable.

Recommended style:

```text
feat(scope): add something
fix: fix a specific problem
chore: adjust build or directory structure
```

Run the necessary checks before committing. CI will continue to check quality on PRs and pushes.

### Pull Request Flow

1. **Fork and create a branch**

   ```bash
   git checkout -b feat/your-feature
   ```

2. **Develop and commit**

   ```bash
   cargo fmt --all -- --check
   cargo clippy --workspace -- -D warnings
   pnpm --dir frontend run fmt:check
   pnpm --dir frontend run lint
   pnpm --dir frontend run build

   git add .
   git commit -m "feat(scope): your change"
   ```

3. **Push and open a PR**

   ```bash
   git push origin feat/your-feature
   ```

4. **PR title and description**

   - Keep the title short and clear.
   - Include a summary, test method, and related issue if any.

## Review Standards

### Expected

- CI passes.
- Formatting is correct.
- No clippy warnings.
- No oxlint warnings.
- The feature is complete and usable.
- No obvious performance problems.

### Recommended

- Useful comments where appropriate.
- Tests where applicable.
- Related docs updated.
- UI changes follow the design style.

## FAQ

### How do I run the development environment?

```bash
pnpm --dir frontend install
pnpm --dir frontend run tauri:dev
```

### How do I build a release version?

```bash
pnpm --dir frontend run tauri:build
```

Do not use local builds as official release artifacts.

For official and Nightly releases, follow the current GitHub Actions workflows in the repository.

### What if clippy fails?

1. Read the warning.
2. Try `cargo clippy --fix` for automatic fixes.
3. Fix the remaining issues manually.
4. If a lint is unreasonable, use a scoped `#[allow(clippy::...)]`.

### What if formatting fails?

Try:

```bash
cargo fmt --all
```

## Getting Help

- Ask in an issue.
- Contact maintainers.
- Read the project docs.

## Code of Conduct

- Respect all contributors.
- Stay friendly and professional.
- Accept constructive feedback.
- Help new contributors.

Thank you again for contributing.

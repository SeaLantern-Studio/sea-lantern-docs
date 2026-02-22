# Project Structure

## Tech Stack

- **Frontend**: Vue 3 + TypeScript + Vite + Pinia
- **Backend**: Rust + Tauri 2
- **Styling**: CSS Variables design system + theme engine
- **Charts**: ECharts
- **Package Manager**: pnpm
- **Linting**: oxlint + oxfmt

## Directory Overview

```
SeaLantern/
├── src/                    # Frontend source (Vue 3)
│   ├── api/                # Tauri invoke wrappers
│   ├── views/              # Page components
│   ├── components/         # UI component library
│   │   ├── common/         # SL base components (Button, Modal, Select, etc.)
│   │   ├── layout/         # Layout components (Header, Sidebar)
│   │   ├── config/         # Configuration page components
│   │   ├── console/        # Console components
│   │   ├── plugin/         # Plugin system components
│   │   └── splash/         # Splash screen
│   ├── composables/        # Composables (useToast, useAsync, etc.)
│   ├── stores/             # Pinia state management
│   ├── router/             # Vue Router configuration
│   ├── language/           # i18n language files (10 languages)
│   ├── themes/             # Theme definitions (5 built-in themes)
│   ├── styles/             # Global styles and CSS variables
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions
│   └── data/               # Static data
├── src-tauri/              # Backend source (Rust)
│   ├── src/
│   │   ├── commands/       # Tauri commands (frontend-backend interface)
│   │   ├── services/       # Business logic services
│   │   ├── models/         # Data models
│   │   ├── plugins/        # Lua plugin runtime
│   │   └── utils/          # Utility functions
│   └── Cargo.toml
└── .github/workflows/      # CI/CD (check, build, release)
```

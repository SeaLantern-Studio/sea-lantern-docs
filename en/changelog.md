# Changelog

[GitHub Releases](https://github.com/SeaLantern-Studio/SeaLantern/releases)

## v1.0.1 <Badge type="tip" text="Latest" />

[GitHub Release](https://github.com/SeaLantern-Studio/SeaLantern/releases/tag/v1.0.1)

> 2026-02-27

### Fixes & Improvements
- Replaced installer links
- Added commit conventions and formatting hooks
- Optimized terminal log system with xtermjs and sqlite

---

## v1.0.0

[GitHub Release](https://github.com/SeaLantern-Studio/SeaLantern/releases/tag/v1.0.0)

> 2026-02-26

### Highlights
- Server creation workflow upgraded with modpack auto-install, smart startup-mode detection, and custom startup commands
- Added import capability to bring existing servers/startup files into Sea Lantern
- Plugin system and plugin market improvements: permission panel behavior, state retention, and better download failure feedback
- Expanded Java auto-detection paths and one-click Java installation when runtime is missing
- Upgraded homepage charting with ECharts for clearer status visibility

### Stability & Engineering
- Continued i18n hardening by replacing hardcoded text and fixing multilingual display issues
- Fixed issues in server creation flow, plugin permission panel placement, drag box rendering, and window restore behavior
- Refactored core views (Settings/Home/Player/Paint) to reduce coupling and improve maintainability
- Reworked CI/CD and frontend quality-check workflows for cleaner release pipelines
- Added ARM architecture support in release assets (including Windows/Linux)

---

## v0.6.5

[GitHub Release](https://github.com/SeaLantern-Studio/SeaLantern/releases/tag/sea-lantern-v0.6.5)

> 2026-02-20

### Technical Improvements
- Added composables: useTabIndicator, useAsync, useMessage
- Server status refresh now uses parallel Promise.all
- Enhanced validation for memory/port input fields
- Unified text colors with CSS variables

### Bug Fixes
- Fixed Arch Linux update issues
- Fixed Tab indicator position not updating on language switch
- Fixed sidebar expand/collapse state display logic
- Fixed 0% download progress display anomaly
- Fixed window control button icon direction

### Docs & Engineering
- Added bilingual Pull Request templates
- Restructured project documentation (CN & EN)
- Added Star History chart and contributors wall
- Improved AUR auto-publish workflow

---

## v0.6.2

[GitHub Release](https://github.com/SeaLantern-Studio/SeaLantern/releases/tag/sea-lantern-v0.6.2)

> 2026-02-17

### New Features
- Refactored settings page with auto-save support
- Added Arch Linux package files support
- Added multi-language support: Japanese, Spanish, German, Russian, Vietnamese, British English, Australian English, etc.
- Added meme Chinese i18n support
- Optimized CI check logic for on-demand execution

### UI Improvements
- Optimized homepage UI layout and folder opening interaction
- Enhanced dark mode contrast, added tab indicator animations
- Optimized quote loading logic
- Improved app close event handling

### Technical Improvements
- Refactored console and settings page component structure
- Rewrote pkg.tar.gz build logic
- Fixed Arch desktop icon display issues

---

## v0.6.0

[GitHub Release](https://github.com/SeaLantern-Studio/SeaLantern/releases/tag/sea-lantern-v0.6.0)

> 2026-02-16

### New Features
- System tray menu and single instance enforcement
- Native color theme support
- bat/sh launch script support
- Color editor with color picker
- Custom quick commands
- Contributor info display

### Fixes & Optimizations
- Improved startup stability, fixed TypeScript/runtime issues
- Fixed multi-threaded downloader issues
- Fixed symlink causing duplicate Java detection
- Fixed macOS and Linux disk space calculation
- Fixed offline/stopped/banned reconnection state parsing
- Refactored auto-update flow
- Fixed numerous i18n issues

---

## v0.5.0

[GitHub Release](https://github.com/SeaLantern-Studio/SeaLantern/releases/tag/sea-lantern-v0.5.0)

> 2026-02-14

Massive update. Thanks to every contributor.

---

## v0.4.1

[GitHub Release](https://github.com/SeaLantern-Studio/SeaLantern/releases/tag/v0.4.1)

> 2026-02-14

- Optimized Rust build config with LTO and binary size optimization
- Slimmed down Tokio dependencies
- Added frontend code splitting for improved loading performance

---

## v0.4.0

[GitHub Release](https://github.com/SeaLantern-Studio/SeaLantern/releases/tag/v0.4.0)

> 2026-02-14

- Dark mode support
- Windows acrylic glass blur effect
- Font selection feature
- Java search optimization (Windows registry)
- Linux Wayland white screen fix
- UI component beautification

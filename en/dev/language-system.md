# SeaLantern Language System

The internationalization system supports switching between multiple languages and stores translated text in JSON files.

## Directory Structure

```text
language/
├── index.ts      # i18n core module
├── zh-CN.json    # Simplified Chinese
├── zh-TW.json    # Traditional Chinese
├── en-US.json    # English
├── ja-JP.json    # Japanese
├── ko-KR.json    # Korean
├── de-DE.json    # German
├── es-ES.json    # Spanish
├── fr-FA.json    # Persian
├── ru-RU.json    # Russian
├── vi-VN.json    # Vietnamese
└── README.md
```

## Quick Start

### Use Translations

```typescript
import { i18n } from "@language";

// Get translated text
const text = i18n.t("common.home");

// Translation with variables
const message = i18n.t("home.delete_confirm_message", { server: "MyServer" });

// Switch language
i18n.setLocale("en-US");

// Get current language
const locale = i18n.getLocale();
```

### Use in Vue Components

```typescript
import { i18n } from "@language";

// Reactive current language
const currentLocale = i18n.getLocaleRef();

// Translation function
const t = (key: string) => i18n.t(key);
```

## Add a Language

### 1. Create the Language File

Create a `language-code.json` file under `language/`:

```json
{
  "languageName": "English",
  "common": {
    "app_name": "Sea Lantern",
    "home": "Home",
    "settings": "Settings"
  },
  "home": {
    "title": "Server Management",
    "start": "Start",
    "stop": "Stop"
  }
}
```

### 2. Auto Loading

The language system uses Vite's `import.meta.glob` to scan and load all `.json` files automatically. No manual registration is required.

### 3. Language Code Format

Use the `language-region` format:

| Code | Language |
| --- | --- |
| zh-CN | Simplified Chinese |
| zh-TW | Traditional Chinese |
| en-US | English |
| ja-JP | Japanese |
| ko-KR | Korean |
| de-DE | German |
| es-ES | Spanish |
| ru-RU | Russian |

## File Structure

Language files use nested objects:

```typescript
type TranslationNode = {
  [key: string]: string | TranslationNode;
};

type LanguageFile = TranslationNode & {
  languageName?: string; // Language display name
};
```

### Main Modules

| Module | Description |
| --- | --- |
| `common` | Common text, such as buttons and status labels |
| `sidebar` | Sidebar |
| `home` | Home page |
| `create` | Create server |
| `console` | Console |
| `config` | Config editor |
| `players` | Player management |
| `settings` | Settings |
| `about` | About page |
| `tray` | System tray |

## API Reference

### i18n Instance

| Method | Description |
| --- | --- |
| `t(key, options?)` | Get translated text with variable interpolation |
| `setLocale(locale)` | Set current language |
| `getLocale()` | Get current language code |
| `getLocaleRef()` | Get reactive language reference |
| `getAvailableLocales()` | Get available language list |
| `isSupportedLocale(locale)` | Check whether a language is supported |

### Variable Interpolation

Two placeholder formats are supported:

```json
{
  "welcome": "Welcome, {{name}}!",
  "count": "{count} servers"
}
```

```typescript
i18n.t("welcome", { name: "Player" }); // "Welcome, Player!"
i18n.t("count", { count: 5 }); // "5 servers"
```

## Best Practices

1. **Keep terminology consistent** - use the same wording for the same concept.
2. **Keep text concise** - avoid overly long UI text.
3. **Preserve placeholders** - do not translate <span v-pre>`{{variable}}`</span> or `{variable}` names.
4. **Check pages after adding a language** - make sure translated text fits the UI.

## Contributing Translations

1. Copy `zh-CN.json` or `en-US.json` as a template.
2. Translate all text content.
3. Submit a PR to the GitHub repository.

Thank you for contributing.

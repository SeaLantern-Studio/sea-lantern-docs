# SeaLantern 語言系統

國際化系統支援多語言切換，使用 JSON 檔案儲存翻譯文字。

## 目錄結構

```text
language/
├── index.ts      # i18n 核心模組
├── zh-CN.json    # 簡體中文
├── zh-TW.json    # 繁體中文
├── en-US.json    # 英文
├── ja-JP.json    # 日文
├── ko-KR.json    # 韓文
├── de-DE.json    # 德文
├── es-ES.json    # 西班牙文
├── fr-FA.json    # 波斯文
├── ru-RU.json    # 俄文
├── vi-VN.json    # 越南文
└── README.md
```

## 快速開始

### 使用翻譯

```typescript
import { i18n } from "@language";

// 取得翻譯文字
const text = i18n.t("common.home");

// 帶變數的翻譯
const message = i18n.t("home.delete_confirm_message", { server: "MyServer" });

// 切換語言
i18n.setLocale("en-US");

// 取得目前語言
const locale = i18n.getLocale();
```

### 在 Vue 元件中使用

```typescript
import { i18n } from "@language";

// 響應式取得目前語言
const currentLocale = i18n.getLocaleRef();

// 翻譯函式
const t = (key: string) => i18n.t(key);
```

## 新增語言

### 1. 建立語言檔案

在 `language/` 目錄下建立 `語言代碼.json` 檔案：

```json
{
  "languageName": "繁體中文",
  "common": {
    "app_name": "Sea Lantern",
    "home": "首頁",
    "settings": "設定"
  },
  "home": {
    "title": "伺服器管理",
    "start": "啟動",
    "stop": "停止"
  }
}
```

### 2. 自動載入

語言系統使用 Vite 的 `import.meta.glob` 自動掃描並載入所有 `.json` 檔案，不需要手動註冊。

### 3. 語言代碼規範

使用 `語言-地區` 格式：

| 代碼 | 語言 |
| --- | --- |
| zh-CN | 簡體中文 |
| zh-TW | 繁體中文 |
| en-US | 英文 |
| ja-JP | 日文 |
| ko-KR | 韓文 |
| de-DE | 德文 |
| es-ES | 西班牙文 |
| ru-RU | 俄文 |

## 檔案結構

語言檔案採用巢狀物件結構：

```typescript
type TranslationNode = {
  [key: string]: string | TranslationNode;
};

type LanguageFile = TranslationNode & {
  languageName?: string; // 語言顯示名稱
};
```

### 主要模組

| 模組 | 說明 |
| --- | --- |
| `common` | 通用文字，例如按鈕和狀態 |
| `sidebar` | 側邊欄 |
| `home` | 首頁 |
| `create` | 建立伺服器 |
| `console` | 控制台 |
| `config` | 設定編輯 |
| `players` | 玩家管理 |
| `settings` | 設定 |
| `about` | 關於頁面 |
| `tray` | 系統匣 |

## API 參考

### i18n 實例

| 方法 | 說明 |
| --- | --- |
| `t(key, options?)` | 取得翻譯文字，支援變數插值 |
| `setLocale(locale)` | 設定目前語言 |
| `getLocale()` | 取得目前語言代碼 |
| `getLocaleRef()` | 取得響應式語言引用 |
| `getAvailableLocales()` | 取得所有可用語言 |
| `isSupportedLocale(locale)` | 檢查語言是否支援 |

### 變數插值

支援兩種佔位符格式：

```json
{
  "welcome": "歡迎, {{name}}!",
  "count": "共 {count} 個伺服器"
}
```

```typescript
i18n.t("welcome", { name: "玩家" }); // "歡迎, 玩家!"
i18n.t("count", { count: 5 }); // "共 5 個伺服器"
```

## 最佳實踐

1. **保持一致性** - 相同概念使用相同術語。
2. **簡潔明瞭** - 避免過長的翻譯文字。
3. **保留佔位符** - <span v-pre>`{{variable}}`</span> 和 `{variable}` 不要翻譯。
4. **測試頁面** - 新增語言後檢查所有頁面。

## 貢獻翻譯

1. 複製 `zh-CN.json` 或 `en-US.json` 作為範本。
2. 翻譯所有文字內容。
3. 提交 PR 到 GitHub 儲存庫。

感謝你的貢獻。

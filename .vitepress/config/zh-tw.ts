import { defineConfig, type DefaultTheme } from 'vitepress'

export const zhTw = defineConfig({
  lang: 'zh-TW',
  description: '輕量化的 Minecraft 伺服器管理工具',

  themeConfig: {
    nav: nav(),
    sidebar: sidebar(),

    editLink: {
      pattern: 'https://github.com/SeaLantern-Studio/sea-lantern-docs/edit/main/:path',
      text: '在 GitHub 上編輯此頁',
    },

    footer: {
      message: '基於 GPL-3.0 許可發布',
      copyright: '© 2024-present SeaLantern Studio',
    },

    contributorsGrid: {
      contributionsLabel: '次貢獻',
      loading: '載入貢獻者卡片中…',
      errorGeneric: '載入貢獻者卡片失敗，請稍後重試。',
      errorRateLimit: '已達到 GitHub 請求限制，請稍後再試。',
      errorNotFound: '未找到該儲存庫的貢獻者。',
      errorTooManyRequests: '請求過於頻繁，請稍等片刻後重試。',
    },

    docFooter: {
      prev: '上一頁',
      next: '下一頁',
    },

    outline: {
      label: '頁面導航',
    },

    lastUpdated: {
      text: '最後更新於',
    },

    returnToTopLabel: '回到頂部',
    sidebarMenuLabel: '選單',
    darkModeSwitchLabel: '主題',
    lightModeSwitchTitle: '切換到淺色模式',
    darkModeSwitchTitle: '切換到深色模式',
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: '簡介', link: '/zh-tw/intro' },
    { text: '下載', link: '/zh-tw/download' },
    { text: '快速開始', link: '/zh-tw/getting-started' },
    { text: '功能總覽', link: '/zh-tw/features' },
    { text: '更新日誌', link: '/zh-tw/changelog' },
    { text: '貢獻指南', link: '/zh-tw/contributing' },
  ]
}

function sidebar(): DefaultTheme.Sidebar {
  return {
    '/zh-tw/': [
      { text: '專案簡介', link: '/zh-tw/intro' },
      {
        text: '使用文檔',
        items: [
          { text: '下載安裝', link: '/zh-tw/download' },
          { text: '快速開始', link: '/zh-tw/getting-started' },
          { text: '伺服端核心取得', link: '/zh-tw/server-jar' },
          { text: '使用教學', link: '/zh-tw/tutorial' },
          { text: '功能總覽', link: '/zh-tw/features' },
          { text: '常見問題', link: '/zh-tw/faq' },
        ],
      },
      {
        text: '專案資訊',
        items: [{ text: '更新日誌', link: '/zh-tw/changelog' }],
      },
      {
        text: '開發者',
        collapsed: true,
        items: [
          { text: '貢獻指南', link: '/zh-tw/contributing' },
          { text: '專案結構', link: '/zh-tw/structure' },
          { text: '貢獻者名單', link: '/zh-tw/contributor' },
        ],
      },
    ],
  }
}

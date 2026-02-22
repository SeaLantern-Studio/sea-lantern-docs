import { defineConfig, type DefaultTheme } from 'vitepress'

export const en = defineConfig({
  lang: 'en',
  description: 'A lightweight Minecraft server management tool',

  themeConfig: {
    nav: nav(),
    sidebar: sidebar(),

    footer: {
      message: 'Released under the GPL-3.0 License',
      copyright: '© 2024-present SeaLantern Studio',
    },
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Intro', link: '/en/intro' },
    { text: 'Download', link: '/en/download' },
    { text: 'Getting Started', link: '/en/getting-started' },
    { text: 'Features', link: '/en/features' },
    { text: 'Changelog', link: '/en/changelog' },
    { text: 'Contributing', link: '/en/contributing' },
  ]
}

function sidebar(): DefaultTheme.Sidebar {
  return {
    '/en/': [
      { text: 'Introduction', link: '/en/intro' },
      {
        text: 'Guide',
        items: [
          { text: 'Download', link: '/en/download' },
          { text: 'Getting Started', link: '/en/getting-started' },
          { text: 'Features', link: '/en/features' },
          { text: 'Changelog', link: '/en/changelog' },
        ],
      },
      {
        text: 'Development',
        items: [
          { text: 'Contributing', link: '/en/contributing' },
          { text: 'Project Structure', link: '/en/structure' },
          { text: 'Developers', link: '/en/developers' },
        ],
      },
    ],
  }
}

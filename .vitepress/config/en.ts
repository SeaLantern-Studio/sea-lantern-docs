import { defineConfig, type DefaultTheme } from 'vitepress'

export const en = defineConfig({
  lang: 'en',
  description: 'A lightweight Minecraft server management tool',

  themeConfig: {
    nav: nav(),
    sidebar: sidebar(),

    editLink: {
      pattern: 'https://github.com/SeaLantern-Studio/sea-lantern-docs/edit/main/:path',
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'Released under the GPL-3.0 License',
      copyright: '© 2024-present SeaLantern Studio',
    },

    contributorsGrid: {
      contributionsLabel: 'contributions',
      loading: 'Loading contributors…',
      errorGeneric: 'Failed to load contributors. Please try again later.',
      errorRateLimit: 'GitHub rate limit reached. Please try again in a few minutes.',
      errorNotFound: 'Contributors could not be found for this repository.',
      errorTooManyRequests: 'Too many requests to GitHub. Please wait a moment and try again.',
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
          { text: 'Server JAR Guide', link: '/en/server-jar' },
          { text: 'Tutorial', link: '/en/tutorial' },
          { text: 'Features', link: '/en/features' },
          { text: 'FAQ', link: '/en/faq' },
        ],
      },
      {
        text: 'Project Info',
        items: [{ text: 'Changelog', link: '/en/changelog' }],
      },
      {
        text: 'Development',
        collapsed: true,
        items: [
          { text: 'Contributing', link: '/en/contributing' },
          { text: 'Project Structure', link: '/en/structure' },
          { text: 'Contributors', link: '/en/contributor' },
        ],
      },
    ],
  }
}

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
      loading: 'Loading contributors card…',
      errorGeneric: 'Failed to load contributors card. Please try again later.',
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
    { text: 'Contributing', link: '/en/dev/CONTRIBUTING' },
    { text: 'Privacy & Terms', link: '/en/privacy' },
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
        text: 'Development',
        items: [
          { text: 'Contributors', link: '/en/contributor' },
          {
            text: 'Developer Docs',
            collapsed: true,
            items: [
              { text: 'Environment Setup', link: '/en/dev/environment' },
              { text: 'Language System', link: '/en/dev/language-system' },
              { text: 'Contributing', link: '/en/dev/CONTRIBUTING' },
              { text: 'Project Structure', link: '/en/dev/STRUCTURE' },
              { text: 'Plugin API', link: '/en/dev/plugin_api' },
            ],
          },
        ],
      },
      {
        text: 'About Software',
        items: [
          { text: 'Privacy & Terms', link: '/en/privacy' },
          { text: 'License', link: '/en/license' },
        ],
      },
    ],
  }
}

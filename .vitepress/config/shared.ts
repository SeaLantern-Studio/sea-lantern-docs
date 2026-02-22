import { defineConfig } from 'vitepress'
import { resolveMainUrl } from '../urls'

/** 主站地址：开发环境直接跳 Nuxt 端口，生产环境用相对路径 */
export const mainSiteUrl = resolveMainUrl('/', process.env.NODE_ENV === 'development')

export const shared = defineConfig({
  title: 'Sea Lantern',

  base: '/',
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  ],

  themeConfig: {
    logo: '/logo.ico',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SeaLantern-Studio/SeaLantern' },
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有结果',
                footer: {
                  selectText: '选择',
                  navigateText: '导航',
                  closeText: '关闭',
                },
              },
            },
          },
          'zh-tw': {
            translations: {
              button: { buttonText: '搜尋', buttonAriaLabel: '搜尋' },
              modal: {
                displayDetails: '顯示詳細列表',
                resetButtonTitle: '重置搜尋',
                backButtonTitle: '關閉搜尋',
                noResultsText: '沒有結果',
                footer: {
                  selectText: '選擇',
                  navigateText: '導航',
                  closeText: '關閉',
                },
              },
            },
          },
        },
      },
    },
  },
})

import { defineConfig, type DefaultTheme } from 'vitepress'

export const zh = defineConfig({
  lang: 'zh-CN',
  description: '轻量化的 Minecraft 服务器管理工具',

  themeConfig: {
    nav: nav(),
    sidebar: sidebar(),

    editLink: {
      pattern: 'https://github.com/SeaLantern-Studio/sea-lantern-docs/edit/main/:path',
      text: '在 GitHub 上编辑此页',
    },

    footer: {
      message: '基于 GPL-3.0 许可发布',
      copyright: '© 2024-present SeaLantern Studio',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      label: '页面导航',
    },

    lastUpdated: {
      text: '最后更新于',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: '简介', link: '/zh/intro' },
    { text: '下载', link: '/zh/download' },
    { text: '快速开始', link: '/zh/getting-started' },
    { text: '功能总览', link: '/zh/features' },
    { text: '更新日志', link: '/zh/changelog' },
    { text: '贡献指南', link: '/zh/contributing' },
  ]
}

function sidebar(): DefaultTheme.Sidebar {
  return {
    '/zh/': [
      { text: '项目简介', link: '/zh/intro' },
      {
        text: '使用文档',
        items: [
          { text: '下载安装', link: '/zh/download' },
          { text: '快速开始', link: '/zh/getting-started' },
          { text: '核心获取', link: '/zh/server-jar' },
          { text: '使用教程', link: '/zh/tutorial' },
          { text: '功能总览', link: '/zh/features' },
          { text: '常见问题', link: '/zh/faq' },
        ],
      },
      {
        text: '项目信息',
        items: [{ text: '更新日志', link: '/zh/changelog' }],
      },
      {
        text: '开发者',
        collapsed: true,
        items: [
          { text: '贡献指南', link: '/zh/contributing' },
          { text: '项目结构', link: '/zh/structure' },
          { text: '贡献者名单', link: '/zh/contributor' },
        ],
      },
    ],
  }
}

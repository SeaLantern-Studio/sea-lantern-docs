import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { zh } from './zh'
import { en } from './en'
import { zhTw } from './zh-tw'

export default defineConfig({
  ...shared,

  locales: {
    zh: { label: '简体中文', ...zh },
    en: { label: 'English', ...en },
    'zh-tw': { label: '繁體中文', ...zhTw },
  },
})

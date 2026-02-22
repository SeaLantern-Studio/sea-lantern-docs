/**
 * 主站与文档站的 URL 解析工具。
 * 开发环境下两站运行在不同端口，生产环境使用各自域名。
 */

const NUXT_DEV_ORIGIN = 'http://localhost:3000'
const DOCS_DEV_ORIGIN = 'http://localhost:5173'
const DOCS_PROD_ORIGIN = 'https://docs.ideaflash.cn'
const MAIN_PROD_ORIGIN = 'https://ideaflash.cn'

/** 解析文档站 URL */
export function resolveDocsUrl(path: string, isDev: boolean) {
  return isDev ? `${DOCS_DEV_ORIGIN}${path}` : `${DOCS_PROD_ORIGIN}${path}`
}

/** 解析主站 URL */
export function resolveMainUrl(path: string, isDev: boolean) {
  return isDev ? `${NUXT_DEV_ORIGIN}${path}` : `${MAIN_PROD_ORIGIN}${path}`
}

import 'vitepress'

declare module 'vitepress' {
  namespace DefaultTheme {
    interface Config {
      contributorsGrid?: {
        contributionsLabel?: string
        loading?: string
        errorGeneric?: string
        errorRateLimit?: string
        errorNotFound?: string
        errorTooManyRequests?: string
      }
    }
  }
}

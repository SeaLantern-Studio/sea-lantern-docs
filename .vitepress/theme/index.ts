import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { MAIN_SITE_URL } from '../urls'
import ContributorsGrid from './components/ContributorsGrid.vue'

/** 将 .VPNavBarTitle 内的链接 href 强制指向主站 */
function patchTitleLink() {
  const link = document.querySelector('.VPNavBarTitle a') as HTMLAnchorElement | null
  if (link && link.href !== MAIN_SITE_URL) {
    link.href = MAIN_SITE_URL
  }
}

const enhancerState: {
  observer: MutationObserver | null
  domReadyHandler: (() => void) | null
  rafId: number | null
} = {
  observer: null,
  domReadyHandler: null,
  rafId: null,
}

function cleanupTitleLinkEnhancer() {
  if (typeof document === 'undefined') return

  if (enhancerState.observer) {
    enhancerState.observer.disconnect()
    enhancerState.observer = null
  }

  if (enhancerState.domReadyHandler) {
    document.removeEventListener('DOMContentLoaded', enhancerState.domReadyHandler)
    enhancerState.domReadyHandler = null
  }

  if (enhancerState.rafId !== null) {
    cancelAnimationFrame(enhancerState.rafId)
    enhancerState.rafId = null
  }
}

function initTitleLinkEnhancer() {
  if (typeof document === 'undefined') return

  cleanupTitleLinkEnhancer()

  const startObserve = () => {
    const target = document.body
    if (!target) {
      enhancerState.rafId = requestAnimationFrame(startObserve)
      return
    }

    patchTitleLink()
    enhancerState.observer = new MutationObserver(patchTitleLink)
    enhancerState.observer.observe(target, { childList: true, subtree: true })
    enhancerState.rafId = null
  }

  if (document.readyState === 'loading') {
    const onReady = () => {
      enhancerState.domReadyHandler = null
      startObserve()
    }
    enhancerState.domReadyHandler = onReady
    document.addEventListener('DOMContentLoaded', onReady, { once: true })
  } else {
    startObserve()
  }
}

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp?.(ctx)
    const { app } = ctx
    initTitleLinkEnhancer()
    app.component('ContributorsGrid', ContributorsGrid)
  },
} satisfies Theme

type LocalImportMeta = ImportMeta & {
  hot?: {
    dispose(cb: () => void): void
  }
}

const hot = (import.meta as LocalImportMeta).hot

if (hot) {
  hot.dispose(() => {
    cleanupTitleLinkEnhancer()
  })
}

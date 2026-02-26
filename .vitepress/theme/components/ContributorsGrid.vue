<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useData } from 'vitepress'

const props = withDefaults(defineProps<{
  repo: string
  perPage?: number
  max?: number
}>(), {
  perPage: 100,
  max: 100,
})

const { theme } = useData()
const i18n = computed(() => theme.value.contributorsGrid || {})

const loading = ref(true)
const error = ref('')
const hoveredId = ref<number | null>(null)

interface Contributor {
  id: number
  login: string
  avatar_url: string
  html_url: string
  contributions: number
}

const contributors = ref<Contributor[]>([])

async function fetchContributors() {
  loading.value = true
  error.value = ''
  try {
    const url = `https://api.github.com/repos/${props.repo}/contributors?per_page=${props.perPage}`
    const res = await fetch(url, { headers: { Accept: 'application/vnd.github.v3+json' } })

    if (!res.ok) {
      const status = res.status
      const statusText = res.statusText || ''
      // Log detailed technical information for debugging
      console.error('[ContributorsGrid] Failed to fetch contributors', {
        url,
        status,
        statusText,
      })

      let friendlyMessage = i18n.value.errorGeneric || 'Failed to load contributors. Please try again later.'

      if (status === 403) {
        friendlyMessage = i18n.value.errorRateLimit || 'GitHub rate limit reached. Please try again in a few minutes.'
      } else if (status === 404) {
        friendlyMessage = i18n.value.errorNotFound || 'Contributors could not be found for this repository.'
      } else if (status === 429) {
        friendlyMessage = i18n.value.errorTooManyRequests || 'Too many requests to GitHub. Please wait a moment and try again.'
      }

      throw new Error(friendlyMessage)
    }

    const data = await res.json()

    if (!Array.isArray(data)) {
      console.error('[ContributorsGrid] Unexpected contributors response shape', data)
      throw new Error(i18n.value.errorGeneric || 'Failed to load contributors.')
    }

    const mapped: Contributor[] = data.map((d: any) => ({
      id: d.id,
      login: d.login,
      avatar_url: d.avatar_url,
      html_url: d.html_url,
      contributions: typeof d.contributions === 'number' ? d.contributions : 0,
    }))

    contributors.value = mapped.slice(0, props.max)
  } catch (e: any) {
    console.error('[ContributorsGrid] Error while loading contributors', e)
    error.value = e?.message || i18n.value.errorGeneric || 'Failed to load contributors.'
  } finally {
    loading.value = false
  }
}

onMounted(fetchContributors)
</script>

<template>
  <div class="sl-contrib">
    <div v-if="loading" class="sl-contrib__message">{{ i18n.loading || 'Loading contributors…' }}</div>
    <div v-else-if="error" class="sl-contrib__message">{{ error }}</div>
    <div v-else class="sl-contrib__card">
      <div class="sl-contrib__grid">
        <a
          v-for="c in contributors"
          :key="c.id"
          :href="c.html_url"
          class="sl-contrib__item"
          target="_blank"
          rel="noopener noreferrer"
          @mouseenter="hoveredId = c.id"
          @mouseleave="hoveredId = null"
        >
          <img :src="c.avatar_url" :alt="c.login" class="sl-contrib__avatar" />
          <span class="sl-contrib__name">{{ c.login }}</span>
          <div
            class="sl-contrib__tooltip"
            :class="{ 'is-visible': hoveredId === c.id }"
            :aria-hidden="hoveredId !== c.id"
          >
            {{ c.login }} — {{ c.contributions }} {{ i18n.contributionsLabel || 'contributions' }}
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sl-contrib__message {
  color: var(--vp-c-text-2);
  margin: 8px 0 12px;
}
.sl-contrib__card {
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 16px 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
}
.sl-contrib__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(72px, 1fr));
  gap: 4px;
  align-items: center;
}
.sl-contrib__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
  padding: 4px 2px;
  border-radius: 6px;
  transition: background-color 0.2s;
  position: relative;
}
.sl-contrib__item:hover {
  background-color: var(--vp-c-bg-mute);
}
.sl-contrib__avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
}
.sl-contrib__name {
  margin-top: 2px;
  font-size: 11px;
  max-width: 64px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--vp-c-text-1);
}
.sl-contrib__tooltip {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(4px) scale(0.98);
  margin-top: 2px;
  padding: 6px 12px;
  background-color: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1);
  font-size: 12px;
  white-space: nowrap;
  border-radius: 6px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);
  z-index: 10;
  pointer-events: none;
  border: 1px solid var(--vp-c-divider);
  opacity: 0;
  transform-origin: 50% 0%;
  transition: opacity 180ms cubic-bezier(.2,.9,.2,1), transform 180ms cubic-bezier(.2,.9,.2,1);
}
.sl-contrib__tooltip.is-visible {
  opacity: 1;
  transform: translateX(-50%) translateY(0) scale(1);
}

.sl-contrib__avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  transition: transform 180ms cubic-bezier(.2,.9,.2,1);
}
.sl-contrib__item:hover .sl-contrib__avatar {
  transform: translateY(-4px) scale(1.03);
}
</style>
<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = withDefaults(defineProps<{
  repo: string
  perPage?: number
  max?: number
}>(), {
  perPage: 100,
  max: 100,
})

const loading = ref(true)
const error = ref('')
const contributors = ref<any[]>([])

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

      let friendlyMessage = 'Failed to load contributors. Please try again later.'

      if (status === 403) {
        friendlyMessage = 'GitHub rate limit reached. Please try again in a few minutes.'
      } else if (status === 404) {
        friendlyMessage = 'Contributors could not be found for this repository.'
      } else if (status === 429) {
        friendlyMessage = 'Too many requests to GitHub. Please wait a moment and try again.'
      }

      throw new Error(friendlyMessage)
    }

    const data = await res.json()

    if (!Array.isArray(data)) {
      console.error('[ContributorsGrid] Unexpected contributors response shape', data)
      throw new Error('Failed to load contributors.')
    }

    contributors.value = data.slice(0, props.max)
  } catch (e: any) {
    console.error('[ContributorsGrid] Error while loading contributors', e)
    error.value = e?.message || 'Failed to load contributors.'
  } finally {
    loading.value = false
  }
}

onMounted(fetchContributors)
</script>

<template>
  <div class="sl-contrib">
    <div v-if="loading" class="sl-contrib__message">Loading contributors…</div>
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
          :title="`${c.login} — ${c.contributions} contributions`"
        >
          <img :src="c.avatar_url" :alt="c.login" class="sl-contrib__avatar" />
          <span class="sl-contrib__name">{{ c.login }}</span>
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
</style>
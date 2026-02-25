<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = withDefaults(defineProps<{
  repo: string
  perPage?: number
  max?: number
  cacheTTL?: number
}>(), {
  perPage: 100,
  max: 100,
  cacheTTL: 60 * 60 * 1000,
})

const loading = ref(true)
const error = ref('')
const contributors = ref<any[]>([])

const cacheKey = `github-contributors:${props.repo}:${props.perPage}:${props.max}`

function loadCache() {
  try {
    const cached = localStorage.getItem(cacheKey)
    if (!cached) return null
    const { timestamp, data } = JSON.parse(cached)
    if (Date.now() - timestamp > props.cacheTTL) {
      localStorage.removeItem(cacheKey)
      return null
    }
    return data
  } catch {
    return null
  }
}

function saveCache(data: any[]) {
  try {
    localStorage.setItem(cacheKey, JSON.stringify({ timestamp: Date.now(), data }))
  } catch {}
}

async function fetchContributors() {
  const cached = loadCache()
  if (cached) {
    contributors.value = cached.slice(0, props.max)
    loading.value = false
    return
  }

  loading.value = true
  error.value = ''
  try {
    const url = `https://api.github.com/repos/${props.repo}/contributors?per_page=${props.perPage}`
    const res = await fetch(url, { headers: { Accept: 'application/vnd.github.v3+json' } })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    if (!Array.isArray(data)) throw new Error('Invalid response')
    contributors.value = data.slice(0, props.max)
    saveCache(contributors.value)
  } catch (e: any) {
    error.value = e.message || String(e)
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
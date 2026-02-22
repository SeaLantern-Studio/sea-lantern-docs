<script setup lang="ts">
import { computed, getCurrentInstance, ref, watch } from 'vue'

interface FeatureItem {
  title: string
  desc: string
  note?: string
}

const props = withDefaults(defineProps<{
  items: FeatureItem[]
  panelTitle?: string
  panelHint?: string
}>(), {
  panelTitle: 'Feature Details',
  panelHint: '',
})

const activeIndex = ref(0)
const instanceId = getCurrentInstance()?.uid ?? Math.random().toString(36).slice(2)
const panelId = `sl-showcase-panel-${instanceId}`

watch(
  () => props.items,
  (items) => {
    if (!items.length) {
      activeIndex.value = -1
      return
    }
    if (activeIndex.value < 0 || activeIndex.value >= items.length) {
      activeIndex.value = 0
    }
  },
  { immediate: true },
)

const activeItem = computed(() => props.items[activeIndex.value] ?? { title: '', desc: '', note: '' })
const activeTabId = computed(() => `sl-showcase-tab-${instanceId}-${Math.max(activeIndex.value, 0)}`)

function setActive(index: number) {
  activeIndex.value = index
}

function getTabId(index: number) {
  return `sl-showcase-tab-${instanceId}-${index}`
}
</script>

<template>
  <div v-if="items.length" class="sl-showcase">
    <div class="sl-showcase__tags" role="tablist" :aria-label="panelTitle">
      <div
        v-for="(item, index) in items"
        :key="item.title"
        class="sl-showcase__item"
      >
        <button
          class="sl-showcase__pill"
          :class="{ 'is-active': index === activeIndex }"
          :id="getTabId(index)"
          role="tab"
          :aria-selected="index === activeIndex"
          :aria-controls="panelId"
          :tabindex="index === activeIndex ? 0 : -1"
          @mouseenter="setActive(index)"
          @focus="setActive(index)"
          @click="setActive(index)"
        >
          <span class="sl-showcase__pill-text">{{ item.title }}</span>
        </button>
      </div>
    </div>

    <aside
      class="sl-showcase__panel"
      role="tabpanel"
      :id="panelId"
      :aria-labelledby="activeTabId"
      aria-live="polite"
    >
      <p class="sl-showcase__eyebrow">{{ panelTitle }}</p>
      <h3 class="sl-showcase__title">{{ activeItem.title }}</h3>
      <p class="sl-showcase__desc">{{ activeItem.desc }}</p>
      <p v-if="activeItem.note" class="sl-showcase__note">{{ activeItem.note }}</p>
      <p v-if="panelHint" class="sl-showcase__hint">{{ panelHint }}</p>
    </aside>
  </div>
</template>

<style scoped>
.sl-showcase {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(260px, 0.9fr);
  gap: 16px;
  margin: 14px 0 22px;
}

.sl-showcase__tags {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  align-content: start;
}

.sl-showcase__item {
  min-width: 0;
}

.sl-showcase__pill {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 56px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  background: color-mix(in srgb, var(--vp-c-bg-soft) 90%, white 10%);
  color: var(--vp-c-text-1);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25;
  text-align: center;
  padding: 8px 10px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.sl-showcase__pill:hover,
.sl-showcase__pill:focus-visible,
.sl-showcase__pill.is-active {
  border-color: color-mix(in srgb, var(--vp-c-brand-1) 50%, var(--vp-c-divider));
  background: linear-gradient(
    145deg,
    color-mix(in srgb, var(--vp-c-brand-1) 16%, var(--vp-c-bg-soft)),
    color-mix(in srgb, var(--vp-c-brand-soft) 65%, var(--vp-c-bg-soft))
  );
  color: color-mix(in srgb, var(--vp-c-brand-1) 82%, var(--vp-c-text-1));
  transform: translateY(-1px);
  box-shadow: 0 6px 18px rgb(0 0 0 / 10%);
}

.sl-showcase__pill-text {
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.sl-showcase__panel {
  position: sticky;
  top: 88px;
  border: 1px solid color-mix(in srgb, var(--vp-c-brand-1) 25%, var(--vp-c-divider));
  border-radius: 16px;
  background:
    radial-gradient(circle at 90% 0, color-mix(in srgb, var(--vp-c-brand-soft) 48%, transparent), transparent 50%),
    linear-gradient(160deg, color-mix(in srgb, var(--vp-c-bg-soft) 92%, white 8%), var(--vp-c-bg-soft));
  padding: 14px 14px 12px;
}

.sl-showcase__eyebrow {
  margin: 0 0 6px;
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.sl-showcase__title {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: 22px;
  line-height: 1.2;
}

.sl-showcase__desc {
  margin: 10px 0 0;
  color: var(--vp-c-text-1);
  font-size: 15px;
  line-height: 1.7;
}

.sl-showcase__note {
  margin: 8px 0 0;
  color: var(--vp-c-text-2);
  font-size: 13px;
  line-height: 1.6;
}

.sl-showcase__hint {
  margin: 10px 0 0;
  color: var(--vp-c-text-3);
  font-size: 12px;
}

@media (max-width: 960px) {
  .sl-showcase {
    grid-template-columns: 1fr;
  }

  .sl-showcase__tags {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .sl-showcase__panel {
    position: static;
    order: -1;
  }
}

@media (max-width: 768px) {
  .sl-showcase__tags {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .sl-showcase__pill {
    font-size: 15px;
    min-height: 50px;
    border-radius: 12px;
  }
}
</style>

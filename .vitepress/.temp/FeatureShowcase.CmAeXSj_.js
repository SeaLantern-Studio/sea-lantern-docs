import { defineComponent, ref, getCurrentInstance, watch, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FeatureShowcase",
  __ssrInlineRender: true,
  props: {
    items: {},
    panelTitle: { default: "Feature Details" },
    panelHint: { default: "" }
  },
  setup(__props) {
    var _a;
    const props = __props;
    const activeIndex = ref(0);
    const instanceId = ((_a = getCurrentInstance()) == null ? void 0 : _a.uid) ?? Math.random().toString(36).slice(2);
    const panelId = `sl-showcase-panel-${instanceId}`;
    watch(
      () => props.items,
      (items) => {
        if (!items.length) {
          activeIndex.value = -1;
          return;
        }
        if (activeIndex.value < 0 || activeIndex.value >= items.length) {
          activeIndex.value = 0;
        }
      },
      { immediate: true }
    );
    const activeItem = computed(() => props.items[activeIndex.value] ?? { title: "", desc: "", note: "" });
    const activeTabId = computed(() => `sl-showcase-tab-${instanceId}-${Math.max(activeIndex.value, 0)}`);
    function getTabId(index) {
      return `sl-showcase-tab-${instanceId}-${index}`;
    }
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.items.length) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "sl-showcase" }, _attrs))} data-v-9dd08cfe><div class="sl-showcase__tags" role="tablist"${ssrRenderAttr("aria-label", __props.panelTitle)} data-v-9dd08cfe><!--[-->`);
        ssrRenderList(__props.items, (item, index) => {
          _push(`<div class="sl-showcase__item" data-v-9dd08cfe><button class="${ssrRenderClass([{ "is-active": index === activeIndex.value }, "sl-showcase__pill"])}"${ssrRenderAttr("id", getTabId(index))} role="tab"${ssrRenderAttr("aria-selected", index === activeIndex.value)}${ssrRenderAttr("aria-controls", panelId)}${ssrRenderAttr("tabindex", index === activeIndex.value ? 0 : -1)} data-v-9dd08cfe><span class="sl-showcase__pill-text" data-v-9dd08cfe>${ssrInterpolate(item.title)}</span></button></div>`);
        });
        _push(`<!--]--></div><aside class="sl-showcase__panel" role="tabpanel"${ssrRenderAttr("id", panelId)}${ssrRenderAttr("aria-labelledby", activeTabId.value)} aria-live="polite" data-v-9dd08cfe><p class="sl-showcase__eyebrow" data-v-9dd08cfe>${ssrInterpolate(__props.panelTitle)}</p><h3 class="sl-showcase__title" data-v-9dd08cfe>${ssrInterpolate(activeItem.value.title)}</h3><p class="sl-showcase__desc" data-v-9dd08cfe>${ssrInterpolate(activeItem.value.desc)}</p>`);
        if (activeItem.value.note) {
          _push(`<p class="sl-showcase__note" data-v-9dd08cfe>${ssrInterpolate(activeItem.value.note)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.panelHint) {
          _push(`<p class="sl-showcase__hint" data-v-9dd08cfe>${ssrInterpolate(__props.panelHint)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</aside></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/FeatureShowcase.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FeatureShowcase = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9dd08cfe"]]);
export {
  FeatureShowcase as F
};

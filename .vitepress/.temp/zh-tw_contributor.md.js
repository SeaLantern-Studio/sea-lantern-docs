import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"貢獻者名單","description":"","frontmatter":{},"headers":[],"relativePath":"zh-tw/contributor.md","filePath":"zh-tw/contributor.md","lastUpdated":1772097349000}');
const _sfc_main = { name: "zh-tw/contributor.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContributorsGrid = resolveComponent("ContributorsGrid");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="貢獻者名單" tabindex="-1">貢獻者名單 <a class="header-anchor" href="#貢獻者名單" aria-label="Permalink to &quot;貢獻者名單&quot;">​</a></h1><p>感謝所有為 Sea Lantern 做出貢獻的開發者。</p>`);
  _push(ssrRenderComponent(_component_ContributorsGrid, { repo: "SeaLantern-Studio/SeaLantern" }, null, _parent));
  _push(`<p>詳見 <a href="https://github.com/SeaLantern-Studio/SeaLantern/graphs/contributors" target="_blank" rel="noreferrer">GitHub Contributors</a>。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh-tw/contributor.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contributor = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  contributor as default
};

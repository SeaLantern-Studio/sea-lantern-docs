import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Contributors","description":"","frontmatter":{},"headers":[],"relativePath":"en/contributor.md","filePath":"en/contributor.md","lastUpdated":1772097349000}');
const _sfc_main = { name: "en/contributor.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContributorsGrid = resolveComponent("ContributorsGrid");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h1><p>Thanks to all contributors of Sea Lantern.</p>`);
  _push(ssrRenderComponent(_component_ContributorsGrid, { repo: "SeaLantern-Studio/SeaLantern" }, null, _parent));
  _push(`<p>See <a href="https://github.com/SeaLantern-Studio/SeaLantern/graphs/contributors" target="_blank" rel="noreferrer">GitHub Contributors</a> for the full graph on GitHub.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/contributor.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contributor = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  contributor as default
};

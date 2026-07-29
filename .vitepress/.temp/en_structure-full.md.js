import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Detailed Directory Structure","description":"","frontmatter":{},"headers":[],"relativePath":"en/structure-full.md","filePath":"en/structure-full.md","lastUpdated":1772176403000}');
const _sfc_main = { name: "en/structure-full.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="detailed-directory-structure" tabindex="-1">Detailed Directory Structure <a class="header-anchor" href="#detailed-directory-structure" aria-label="Permalink to &quot;Detailed Directory Structure&quot;">​</a></h1><p>The detailed tree now lives in the developer documentation that tracks <code>main</code>, avoiding a versioned directory snapshot that quickly becomes stale.</p><p><a href="/en/dev/STRUCTURE">View the current project structure</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/structure-full.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const structureFull = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  structureFull as default
};

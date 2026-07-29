import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Project Structure","description":"","frontmatter":{},"headers":[],"relativePath":"en/structure.md","filePath":"en/structure.md","lastUpdated":1772176403000}');
const _sfc_main = { name: "en/structure.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="project-structure" tabindex="-1">Project Structure <a class="header-anchor" href="#project-structure" aria-label="Permalink to &quot;Project Structure&quot;">​</a></h1><p>Sea Lantern currently uses a Vue 3 frontend and a Rust workspace. The frontend lives in the root <code>src/</code> directory; Rust code is split across <code>core</code>, <code>infra</code>, <code>extra</code>, application services, and host entry points.</p><p>The project is under active development, so structure documentation follows the repository&#39;s <code>main</code> branch.</p><p><a href="/en/dev/STRUCTURE">View the current layout and module responsibilities</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/structure.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const structure = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  structure as default
};

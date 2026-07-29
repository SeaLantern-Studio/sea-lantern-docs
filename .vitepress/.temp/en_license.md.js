import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"License","description":"","frontmatter":{},"headers":[],"relativePath":"en/license.md","filePath":"en/license.md","lastUpdated":1783636422000}');
const _sfc_main = { name: "en/license.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="license" tabindex="-1">License <a class="header-anchor" href="#license" aria-label="Permalink to &quot;License&quot;">​</a></h1><p>Sea Lantern is licensed under the <strong>GNU Affero General Public License v3.0 (AGPLv3)</strong>.</p><p>AGPLv3 extends GPLv3 with source-availability requirements for software used over a network. Read the complete license before using, modifying, or distributing Sea Lantern.</p><ul><li><a href="https://github.com/SeaLantern-Studio/SeaLantern/blob/main/LICENSE" target="_blank" rel="noreferrer">Full license in the main repository</a></li><li><a href="https://www.gnu.org/licenses/agpl-3.0.html" target="_blank" rel="noreferrer">Official GNU AGPLv3 information</a></li></ul><p>The documentation site&#39;s source code is licensed under the <a href="https://github.com/SeaLantern-Studio/sea-lantern-docs/blob/main/LICENSE" target="_blank" rel="noreferrer">MIT License</a>.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/license.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const license = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  license as default
};

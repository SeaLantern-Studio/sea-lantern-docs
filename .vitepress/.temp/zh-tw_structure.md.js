import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"專案結構","description":"","frontmatter":{},"headers":[],"relativePath":"zh-tw/structure.md","filePath":"zh-tw/structure.md","lastUpdated":1772176403000}');
const _sfc_main = { name: "zh-tw/structure.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="專案結構" tabindex="-1">專案結構 <a class="header-anchor" href="#專案結構" aria-label="Permalink to &quot;專案結構&quot;">​</a></h1><p>Sea Lantern 目前採用 Vue 3 前端與 Rust workspace：前端位於根目錄 <code>src/</code>，Rust 程式碼按 <code>core</code>、<code>infra</code>、<code>extra</code>、應用服務和宿主入口拆分。</p><p>專案仍在持續開發，結構說明以主儲存庫 <code>main</code> 分支為準。</p><p><a href="/zh-tw/dev/STRUCTURE">查看目前專案結構與模組職責</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh-tw/structure.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const structure = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  structure as default
};

import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"詳細目錄結構","description":"","frontmatter":{},"headers":[],"relativePath":"zh-tw/structure-full.md","filePath":"zh-tw/structure-full.md","lastUpdated":1772176403000}');
const _sfc_main = { name: "zh-tw/structure-full.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="詳細目錄結構" tabindex="-1">詳細目錄結構 <a class="header-anchor" href="#詳細目錄結構" aria-label="Permalink to &quot;詳細目錄結構&quot;">​</a></h1><p>詳細目錄說明已合併到持續跟隨 <code>main</code> 分支的開發者文件，避免按舊版本保存的目錄快照長期失效。</p><p><a href="/zh-tw/dev/STRUCTURE">查看目前專案結構</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh-tw/structure-full.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const structureFull = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  structureFull as default
};

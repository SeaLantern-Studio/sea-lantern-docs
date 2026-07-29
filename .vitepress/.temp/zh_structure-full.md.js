import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"详细目录结构","description":"","frontmatter":{},"headers":[],"relativePath":"zh/structure-full.md","filePath":"zh/structure-full.md","lastUpdated":1772176403000}');
const _sfc_main = { name: "zh/structure-full.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="详细目录结构" tabindex="-1">详细目录结构 <a class="header-anchor" href="#详细目录结构" aria-label="Permalink to &quot;详细目录结构&quot;">​</a></h1><p>详细目录说明已合并到持续跟随 <code>main</code> 分支的开发者文档，避免按旧版本保存的目录快照长期失效。</p><p><a href="/zh/dev/STRUCTURE">查看当前项目结构</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/structure-full.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const structureFull = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  structureFull as default
};

import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"项目结构","description":"","frontmatter":{},"headers":[],"relativePath":"zh/structure.md","filePath":"zh/structure.md","lastUpdated":1772176403000}');
const _sfc_main = { name: "zh/structure.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="项目结构" tabindex="-1">项目结构 <a class="header-anchor" href="#项目结构" aria-label="Permalink to &quot;项目结构&quot;">​</a></h1><p>Sea Lantern 当前采用 Vue 3 前端与 Rust workspace：前端位于根目录 <code>src/</code>，Rust 代码按 <code>core</code>、<code>infra</code>、<code>extra</code>、应用服务和宿主入口拆分。</p><p>项目仍在持续开发，结构说明以主仓库 <code>main</code> 分支为准。</p><p><a href="/zh/dev/STRUCTURE">查看当前项目结构与模块职责</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/structure.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const structure = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  structure as default
};

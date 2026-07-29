import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"许可证","description":"","frontmatter":{},"headers":[],"relativePath":"zh/license.md","filePath":"zh/license.md","lastUpdated":1783636422000}');
const _sfc_main = { name: "zh/license.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="许可证" tabindex="-1">许可证 <a class="header-anchor" href="#许可证" aria-label="Permalink to &quot;许可证&quot;">​</a></h1><p>Sea Lantern 软件使用 <strong>GNU Affero General Public License v3.0（AGPLv3）</strong>。</p><p>AGPLv3 在 GPLv3 的基础上增加了网络交互场景下的源代码提供义务。使用、修改或分发 Sea Lantern 前，请阅读完整许可证文本。</p><ul><li><a href="https://github.com/SeaLantern-Studio/SeaLantern/blob/main/LICENSE" target="_blank" rel="noreferrer">查看主仓库中的完整许可证</a></li><li><a href="https://www.gnu.org/licenses/agpl-3.0.html" target="_blank" rel="noreferrer">GNU AGPLv3 官方说明</a></li></ul><p>本文档站的源码使用 <a href="https://github.com/SeaLantern-Studio/sea-lantern-docs/blob/main/LICENSE" target="_blank" rel="noreferrer">MIT License</a>。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/license.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const license = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  license as default
};

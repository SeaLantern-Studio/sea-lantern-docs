import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"授權條款","description":"","frontmatter":{},"headers":[],"relativePath":"zh-tw/license.md","filePath":"zh-tw/license.md","lastUpdated":1783636422000}');
const _sfc_main = { name: "zh-tw/license.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="授權條款" tabindex="-1">授權條款 <a class="header-anchor" href="#授權條款" aria-label="Permalink to &quot;授權條款&quot;">​</a></h1><p>Sea Lantern 軟體使用 <strong>GNU Affero General Public License v3.0（AGPLv3）</strong>。</p><p>AGPLv3 在 GPLv3 的基礎上增加了網路互動情境下的原始碼提供義務。使用、修改或散佈 Sea Lantern 前，請閱讀完整授權條款。</p><ul><li><a href="https://github.com/SeaLantern-Studio/SeaLantern/blob/main/LICENSE" target="_blank" rel="noreferrer">查看主儲存庫中的完整授權條款</a></li><li><a href="https://www.gnu.org/licenses/agpl-3.0.html" target="_blank" rel="noreferrer">GNU AGPLv3 官方說明</a></li></ul><p>本文件站的原始碼使用 <a href="https://github.com/SeaLantern-Studio/sea-lantern-docs/blob/main/LICENSE" target="_blank" rel="noreferrer">MIT License</a>。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh-tw/license.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const license = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  license as default
};

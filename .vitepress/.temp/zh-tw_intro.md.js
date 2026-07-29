import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { F as FeatureShowcase } from "./FeatureShowcase.CmAeXSj_.js";
import { useSSRContext } from "vue";
import "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"專案簡介","description":"","frontmatter":{},"headers":[],"relativePath":"zh-tw/intro.md","filePath":"zh-tw/intro.md","lastUpdated":1772176403000}');
const __default__ = { name: "zh-tw/intro.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const featureItems = [
      { title: "伺服器管理", desc: "集中管理多個 Minecraft 伺服器及其執行狀態。" },
      { title: "伺服器建立", desc: "支援 JAR、既有伺服器和啟動腳本匯入，並可自訂啟動命令。" },
      { title: "核心下載", desc: "在應用內查找並下載常用 Minecraft 伺服端核心。" },
      { title: "即時控制台", desc: "即時查看日誌、傳送命令並保留命令歷史。" },
      { title: "設定管理", desc: "視覺化編輯啟動設定和 server.properties，支援搜尋與差異比較。" },
      { title: "玩家管理", desc: "管理線上玩家、白名單、封禁和 OP 權限。" },
      { title: "Sculk 連線", desc: "無需公網 IP，建立 P2P 連線隧道並產生連線憑證。" },
      { title: "插件系統", desc: "透過 Lua 插件擴充頁面、元件、選單和應用能力。" },
      { title: "伺服端擴充", desc: "查看和管理伺服器中的 Mod 與插件檔案。" },
      { title: "Java 管理", desc: "自動偵測本機 Java，並支援按需下載安裝。" },
      { title: "個人化", desc: "提供多套主題、明暗模式和 Windows 亞克力效果。" },
      { title: "多語言", desc: "內建 10 種語言，支援執行階段切換。" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="專案簡介" tabindex="-1">專案簡介 <a class="header-anchor" href="#專案簡介" aria-label="Permalink to &quot;專案簡介&quot;">​</a></h1><p>Sea Lantern（海晶燈）是一個<strong>輕量化</strong>的 Minecraft 伺服器管理工具。<br> 基於 <strong>Tauri 2 + Rust + Vue 3</strong> 建構。</p><h2 id="特性" tabindex="-1">特性 <a class="header-anchor" href="#特性" aria-label="Permalink to &quot;特性&quot;">​</a></h2>`);
      _push(ssrRenderComponent(FeatureShowcase, {
        items: featureItems,
        "panel-title": "功能說明"
      }, null, _parent));
      _push(`<h2 id="技術棧" tabindex="-1">技術棧 <a class="header-anchor" href="#技術棧" aria-label="Permalink to &quot;技術棧&quot;">​</a></h2><ul><li><strong>前端</strong>: Vue 3 + TypeScript + Vite + Pinia</li><li><strong>後端</strong>: Rust + Tauri 2</li><li><strong>樣式</strong>: CSS Variables 設計系統 + 主題引擎</li><li><strong>圖表</strong>: ECharts</li><li><strong>套件管理</strong>: pnpm</li><li><strong>程式碼檢查</strong>: oxlint + oxfmt</li></ul><p>沒有 Electron，沒有 Node 後端，沒有 Webpack。啟動快，體積小，記憶體省。</p><h2 id="交流" tabindex="-1">交流 <a class="header-anchor" href="#交流" aria-label="Permalink to &quot;交流&quot;">​</a></h2><p>QQ 交流群：<strong>293748695</strong>，歡迎加入討論！</p><h2 id="開源協議" tabindex="-1">開源協議 <a class="header-anchor" href="#開源協議" aria-label="Permalink to &quot;開源協議&quot;">​</a></h2><p><a href="https://github.com/SeaLantern-Studio/SeaLantern/blob/main/LICENSE" target="_blank" rel="noreferrer">GNU Affero General Public License v3.0</a></p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh-tw/intro.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};

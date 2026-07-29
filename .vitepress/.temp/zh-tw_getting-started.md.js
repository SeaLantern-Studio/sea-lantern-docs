import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"快速開始","description":"","frontmatter":{},"headers":[],"relativePath":"zh-tw/getting-started.md","filePath":"zh-tw/getting-started.md","lastUpdated":1783636422000}');
const _sfc_main = { name: "zh-tw/getting-started.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="快速開始" tabindex="-1">快速開始 <a class="header-anchor" href="#快速開始" aria-label="Permalink to &quot;快速開始&quot;">​</a></h1><h2 id="系統需求" tabindex="-1">系統需求 <a class="header-anchor" href="#系統需求" aria-label="Permalink to &quot;系統需求&quot;">​</a></h2><table tabindex="0"><thead><tr><th>項目</th><th>最低需求</th></tr></thead><tbody><tr><td>作業系統</td><td>Windows 10+、macOS 10.15+、Linux (glibc 2.31+)</td></tr><tr><td>Java</td><td>Java 8+（用於執行 Minecraft 伺服端）</td></tr><tr><td>記憶體</td><td>建議 4GB 以上（Minecraft 伺服端需要額外記憶體）</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">Windows 版本說明</p><p>Sea Lantern 使用 WebView2 執行環境，<strong>要求 Windows 10（版本 1909 及以上）或 Windows 11</strong>。Windows 7/8/8.1 使用者請參考 <a href="/zh-tw/faq#舊版-windows-執行方案">常見問題 - 舊版 Windows</a> 中的替代方案。</p></div><h2 id="_1-下載安裝" tabindex="-1">1. 下載安裝 <a class="header-anchor" href="#_1-下載安裝" aria-label="Permalink to &quot;1. 下載安裝&quot;">​</a></h2><p>前往 <a href="/zh-tw/download">下載頁面</a> 取得適合您作業系統的安裝包，雙擊執行即可完成安裝。</p><p>Ubuntu 使用者也可使用 PPA 安裝（見下載頁 Linux 小節）。</p><p>Arch Linux 使用者可透過 AUR 安裝（見下載頁 Linux 小節）。</p><h2 id="_2-取得伺服端核心" tabindex="-1">2. 取得伺服端核心 <a class="header-anchor" href="#_2-取得伺服端核心" aria-label="Permalink to &quot;2. 取得伺服端核心&quot;">​</a></h2><p>您可以使用 Minecraft 伺服端 JAR 建立新伺服器，也可以直接匯入既有伺服器目錄或啟動腳本。如果您還沒有核心檔案，請參考 <a href="/zh-tw/server-jar">伺服端取得</a> 頁面下載。</p><div class="tip custom-block"><p class="custom-block-title">推薦</p><p>對於大多數玩家，推薦使用 <a href="https://papermc.io/downloads/paper" target="_blank" rel="noreferrer">Paper</a> — 效能優秀、插件生態豐富。</p></div><h2 id="_3-設定-java" tabindex="-1">3. 設定 Java <a class="header-anchor" href="#_3-設定-java" aria-label="Permalink to &quot;3. 設定 Java&quot;">​</a></h2><p>啟動 Sea Lantern 後，軟體會<strong>自動偵測</strong>系統中已安裝的 Java。如果沒有合適的版本，可以使用內建的 Java 下載器一鍵安裝。</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Minecraft 不同版本對 Java 的要求不同：</p><ul><li>1.16.5 及以下 → Java 8 或 Java 11</li><li>1.17 ~ 1.20.4 → Java 17</li><li>1.20.5+ → Java 21</li></ul></div><h2 id="_4-建立伺服器" tabindex="-1">4. 建立伺服器 <a class="header-anchor" href="#_4-建立伺服器" aria-label="Permalink to &quot;4. 建立伺服器&quot;">​</a></h2><ol><li>點擊「建立伺服器」按鈕</li><li>選擇匯入來源（JAR、既有伺服器或啟動腳本）</li><li>依引導完成開服方式偵測；必要時可自訂開服命令</li><li>選擇 Java 執行環境版本（缺失時可一鍵安裝）</li><li>為您的伺服器命名並確認參數</li><li>首次啟動時需要同意 Minecraft EULA</li></ol><h2 id="_5-啟動伺服器" tabindex="-1">5. 啟動伺服器 <a class="header-anchor" href="#_5-啟動伺服器" aria-label="Permalink to &quot;5. 啟動伺服器&quot;">​</a></h2><p>點擊啟動按鈕，等待控制台顯示 <code>Done!</code> 即表示伺服器啟動成功。此時您可以在 Minecraft 中透過 <code>localhost</code> 連線到您的伺服器。</p><hr><p>接下來，查看 <a href="/zh-tw/tutorial">使用教學</a> 了解更多操作細節，或瀏覽 <a href="/zh-tw/features">功能總覽</a> 了解所有功能。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh-tw/getting-started.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gettingStarted = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gettingStarted as default
};

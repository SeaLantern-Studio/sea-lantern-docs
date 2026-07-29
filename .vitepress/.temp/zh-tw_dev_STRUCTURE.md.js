import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"專案結構","description":"","frontmatter":{},"headers":[],"relativePath":"zh-tw/dev/STRUCTURE.md","filePath":"zh-tw/dev/STRUCTURE.md","lastUpdated":1783637368000}');
const _sfc_main = { name: "zh-tw/dev/STRUCTURE.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="專案結構" tabindex="-1">專案結構 <a class="header-anchor" href="#專案結構" aria-label="Permalink to &quot;專案結構&quot;">​</a></h1><p>本文以 Sea Lantern 主儲存庫目前的 <code>main</code> 分支為準。目錄會隨開發調整，請以原始碼為最終依據。</p><h2 id="頂層目錄" tabindex="-1">頂層目錄 <a class="header-anchor" href="#頂層目錄" aria-label="Permalink to &quot;頂層目錄&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>SeaLantern/</span></span>
<span class="line"><span>├── src/             # Vue 3 前端</span></span>
<span class="line"><span>├── crates/          # 可重用 Rust crate</span></span>
<span class="line"><span>│   ├── core/        # 核心領域與程序、實例、設定邏輯</span></span>
<span class="line"><span>│   ├── infra/       # 檔案、網路、下載、持久化與平台能力</span></span>
<span class="line"><span>│   └── extra/       # 插件、市場、更新、連線等擴充能力</span></span>
<span class="line"><span>├── server/          # 伺服器應用服務與 RPC 邊界</span></span>
<span class="line"><span>├── src-tauri/       # Tauri 桌面宿主</span></span>
<span class="line"><span>├── docker-entry/    # Docker/headless 入口</span></span>
<span class="line"><span>├── docker/          # Docker 建置資源</span></span>
<span class="line"><span>├── docs/            # 與原始碼同步的開發文件和 Lua API</span></span>
<span class="line"><span>├── scripts/         # 版本與 NOTICE 等維護腳本</span></span>
<span class="line"><span>├── packaging/       # Linux 等平台的封裝檔案</span></span>
<span class="line"><span>├── Cargo.toml       # Rust workspace 設定</span></span>
<span class="line"><span>├── package.json     # 前端依賴與儲存庫腳本</span></span>
<span class="line"><span>└── pnpm-lock.yaml   # pnpm 鎖定檔</span></span></code></pre></div><h2 id="前端" tabindex="-1">前端 <a class="header-anchor" href="#前端" aria-label="Permalink to &quot;前端&quot;">​</a></h2><p><code>src/</code> 包含 Vue 3、TypeScript、Pinia 和 Vue Router 前端：</p><table tabindex="0"><thead><tr><th>目錄</th><th>職責</th></tr></thead><tbody><tr><td><code>src/api/</code></td><td>呼叫宿主能力的 API 封裝</td></tr><tr><td><code>src/views/</code></td><td>首頁、建立、控制台、設定、玩家、連線、備份等頁面</td></tr><tr><td><code>src/components/</code></td><td>通用元件和各頁面子元件</td></tr><tr><td><code>src/stores/</code></td><td>Pinia 狀態管理</td></tr><tr><td><code>src/router/</code></td><td>頁面路由</td></tr><tr><td><code>src/language/</code></td><td>多語言資源與執行階段</td></tr><tr><td><code>src/themes/</code>、<code>src/styles/</code></td><td>主題定義和全域/頁面樣式</td></tr><tr><td><code>src/composables/</code></td><td>可重用 Vue 組合式邏輯</td></tr><tr><td><code>src/types/</code>、<code>src/utils/</code></td><td>型別和通用工具</td></tr></tbody></table><p>修改頁面時，通常要同時檢查對應的 view、component、store、API 和語言鍵。</p><h2 id="rust-workspace" tabindex="-1">Rust workspace <a class="header-anchor" href="#rust-workspace" aria-label="Permalink to &quot;Rust workspace&quot;">​</a></h2><p>根 <code>Cargo.toml</code> 目前包含以下成員：</p><table tabindex="0"><thead><tr><th>成員</th><th>職責</th></tr></thead><tbody><tr><td><code>crates/core</code></td><td>程序控制、伺服器實例、設定與供應流程等核心規則</td></tr><tr><td><code>crates/infra</code></td><td>歸檔、下載、檔案系統、網路、持久化和平台實作</td></tr><tr><td><code>crates/extra</code></td><td>Lua 插件、設定、下載連結、市場、更新及 Sculk 連線</td></tr><tr><td><code>server</code></td><td>面向宿主的應用服務和 RPC 契約</td></tr><tr><td><code>src-tauri</code></td><td>桌面應用入口、Tauri 插件與視窗宿主</td></tr><tr><td><code>docker-entry</code></td><td>容器執行入口</td></tr></tbody></table><p>依賴方向應儘量保持為宿主依賴應用層與共享 crate；通用業務規則不要直接放進 UI 或平台入口。</p><h2 id="常用入口" tabindex="-1">常用入口 <a class="header-anchor" href="#常用入口" aria-label="Permalink to &quot;常用入口&quot;">​</a></h2><table tabindex="0"><thead><tr><th>修改內容</th><th>優先查看</th></tr></thead><tbody><tr><td>頁面與導覽</td><td><code>src/router/index.ts</code>、<code>src/views/</code>、<code>src/components/layout/</code></td></tr><tr><td>前後端呼叫</td><td><code>src/api/</code>、<code>server/src/rpc/</code></td></tr><tr><td>伺服器實例與程序</td><td><code>crates/core/src/instance/</code>、<code>crates/core/src/process/</code></td></tr><tr><td>下載與檔案操作</td><td><code>crates/infra/src/download/</code>、<code>crates/infra/src/fs/</code></td></tr><tr><td>Sea Lantern 插件</td><td><code>crates/extra/src/app_plugin/</code>、<code>src/components/plugin/</code></td></tr><tr><td>連線隧道</td><td><code>crates/extra/src/online/</code>、<code>src/views/TunnelView.vue</code></td></tr><tr><td>桌面宿主</td><td><code>src-tauri/src/</code>、<code>src-tauri/tauri.conf.json</code></td></tr><tr><td>Docker 入口</td><td><code>docker-entry/</code>、<code>docker/</code></td></tr></tbody></table><h2 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">pnpm</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> install</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">pnpm</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> dev</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">pnpm</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> tauri</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> dev</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">pnpm</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> docker:dev</span></span></code></pre></div><p>完整環境與檢查命令見<a href="/zh-tw/dev/environment">環境設定</a>和<a href="/zh-tw/dev/CONTRIBUTING">貢獻指南</a>。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh-tw/dev/STRUCTURE.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const STRUCTURE = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  STRUCTURE as default
};

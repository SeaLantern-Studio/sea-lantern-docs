import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"项目结构","description":"","frontmatter":{},"headers":[],"relativePath":"zh/dev/STRUCTURE.md","filePath":"zh/dev/STRUCTURE.md","lastUpdated":1783636422000}');
const _sfc_main = { name: "zh/dev/STRUCTURE.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="项目结构" tabindex="-1">项目结构 <a class="header-anchor" href="#项目结构" aria-label="Permalink to &quot;项目结构&quot;">​</a></h1><p>本文以 Sea Lantern 主仓库当前 <code>main</code> 分支为准。目录会随开发调整，请以源码为最终依据。</p><h2 id="顶层目录" tabindex="-1">顶层目录 <a class="header-anchor" href="#顶层目录" aria-label="Permalink to &quot;顶层目录&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>SeaLantern/</span></span>
<span class="line"><span>├── src/             # Vue 3 前端</span></span>
<span class="line"><span>├── crates/          # 可复用 Rust crate</span></span>
<span class="line"><span>│   ├── core/        # 核心领域与进程、实例、配置逻辑</span></span>
<span class="line"><span>│   ├── infra/       # 文件、网络、下载、持久化与平台能力</span></span>
<span class="line"><span>│   └── extra/       # 插件、市场、更新、联机等扩展能力</span></span>
<span class="line"><span>├── server/          # 服务器应用服务与 RPC 边界</span></span>
<span class="line"><span>├── src-tauri/       # Tauri 桌面宿主</span></span>
<span class="line"><span>├── docker-entry/    # Docker/headless 入口</span></span>
<span class="line"><span>├── docker/          # Docker 构建资源</span></span>
<span class="line"><span>├── docs/            # 与源码同步的开发文档和 Lua API</span></span>
<span class="line"><span>├── scripts/         # 版本与 NOTICE 等维护脚本</span></span>
<span class="line"><span>├── packaging/       # Linux 等平台的打包文件</span></span>
<span class="line"><span>├── Cargo.toml       # Rust workspace 配置</span></span>
<span class="line"><span>├── package.json     # 前端依赖与仓库脚本</span></span>
<span class="line"><span>└── pnpm-lock.yaml   # pnpm 锁文件</span></span></code></pre></div><h2 id="前端" tabindex="-1">前端 <a class="header-anchor" href="#前端" aria-label="Permalink to &quot;前端&quot;">​</a></h2><p><code>src/</code> 包含 Vue 3、TypeScript、Pinia 和 Vue Router 前端：</p><table tabindex="0"><thead><tr><th>目录</th><th>职责</th></tr></thead><tbody><tr><td><code>src/api/</code></td><td>调用宿主能力的 API 封装</td></tr><tr><td><code>src/views/</code></td><td>首页、创建、控制台、配置、玩家、联机、备份等页面</td></tr><tr><td><code>src/components/</code></td><td>通用组件和各页面子组件</td></tr><tr><td><code>src/stores/</code></td><td>Pinia 状态管理</td></tr><tr><td><code>src/router/</code></td><td>页面路由</td></tr><tr><td><code>src/language/</code></td><td>多语言资源与运行时</td></tr><tr><td><code>src/themes/</code>、<code>src/styles/</code></td><td>主题定义和全局/页面样式</td></tr><tr><td><code>src/composables/</code></td><td>可复用 Vue 组合式逻辑</td></tr><tr><td><code>src/types/</code>、<code>src/utils/</code></td><td>类型和通用工具</td></tr></tbody></table><p>修改页面时，通常要同时检查对应的 view、component、store、API 和语言键。</p><h2 id="rust-workspace" tabindex="-1">Rust workspace <a class="header-anchor" href="#rust-workspace" aria-label="Permalink to &quot;Rust workspace&quot;">​</a></h2><p>根 <code>Cargo.toml</code> 当前包含以下成员：</p><table tabindex="0"><thead><tr><th>成员</th><th>职责</th></tr></thead><tbody><tr><td><code>crates/core</code></td><td>进程控制、服务器实例、配置与供应流程等核心规则</td></tr><tr><td><code>crates/infra</code></td><td>归档、下载、文件系统、网络、持久化和平台实现</td></tr><tr><td><code>crates/extra</code></td><td>Lua 插件、配置、下载链接、市场、更新及 Sculk 联机</td></tr><tr><td><code>server</code></td><td>面向宿主的应用服务和 RPC 契约</td></tr><tr><td><code>src-tauri</code></td><td>桌面应用入口、Tauri 插件与窗口宿主</td></tr><tr><td><code>docker-entry</code></td><td>容器运行入口</td></tr></tbody></table><p>依赖方向应尽量保持为宿主依赖应用层与共享 crate；通用业务规则不要直接放进 UI 或平台入口。</p><h2 id="常用入口" tabindex="-1">常用入口 <a class="header-anchor" href="#常用入口" aria-label="Permalink to &quot;常用入口&quot;">​</a></h2><table tabindex="0"><thead><tr><th>修改内容</th><th>优先查看</th></tr></thead><tbody><tr><td>页面与导航</td><td><code>src/router/index.ts</code>、<code>src/views/</code>、<code>src/components/layout/</code></td></tr><tr><td>前后端调用</td><td><code>src/api/</code>、<code>server/src/rpc/</code></td></tr><tr><td>服务器实例与进程</td><td><code>crates/core/src/instance/</code>、<code>crates/core/src/process/</code></td></tr><tr><td>下载与文件操作</td><td><code>crates/infra/src/download/</code>、<code>crates/infra/src/fs/</code></td></tr><tr><td>Sea Lantern 插件</td><td><code>crates/extra/src/app_plugin/</code>、<code>src/components/plugin/</code></td></tr><tr><td>联机隧道</td><td><code>crates/extra/src/online/</code>、<code>src/views/TunnelView.vue</code></td></tr><tr><td>桌面宿主</td><td><code>src-tauri/src/</code>、<code>src-tauri/tauri.conf.json</code></td></tr><tr><td>Docker 入口</td><td><code>docker-entry/</code>、<code>docker/</code></td></tr></tbody></table><h2 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">pnpm</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> install</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">pnpm</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> dev</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">pnpm</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> tauri</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> dev</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">pnpm</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> docker:dev</span></span></code></pre></div><p>完整环境与检查命令见<a href="/zh/dev/environment">环境配置</a>和<a href="/zh/dev/CONTRIBUTING">贡献指南</a>。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/dev/STRUCTURE.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const STRUCTURE = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  STRUCTURE as default
};

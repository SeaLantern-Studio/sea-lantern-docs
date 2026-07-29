import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { F as FeatureShowcase } from "./FeatureShowcase.CmAeXSj_.js";
import { useSSRContext } from "vue";
import "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"项目简介","description":"","frontmatter":{},"headers":[],"relativePath":"zh/intro.md","filePath":"zh/intro.md","lastUpdated":1772176403000}');
const __default__ = { name: "zh/intro.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const featureItems = [
      { title: "服务器管理", desc: "集中管理多个 Minecraft 服务器及其运行状态。" },
      { title: "服务器创建", desc: "支持 JAR、已有服务器和启动脚本导入，并可自定义启动命令。" },
      { title: "核心下载", desc: "在应用内查找并下载常用 Minecraft 服务端核心。" },
      { title: "实时控制台", desc: "实时查看日志、发送命令并保留命令历史。" },
      { title: "配置管理", desc: "可视化编辑启动配置和 server.properties，支持搜索与差异对比。" },
      { title: "玩家管理", desc: "管理在线玩家、白名单、封禁和 OP 权限。" },
      { title: "Sculk 联机", desc: "无需公网 IP，创建 P2P 联机隧道并生成联机凭证。" },
      { title: "插件系统", desc: "通过 Lua 插件扩展页面、组件、菜单和应用能力。" },
      { title: "服务端扩展", desc: "查看和管理服务器中的 Mod 与插件文件。" },
      { title: "Java 管理", desc: "自动检测本机 Java，并支持按需下载安装。" },
      { title: "个性化", desc: "提供多套主题、明暗模式和 Windows 亚克力效果。" },
      { title: "多语言", desc: "内置 10 种语言，支持运行时切换。" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="项目简介" tabindex="-1">项目简介 <a class="header-anchor" href="#项目简介" aria-label="Permalink to &quot;项目简介&quot;">​</a></h1><p>Sea Lantern（海晶灯）是一个<strong>轻量化</strong>的 Minecraft 服务器管理工具。<br> 基于 <strong>Tauri 2 + Rust + Vue 3</strong> 构建。</p><h2 id="特性" tabindex="-1">特性 <a class="header-anchor" href="#特性" aria-label="Permalink to &quot;特性&quot;">​</a></h2>`);
      _push(ssrRenderComponent(FeatureShowcase, {
        items: featureItems,
        "panel-title": "功能说明"
      }, null, _parent));
      _push(`<h2 id="技术栈" tabindex="-1">技术栈 <a class="header-anchor" href="#技术栈" aria-label="Permalink to &quot;技术栈&quot;">​</a></h2><ul><li><strong>前端</strong>: Vue 3 + TypeScript + Vite</li><li><strong>后端</strong>: Rust + Tauri 2</li><li><strong>通信</strong>: Tauri invoke</li><li><strong>Docker</strong>: itzg/minecraft-server</li></ul><p>没有 Electron，没有 Node 后端，没有 Webpack。启动快，体积小，内存省。</p><blockquote><p>使用系统 Webview 渲染。</p></blockquote><h2 id="社区" tabindex="-1">社区 <a class="header-anchor" href="#社区" aria-label="Permalink to &quot;社区&quot;">​</a></h2><p>如果你在使用中遇到问题，或者想参与讨论，可以通过以下方式联系我们：</p><ul><li>QQ 一群：<strong>293748695</strong></li><li>QQ 二群：<strong>1085823754</strong></li></ul><h2 id="开源协议" tabindex="-1">开源协议 <a class="header-anchor" href="#开源协议" aria-label="Permalink to &quot;开源协议&quot;">​</a></h2><p><a href="https://github.com/SeaLantern-Studio/SeaLantern/blob/main/LICENSE" target="_blank" rel="noreferrer">GNU Affero General Public License v3.0</a></p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/intro.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};

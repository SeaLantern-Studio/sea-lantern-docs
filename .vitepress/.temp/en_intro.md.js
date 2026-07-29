import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { F as FeatureShowcase } from "./FeatureShowcase.CmAeXSj_.js";
import { useSSRContext } from "vue";
import "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Introduction","description":"","frontmatter":{},"headers":[],"relativePath":"en/intro.md","filePath":"en/intro.md","lastUpdated":1772176403000}');
const __default__ = { name: "en/intro.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const featureItems = [
      { title: "Server Management", desc: "Manage multiple Minecraft servers and their runtime state." },
      { title: "Server Creation", desc: "Import a JAR, existing server, or startup script, with custom command support." },
      { title: "Core Downloads", desc: "Find and download common Minecraft server cores in the app." },
      { title: "Live Console", desc: "View live logs, send commands, and retain command history." },
      { title: "Configuration", desc: "Edit startup settings and server.properties with search and diff tools." },
      { title: "Player Management", desc: "Manage online players, whitelist, bans, and OP permissions." },
      { title: "Sculk Multiplayer", desc: "Create a P2P tunnel and connection ticket without a public IP." },
      { title: "Plugin System", desc: "Extend pages, components, menus, and app capabilities with Lua plugins." },
      { title: "Server Extensions", desc: "View and manage Mod and plugin files installed on a server." },
      { title: "Java Management", desc: "Detect local Java runtimes and download a suitable version when needed." },
      { title: "Personalization", desc: "Choose from multiple themes, light/dark modes, and Windows acrylic effects." },
      { title: "Languages", desc: "Switch between 10 built-in languages at runtime." }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h1><p>Sea Lantern is a <strong>lightweight</strong> Minecraft server management tool.<br> Built with <strong>Tauri 2 + Rust + Vue 3</strong>.</p><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h2>`);
      _push(ssrRenderComponent(FeatureShowcase, {
        items: featureItems,
        "panel-title": "Feature Details"
      }, null, _parent));
      _push(`<h2 id="tech-stack" tabindex="-1">Tech Stack <a class="header-anchor" href="#tech-stack" aria-label="Permalink to &quot;Tech Stack&quot;">​</a></h2><ul><li><strong>Frontend</strong>: Vue 3 + TypeScript + Vite + Pinia</li><li><strong>Backend</strong>: Rust + Tauri 2</li><li><strong>Styling</strong>: CSS Variables design system + theme engine</li><li><strong>Charts</strong>: ECharts</li><li><strong>Package Manager</strong>: pnpm</li><li><strong>Linting</strong>: oxlint + oxfmt</li></ul><p>No Electron, no Node backend, no Webpack. Fast startup, small footprint, low memory.</p><h2 id="community" tabindex="-1">Community <a class="header-anchor" href="#community" aria-label="Permalink to &quot;Community&quot;">​</a></h2><p>QQ Group: <strong>293748695</strong></p><h2 id="license" tabindex="-1">License <a class="header-anchor" href="#license" aria-label="Permalink to &quot;License&quot;">​</a></h2><p><a href="https://github.com/SeaLantern-Studio/SeaLantern/blob/main/LICENSE" target="_blank" rel="noreferrer">GNU Affero General Public License v3.0</a></p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/intro.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};

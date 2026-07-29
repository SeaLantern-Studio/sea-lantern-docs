import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"快速开始","description":"","frontmatter":{},"headers":[],"relativePath":"zh/getting-started.md","filePath":"zh/getting-started.md","lastUpdated":1772176403000}');
const _sfc_main = { name: "zh/getting-started.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h1><h2 id="系统要求" tabindex="-1">系统要求 <a class="header-anchor" href="#系统要求" aria-label="Permalink to &quot;系统要求&quot;">​</a></h2><table tabindex="0"><thead><tr><th>项目</th><th>最低要求</th></tr></thead><tbody><tr><td>操作系统</td><td>Windows 10+、macOS 10.15+、Linux (glibc 2.31+)</td></tr><tr><td>Java</td><td>Java 8+（用于运行 Minecraft 服务端）</td></tr><tr><td>内存</td><td>建议 4GB 以上（Minecraft 服务端需要额外内存）</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">Windows 版本说明</p><p>Sea Lantern 使用 WebView2 运行时，<strong>要求 Windows 10（版本 1909 及以上）或 Windows 11</strong>。Windows 7/8/8.1 用户请参考 <a href="/zh/faq#旧版-windows-运行方案">常见问题 - 旧版 Windows</a> 中的替代方案。</p></div><h2 id="_1-下载安装" tabindex="-1">1. 下载安装 <a class="header-anchor" href="#_1-下载安装" aria-label="Permalink to &quot;1. 下载安装&quot;">​</a></h2><p>前往 <a href="/zh/download">下载页面</a> 获取适合你操作系统的安装包，双击运行即可完成安装。</p><p>Ubuntu 用户也可以使用 PPA 安装（见下载页 Linux 小节）。</p><p>Arch Linux 用户可通过 AUR 安装（见下载页 Linux 小节）。</p><h2 id="_2-获取服务端核心" tabindex="-1">2. 获取服务端核心 <a class="header-anchor" href="#_2-获取服务端核心" aria-label="Permalink to &quot;2. 获取服务端核心&quot;">​</a></h2><p>你可以使用 Minecraft 服务端 JAR 创建新服务器，也可以直接导入已有服务器目录或启动脚本。如果你还没有核心文件，请参考 <a href="/zh/server-jar">核心获取</a> 页面下载。</p><div class="tip custom-block"><p class="custom-block-title">推荐</p><p>对于大多数玩家，推荐使用 <a href="https://papermc.io/downloads/paper" target="_blank" rel="noreferrer">Paper</a> — 性能优秀、插件生态丰富。</p></div><h2 id="_3-配置-java" tabindex="-1">3. 配置 Java <a class="header-anchor" href="#_3-配置-java" aria-label="Permalink to &quot;3. 配置 Java&quot;">​</a></h2><p>启动 Sea Lantern 后，软件会<strong>自动检测</strong>系统中已安装的 Java。如果没有合适的版本，可以使用内置的 Java 下载器一键安装。</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Minecraft 不同版本对 Java 的要求不同：</p><ul><li>1.16.5 及以下 → Java 8 或 Java 11</li><li>1.17 ~ 1.20.4 → Java 17</li><li>1.20.5+ → Java 21</li></ul></div><h2 id="_4-创建服务器" tabindex="-1">4. 创建服务器 <a class="header-anchor" href="#_4-创建服务器" aria-label="Permalink to &quot;4. 创建服务器&quot;">​</a></h2><ol><li>点击「创建服务器」按钮</li><li>选择导入来源（JAR、已有服务器或启动脚本）</li><li>按向导完成启动方式检测；如有需要可自定义开服命令</li><li>选择 Java 运行时版本（缺失时可一键安装）</li><li>为你的服务器命名并确认参数</li><li>首次启动时需要同意 Minecraft EULA</li></ol><h2 id="_5-启动服务器" tabindex="-1">5. 启动服务器 <a class="header-anchor" href="#_5-启动服务器" aria-label="Permalink to &quot;5. 启动服务器&quot;">​</a></h2><p>点击启动按钮，等待控制台显示 <code>Done!</code> 即表示服务器启动成功。此时你可以在 Minecraft 中通过 <code>localhost</code> 连接到你的服务器。</p><hr><p>接下来，查看 <a href="/zh/tutorial">使用教程</a> 了解更多操作细节，或浏览 <a href="/zh/features">功能总览</a> 了解所有功能。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/getting-started.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gettingStarted = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gettingStarted as default
};

# 更新日志

[GitHub Releases](https://github.com/SeaLantern-Studio/SeaLantern/releases)

## v1.0.1 <Badge type="tip" text="最新" />

[GitHub Release](https://github.com/SeaLantern-Studio/SeaLantern/releases/tag/v1.0.1)

> 2026-02-27

### 修复与优化
- 更换安装器链接
- 增加提交规范与格式化钩子
- 使用 xtermjs 与 sqlite 优化终端日志系统

---

## v1.0.0

[GitHub Release](https://github.com/SeaLantern-Studio/SeaLantern/releases/tag/v1.0.0)

> 2026-02-26

### 重点新增
- 新建服务器流程升级：支持整合包自动安装、智能识别开服方式、可自定义开服命令
- 新增导入能力，可将已有服务器/启动文件接入 Sea Lantern 管理
- 插件系统与插件市场持续增强：权限面板、状态保留、下载失败提示等体验改进
- Java 检测路径扩展，常见安装目录识别率更高，缺失时支持一键下载安装
- 首页图表能力升级（ECharts），状态展示更直观

### 稳定性与工程
- 持续完善 i18n，替换硬编码文本并修复多语言显示细节
- 修复创建流程、插件权限面板、拖拽框、窗口恢复等问题
- 重构 Settings/Home/Player/Paint 等核心页面，降低耦合，提升可维护性
- CI/CD 与质量检查链路重构，发布流程更清晰
- 发布资产新增 ARM 架构支持（含 Windows/Linux）

---

## v0.6.5

[GitHub Release](https://github.com/SeaLantern-Studio/SeaLantern/releases/tag/sea-lantern-v0.6.5)

> 2026-02-20

### 技术改进
- 新增组合式函数：useTabIndicator、useAsync、useMessage
- 服务器状态刷新改为并行 Promise.all
- 内存/端口输入框改进验证逻辑
- 文本颜色统一使用 CSS 变量

### 问题修复
- 修复 Arch Linux 更新问题
- 修复语言切换时 Tab 指示器位置不更新
- 修复侧边栏展开/收起状态显示逻辑
- 修复 0% 下载进度显示异常
- 修复窗口控制按钮图标方向问题

### 文档与工程
- 添加双语 Pull Request 模板
- 重构项目结构文档（中英文）
- 添加 Star History 图表和贡献者墙
- 完善 AUR 自动发布工作流

---

## v0.6.2

[GitHub Release](https://github.com/SeaLantern-Studio/SeaLantern/releases/tag/sea-lantern-v0.6.2)

> 2026-02-17

### 新功能
- 重构配置页面并添加自动保存功能
- 新增 Arch Linux package files 支持
- 新增多语言支持：日语、西班牙语、德语、俄语、越南语、英式英语、澳洲英语等
- 新增 i18n 梗体中文支持
- 优化 CI 检查逻辑，仅按需执行

### 界面优化
- 优化主页 UI 布局，调整打开文件夹的交互逻辑
- 增强暗色模式对比度、添加标签指示器动画
- 优化「一言」功能加载逻辑
- 优化应用关闭行为的事件处理逻辑

### 技术改进
- 重构控制台与配置页面组件结构
- 重写 pkg.tar.gz 包构建逻辑
- 修复 Arch 桌面环境下文件图标显示异常

---

## v0.6.0

[GitHub Release](https://github.com/SeaLantern-Studio/SeaLantern/releases/tag/sea-lantern-v0.6.0)

> 2026-02-16

### 新功能
- 托盘菜单与应用唯一实例化
- 原生颜色主题功能
- bat/sh 启动脚本支持
- 颜色编辑器与颜色选择器
- 自定义快捷指令
- 贡献者信息展示

### 修复与优化
- 优化启动稳定性，修复 TypeScript/运行时问题
- 修复多线程下载器问题
- 修复符号链接导致 Java 探测重复
- 修复 macOS 和 Linux 磁盘空间计算错误
- 修复离线/停服/封禁重连等状态解析问题
- 重构自动更新流程
- 修复大量国际化问题

---

## v0.5.0

[GitHub Release](https://github.com/SeaLantern-Studio/SeaLantern/releases/tag/sea-lantern-v0.5.0)

> 2026-02-14

大量更新，感谢每一位贡献者。

---

## v0.4.1

[GitHub Release](https://github.com/SeaLantern-Studio/SeaLantern/releases/tag/v0.4.1)

> 2026-02-14

- 优化 Rust 编译配置，启用 LTO 和二进制大小优化
- 精简 Tokio 依赖，减少不必要的功能模块
- 添加前端代码分割，优化加载性能

---

## v0.4.0

[GitHub Release](https://github.com/SeaLantern-Studio/SeaLantern/releases/tag/v0.4.0)

> 2026-02-14

- 暗色模式支持
- Windows 亚克力毛玻璃效果
- 字体选择功能
- Java 搜索优化（Windows 注册表）
- Linux Wayland 白屏修复
- UI 组件美化

# 常见问题

## 无法启动服务器

### 提示「Java 未找到」

Sea Lantern 需要 Java 来运行 Minecraft 服务端。解决方法：

1. 在 Sea Lantern 中使用内置 Java 下载器安装 Java
2. 或手动安装 Java 后重启 Sea Lantern，程序会自动检测

### 启动后立即崩溃

常见原因：
- **Java 版本不匹配**：检查你的 Java 版本是否符合要求（参考 [快速开始](/zh/getting-started#_3-配置-java)）
- **内存不足**：尝试增加分配的内存
- **JAR 文件损坏**：重新下载服务端 JAR
- **端口被占用**：检查 25565 端口是否被其他程序占用，或在 server.properties 中更换端口

### 提示「EULA 未同意」

首次启动服务器需要同意 Minecraft EULA。Sea Lantern 会弹出提示，点击同意即可。

## 控制台无响应

### 服务器似乎卡住了

- 检查控制台最后的日志输出，可能正在加载世界或插件
- 对于大型世界，首次加载可能需要较长时间
- 如果确实卡死，使用 Sea Lantern 的安全停止按钮关闭服务器，然后重新启动

### 命令没有反应

- 确认命令格式正确（控制台中不需要 `/` 前缀）
- 确认服务器已完全启动（控制台显示 `Done!`）

## 无法连接服务器

### 本地连接

在 Minecraft 中添加服务器，地址填写 `localhost` 或 `127.0.0.1`。

- 确认服务器已启动且控制台显示 `Done!`
- 确认客户端版本与服务端版本一致
- 如果修改过端口，地址需要加上端口号，如 `localhost:25566`

### 局域网连接

其他玩家使用你的**局域网 IP** 连接（如 `192.168.1.100:25565`）。

- 确保你和其他玩家在同一个局域网中
- 检查防火墙是否放行了服务器端口

### 外网连接

外网玩家需要你的**公网 IP** 或域名。

- 需要在路由器上配置端口转发（将外部 25565 转发到你的内网 IP）
- 或使用内网穿透工具（如 frp、ngrok）
- 检查防火墙设置

::: warning
将服务器暴露到公网时，建议：
- 启用 `online-mode`（正版验证）
- 启用白名单
- 定期备份存档
:::

## 旧版 Windows 运行方案

Sea Lantern 基于 Tauri 2，要求 Windows 10（版本 1909 及以上）或 Windows 11。**不支持** Windows 7、Windows 8、Windows 8.1。

对于仍在使用旧版系统的用户，可以通过安装 VxKex 扩展内核来补全所需运行库，使 Sea Lantern 在旧版 Windows 上运行。此方式同样适用于一些无法在老系统上正常运行的软件。

### 具体步骤

1. **获取 Sea Lantern 软件压缩包**
   - 前往 [下载页面](/zh/download) 下载 Windows 安装包
   - 安装完成后**先不要打开** Sea Lantern

2. **下载并安装 VxKex 扩展内核**
   - 此处提供的是国内的一个分支
   - VxKex-NEXT：[github.com/YuZhouRen86/VxKex-NEXT](https://github.com/YuZhouRen86/VxKex-NEXT)
   - 蓝奏云：[geekerz.lanzoue.com/b0ra5olfi](https://geekerz.lanzoue.com/b0ra5olfi)
   - 百度网盘：[pan.baidu.com/s/1w0JUk4JpoKiZQVi2LMoqwA?pwd=0000](https://pan.baidu.com/s/1w0JUk4JpoKiZQVi2LMoqwA?pwd=0000)（提取码：0000）
   - 下载完成后直接安装即可

3. **给 Sea Lantern 启用 VxKex**
   - 右键 Sea Lantern 主程序，选择「属性」，选择「VxKex」选项卡
   - 勾选「为此程序启用 VxKex NEXT」和「报告其他版本的 Windows」
   - 点击应用，确定
   - 此时 Sea Lantern 即可在 Windows 7 上正常运行
   - 除联机功能外，其他功能均正常

### 视频参考

如果不会操作请参考以下视频：[【让 Win7 强行兼容 Win10 应用？VxKex 扩展内核安装体验】](https://www.bilibili.com/video/BV1SedHYsE6b/)

::: danger 重要警告与免责声明
- 使用 VxKex 等非官方方法在 Windows 7/8/8.1 上运行 Sea Lantern **并不保证能正常工作**，可能会出现各种错误和兼容性问题
- **开发者不会接受任何通过此方法运行软件所产生的错误反馈，也不会对由此产生的问题进行修复**
- 使用此类方法可能存在系统安全风险，用户需自行承担相关责任
- 强烈建议升级到 Windows 10/11 以获得最佳体验和完整功能支持
- Sea Lantern 的开发和测试均基于现代 Windows 系统，对旧版系统的兼容性不在官方支持范围内
:::

## ArchLinux 运行方案

### ArchLinux 用户可以通过 AUR 安装 Sea Lantern，安装包会自动处理依赖关系，确保软件正常运行。

### Arch上的更新问题
由于 ArchLinux 的滚动更新机制，某些依赖库可能会发生重大更新，导致 Sea Lantern 无法正常运行。所以如果你的文件系统是BTRFS,建议在更新前使用快照功能备份系统，以便在出现问题时快速回滚到之前的状态。

1. **安装 Sea Lantern**
   - 使用 AUR 包管理器（如 yay）安装：
     ```bash
     yay -S sealantern
     ```
     ***注意这里不是 sea-lantern，而是 sealantern***
   - 安装完成后即可在应用菜单中找到 Sea Lantern 并启动，或者是使用命令行：
     ```bash
     sea-lantern
     ```

2. **更新 Sea Lantern**
   - AUR 包会随着官方版本更新而更新，使用 AUR 包管理器检查更新：
     ```bash
     yay -Syu sealantern
     ```
   - 如果更新后出现问题，可以回滚到之前的版本：
     ```bash
     yay -S sealantern-<previous_version>
     ```

3. **更新失败的解决步骤**
   - 如果更新后 Sea Lantern 无法启动，首先不要慌张，尝试回滚到之前的版本。
   - 之后可以在 GitHub 上查看是否有其他用户报告了类似的问题，或者是等待开发者发布修复版本。
   - 在此期间，建议不要删除旧版本的安装包，以便随时回滚。
   - 如果你有能力，可以尝试自己修复问题并提交 Pull Request，帮助社区更快地解决问题。

   如果是发现使用命令行进行更新的时候发现依旧是旧版本，可以尝试使用命令更新库：
   ```bash
   yay -Syu --devel sealantern
   ```

   如果还是不行可以尝试删除缓存：
   ```bash
   yay -Sc sealantern
   ```

## 其他常见问题

### Sea Lantern 需要什么权限？

Sea Lantern 需要访问文件系统、网络和执行程序的权限，这些是管理 Minecraft 服务器所必需的。

### Sea Lantern 是否安全？

Sea Lantern 是开源软件，代码完全透明。它不会连接到任何第三方服务器，所有数据都保存在本地。

### 支持哪些 Minecraft 版本？

Sea Lantern 支持所有标准的 Minecraft 服务器版本，只需使用对应版本的服务器 JAR 文件。

### 如何备份服务器？

服务器数据存放在服务器目录中，重点备份以下内容：

- `world/` 目录（主世界存档）
- `world_nether/` 和 `world_the_end/`（下界和末地）
- `plugins/` 目录（插件及其配置）
- `server.properties`（服务器配置）

::: tip
建议定期手动备份，或使用自动备份插件。
:::

### 服务器安全性

- 启用 `online-mode=true` 开启正版验证
- 使用白名单限制玩家加入
- 谨慎给予 OP 权限
- 定期更新服务端版本以修复安全漏洞
- 不要安装来源不明的插件

### 版本更新后不兼容

- 更新服务端前**务必备份**
- 确认所有插件都支持新版本
- 不建议跨多个大版本直接升级（如从 1.16 直接升到 1.21）
- 如果出现问题，可以回退到备份的版本

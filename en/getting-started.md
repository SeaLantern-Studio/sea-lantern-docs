# Getting Started

## System Requirements

| Item | Minimum |
|------|---------|
| OS | Windows 10+, macOS 10.15+, Linux (glibc 2.31+) |
| Java | Java 8+ (for running Minecraft server) |
| RAM | 4GB+ recommended (Minecraft server needs additional memory) |

::: tip Windows Version Note
Sea Lantern uses the WebView2 runtime and **requires Windows 10 (version 1909+) or Windows 11**. Windows 7/8/8.1 users can check the [FAQ - Legacy Windows](/en/faq#legacy-windows-workaround) for alternative solutions.
:::

## 1. Download and Install

Go to the [Download page](/en/download) to get the installer for your operating system. Double-click to install.

Ubuntu users can also install via PPA (see the Linux section on the download page).

Arch Linux users can install via AUR (see the Linux section on the download page).

## 2. Get a Server JAR

You need a Minecraft server JAR file to create a server. If you don't have one yet, check the [Server JAR Guide](/en/server-jar) to download one.

::: tip Recommendation
For most players, we recommend [Paper](https://papermc.io/downloads/paper) — great performance and a rich plugin ecosystem.
:::

## 3. Configure Java

After launching Sea Lantern, the app will **automatically detect** Java runtimes installed on your system. If no suitable version is found, use the built-in Java downloader to install one with a single click.

::: info
Different Minecraft versions require different Java versions:
- 1.16.5 and below → Java 8 or Java 11
- 1.17 ~ 1.20.4 → Java 17
- 1.20.5+ → Java 21
:::

## 4. Create a Server

1. Click the "Create Server" button
2. Import your downloaded server JAR file
3. Select the Java runtime version
4. Name your server
5. Accept the Minecraft EULA on first launch

## 5. Start the Server

Click the start button and wait for the console to display `Done!` — your server is now running. You can connect to it in Minecraft using `localhost`.

---

Next, check out the [Tutorial](/en/tutorial) for more detailed operations, or browse the [Features Overview](/en/features) to see everything Sea Lantern offers.

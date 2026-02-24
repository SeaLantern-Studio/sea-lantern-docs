# FAQ

## Server Won't Start

### "Java not found"

Sea Lantern needs Java to run the Minecraft server. To fix this:

1. Use the built-in Java downloader in Sea Lantern
2. Or install Java manually and restart Sea Lantern — it will auto-detect the installation

### Crashes Immediately After Launch

Common causes:
- **Java version mismatch**: Check that your Java version meets the requirements (see [Getting Started](/en/getting-started#_3-configure-java))
- **Insufficient memory**: Try increasing the allocated memory
- **Corrupted JAR file**: Re-download the server JAR
- **Port in use**: Check if port 25565 is occupied by another program, or change the port in server.properties

### "EULA not accepted"

You must accept the Minecraft EULA on first launch. Sea Lantern will show a prompt — just click accept.

## Console Not Responding

### Server Seems Frozen

- Check the last log output in the console — it may be loading the world or plugins
- Large worlds may take a long time to load initially
- If truly frozen, use Sea Lantern's safe stop button to shut down the server, then restart

### Commands Have No Effect

- Confirm the command format is correct (no `/` prefix in the console)
- Confirm the server has fully started (console shows `Done!`)

## Can't Connect to Server

### Local Connection

In Minecraft, add a server with the address `localhost` or `127.0.0.1`.

- Confirm the server is running and the console shows `Done!`
- Confirm the client version matches the server version
- If you changed the port, include it in the address, e.g. `localhost:25566`

### LAN Connection

Other players connect using your **LAN IP** (e.g. `192.168.1.100:25565`).

- Make sure you and the other players are on the same local network
- Check that your firewall allows the server port

### Internet Connection

Remote players need your **public IP** or domain name.

- You need to configure port forwarding on your router (forward external 25565 to your local IP)
- Or use a tunneling service (e.g. frp, ngrok)
- Check your firewall settings

::: warning
When exposing your server to the internet:
- Enable `online-mode` (online authentication)
- Enable the whitelist
- Back up your world regularly
:::

## Legacy Windows Workaround

Sea Lantern is built on Tauri 2, which requires Windows 10 (version 1909+) or Windows 11. Windows 7, 8, and 8.1 are **not supported**.

For users still on older systems, you can install the VxKex extended kernel to supplement the missing runtime libraries and run Sea Lantern on legacy Windows. This method also works for other modern apps that don't support older Windows.

### Steps

1. **Download Sea Lantern**
   - Go to the [Download page](/en/download) and get the Windows installer
   - After installation, **do not open** Sea Lantern yet

2. **Download and install the VxKex extended kernel**
   - The following is a community fork for Chinese users
   - VxKex-NEXT: [github.com/YuZhouRen86/VxKex-NEXT](https://github.com/YuZhouRen86/VxKex-NEXT)
   - Lanzou Cloud: [geekerz.lanzoue.com/b0ra5olfi](https://geekerz.lanzoue.com/b0ra5olfi)
   - Baidu Netdisk: [pan.baidu.com/s/1w0JUk4JpoKiZQVi2LMoqwA?pwd=0000](https://pan.baidu.com/s/1w0JUk4JpoKiZQVi2LMoqwA?pwd=0000) (code: 0000)
   - Install it after downloading

3. **Enable VxKex for Sea Lantern**
   - Right-click the Sea Lantern executable, select "Properties", then the "VxKex" tab
   - Check "Enable VxKex NEXT for this program" and "Report other version of Windows"
   - Click Apply, then OK
   - Sea Lantern should now run on Windows 7
   - All features work except online multiplayer connectivity

### Video Tutorial

If you need a visual guide, see this video: [VxKex Extended Kernel Installation Guide (Chinese)](https://www.bilibili.com/video/BV1SedHYsE6b/)

::: danger Important Warning & Disclaimer
- Using VxKex or other unofficial methods to run Sea Lantern on Windows 7/8/8.1 **is not guaranteed to work** and may cause various errors and compatibility issues
- **The developers will not accept bug reports or fix issues arising from running the software through this method**
- Using such methods may pose system security risks — users assume all responsibility
- Upgrading to Windows 10/11 is strongly recommended for the best experience and full feature support
- Sea Lantern is developed and tested on modern Windows systems — legacy Windows compatibility is not officially supported
:::

## ArchLinux Installation Guide

### ArchLinux users can install Sea Lantern via AUR. The package manager will automatically handle dependencies to ensure the software runs correctly.

### Update Issues on Arch
Due to ArchLinux's rolling release system, some dependency libraries may receive major updates, which can cause Sea Lantern to stop working. Therefore, if your file system is BTRFS, it is recommended to use the snapshot feature to back up your system before updating, so you can quickly roll back if issues arise.

1. **Installing Sea Lantern**
- Install using an AUR helper (like yay):
```bash
yay -S sealantern
```
***Note: It is `sealantern`, not `sea-lantern`***
- Once installed, you can find Sea Lantern in the application menu and launch it, or use the command line:
```bash
sea-lantern
```

2. **Updating Sea Lantern**
- The AUR package updates along with the official version. Use your AUR helper to check for updates:
```bash
yay -Syu sealantern
```
- If issues occur after an update, you can roll back to a previous version:
```bash
yay -S sealantern-<previous_version>
```

3. **Steps to Resolve Update Failures**
- If Sea Lantern fails to start after an update, don’t panic. Try rolling back to the previous version first.
- Then check GitHub to see if other users have reported similar issues or wait for the developers to release a fix.
- Meanwhile, it is recommended not to delete the old package files so you can roll back at any time.
- If you are able, you can try fixing the issue yourself and submit a Pull Request to help the community resolve the problem faster.

If you find that running the update command still results in the old version, try updating the development package:
```bash
yay -Syu --devel sealantern
```

If that still doesn't work, try clearing the cache:
```bash
yay -Sc sealantern
```

## Other Questions

### What permissions does Sea Lantern need?

Sea Lantern needs file system, network, and program execution permissions — these are required for managing Minecraft servers.

### Is Sea Lantern safe?

Sea Lantern is open-source software with fully transparent code. It does not connect to any third-party servers, and all data is stored locally.

### Which Minecraft versions are supported?

Sea Lantern supports all standard Minecraft server versions — just use the corresponding server JAR file.

### How to Back Up the Server?

Server data is stored in the server directory. Key items to back up:

- `world/` directory (main world save)
- `world_nether/` and `world_the_end/` (Nether and End)
- `plugins/` directory (plugins and their configs)
- `server.properties` (server configuration)

::: tip
Regular manual backups are recommended, or use an auto-backup plugin.
:::

### Server Security

- Enable `online-mode=true` for online authentication
- Use the whitelist to restrict player access
- Grant OP permissions carefully
- Keep your server software updated to patch security vulnerabilities
- Don't install plugins from untrusted sources

### Incompatibility After Version Update

- **Always back up** before updating the server
- Confirm all plugins support the new version
- Avoid upgrading across multiple major versions at once (e.g. from 1.16 directly to 1.21)
- If issues arise, roll back to your backup

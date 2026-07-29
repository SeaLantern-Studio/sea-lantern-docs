/** 当前最新版本号，更新时只需修改此处 */
export const VERSION = '1.2.0'

/** GitHub Release 的 tag（不同版本可能不是固定命名规则） */
export const RELEASE_TAG = 'v1.2.0'

/** GitHub Release 下载基础 URL */
export const RELEASE_BASE = `https://cnb.cool/SeaLantern-studio/SeaLantern/-/releases/download/${RELEASE_TAG}`

/** 安装包资产版本（受上游打包命名影响，可能与 VERSION 不一致） */
export const ASSET_VERSION = '1.2.0'

/** RPM 包资产版本（遵循 <version>-<release> 命名） */
export const RPM_ASSET_VERSION = '1.2.0-1'

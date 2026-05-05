# Bot 账号

本页对应 `src/app/login/register-login-actions.ts` 中已注册 action。

## Action 列表

| Action | 说明 |
|---|---|
| `login_by_account` | 账号密码登录 |
| `login_by_qrcode` | 获取扫码登录二维码 |
| `check_device_verify_qrcode_status` | 轮询设备验证二维码状态 |
| `get_device_verify_qrcode` | 获取设备验证二维码 |
| `get_self_info` | 获取当前账号信息 |
| `is_self_login` | 查询当前账号是否已登录 |
| `get_quick_login_list` | 获取可用快速登录列表 |
| `quick_login_by_uin` | 使用指定 `uin` 快速登录 |
| `get_clipboard_msg` | 获取剪贴板消息 |
| `get_account_list` | 获取已登录账号列表 |

## `login_by_qrcode`

无需请求参数。

## `login_by_account`

请求参数：

| 字段 | 类型 | 说明 |
|---|---|---|
| `id` | number | 账号 |
| `password` | string | 原始密码的 MD5 |

## `quick_login_by_uin`

请求参数：

| 字段 | 类型 | 说明 |
|---|---|---|
| `uin` | string | 目标账号，数字字符串 |

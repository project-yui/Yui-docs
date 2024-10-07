# Bot 账号

有关 Bot 账号的相关 API


## 账号操作

> Yui 目前不会通过读取配置信息来进行账户登录

### 获取登录二维码

Action: `login_by_qrcode`

> [!TIP]
> 无需请求参数。

响应数据

| 字段 | 说明 |
|-----|-----|
| qrCodeImage | Base64格式的二维码数据 |
| qrCodeUrl | 二维码的链接地址，暂不明确具体使用方法 |
| expireTime | 过期时间，单位秒，默认120 |

示例：

```json
{
    "id": "1111",
    "status": "ok",
    "retcode": 0,
    "data": {
        "qrCodeImage": "data:image/png;base64,xxxx",
        "qrCodeUrl": "url",
        "expireTime": 120
    },
    "message": ""
}
```

### 账户登录

Action: `login_by_account`

> [!CAUTION]
> 会先判定账户是否可使用账户名进行快速登录，可以会直接登录，无需密码；
> 
> 否则会使用MD5密码进行登录，若登录失败请使用扫码，暂不支持后续操作╮(╯▽╰)╭。

请求数据：

| 字段 | 说明 |
|-----|------|
| id  | 账户  |
| password | 原始密码的MD5 |

```json
{
    "id": "1111",
    "action": "login_by_account",
    "params": {
        "id": 12345678,
        "password": "md5"
    }
}
```

> [!TIP]
> 账户认证还在计划中。

响应数据：

待定...

## 获取已登录的Bot

Action: `get_account_list`

> [!TIP]
> 无需请求参数

### 响应数据：

账号字符串列表

示例：

```JSON
{
    "id": "f1b262e2-cd4e-42b6-a250-f77ecdddf8d5",
    "status": "ok",
    "retcode": 0,
    "data": ["111111", "222222"],
    "message": ""
}
```

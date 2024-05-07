# 公共API

## 消息

TODO...

## 账号操作

> Yukihana 目前不会通过读取配置信息来进行账户登录

### 获取登录二维码

请求信息

```json
{
    "id": "1111",
    "action": "login_by_qrcode",
    "params": {
    }
}
```

响应数据

```json
{
    "id": "1111",
    "status": "ok",
    "retcode": 0,
    "data": {
        "qrCodeImage": "data:image/png;base64,xxxx",
        "qrCodeUrl": "url",
        "expireTime": 2
    },
    "message": ""
}
```

### 账户登录

> 会先判定账户是否可使用账户名直接登录，可以会直接登录，无需密码；
>
> 否则会使用MD5密码进行登录，若登录失败请使用扫码，暂不支持后续操作╮(╯▽╰)╭。

请求数据：

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
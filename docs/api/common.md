# 公共API

## 基础传输

目前通信以 `WebSocket` 为主，涉及文件操作时会使用 `HTTP`。

### 请求说明

使用WebSocket:

| 名词 | 说明 |
|---|---|
| 请求URL | 没有实际作用 |
| 请求体 | JSON格式的数据，包含操作名称以及对应参数 |
| 补充 | 请求体中必须传入 `id` 字段，该字段作为回调ID，将请求数据与响应数据匹配 |

JSON格式：

```JSON
{
    "id": "f1b262e2-cd4e-42b6-a250-f77ecdddf8d5",
    "user": {
        "uin": "操作的账号，必要"
    },
    "action": "get_account_list",
    "params": {
    }
}
```

> 注意
>  
> `uin`目前为必传，因为系统支持多账号，不传会无法分辨操作目标。
> 
> 可能会考虑在只有一个账号时可忽略。

### 响应说明

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

`status` 字段：

| 取值 | 说明 |
|-----|------|
| ok | 成功 |
| failed | 失败 |

`retcode` 字段：

| 取值 | 说明 |
|------|------|
| 0 | 成功 |
| 其它 | 失败，原因在`message` |


## 发送消息

Action: `send_message`

请求数据：

| 字段 | 类型 | 说明 |
|-----|------|------|
| detail_type | 'group' | 固定字符串值，group |
| group_id | int64 | 群id |
| message | array<[message](../reference/message)> | 消息元素数组 |

响应数据：

| 字段 | 类型 | 说明 |
|-----|------|------|
| msg_id | string | 消息id，19位长度的数字字符串 |

## 发送转发消息

> 支持版本：内部开发版

样例：

```json
{
    "id": "1111",
    "action": "send_forward_message",
    "params": {
        "detail_type": "group",
        "group_id": "999999999",
        "message": [
            {
                "type": "multiforward",
                "data": {
                    "forward_data": {
                        "from_type": "group/friend",
                        "group_id": "88888888",
                        "sender_id": "12345678",
                        "items": [
                            {
                                "msg_id": "1221432",
                                "msg_time": 1709907454,
                                "sender_uin": 12345676,
                                "sender_uid": "u_xxx",
                                "sender_member_name": "test",
                                "elements": [
                                    {
                                        "type": "text",
                                        "data": {
                                            "text": "forward msg1"
                                        }
                                    }
                                ]
                            },
                            {
                                "msg_id": "1221433",
                                "msg_time": 1709907459,
                                "sender_uin": 12345675,
                                "sender_uid": "u_xxx",
                                "sender_member_name": "test",
                                "elements": [
                                    {
                                        "type": "text",
                                        "data": {
                                            "text": "forward msg2"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                }
            }
        ]
    }
}
```
# 群API

## 获取群列表

Action: `get_group_list`

> [!TIP]
> 无需请求参数

响应数据：

群信息数组，群信息结构如下：

| 字段 | 类型 | 说明 |
|-----|------|------|
| code | int64 | 群id |
| name | string | 群名称 |
| avatar_url | string | 群头像链接 |
| role | string(enum) | 'owner'(群主) / 'member'(群成员) / 'manager'(管理员) |
| top | boolean | 是否置顶 |
| topped_timestamp | int64 | 置顶时间 |
| is_conf | boolean | 待确认 |

## 获取群资料

Action: `get_group_info`

请求数据：

| 字段 | 类型 | 说明 |
|-----|------|------|
| group_id | int64 | 群id |

响应数据：

| 字段 | 类型 | 说明 |
|-----|------|------|
| id | int64 | 群id |
| name | string | 群名称 |
| avatar_url | string | 群头像 |

## 发送消息

Action: `send_message`

请求数据：

| 字段 | 类型 | 说明 |
|-----|------|------|
| detail_type | 'group' | 固定字符串值，group |
| group_id | int64 | 群id |
| message | array | 消息元素数组 |

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
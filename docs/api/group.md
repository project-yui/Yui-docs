# 群API

## 获取群资料

TODO...

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
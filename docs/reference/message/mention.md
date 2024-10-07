# At 消息

Type: `mention`

| Data 字段 | 类型 | 说明 |
|-----|------|-----|
| at | object | At 定义内容 |

At 定义：

| 字段 | 类型 | 说明 |
|-----|------|-----|
| isAll | boolean | At 目标是否全体成员 |
| uin | number | At 特定指定人员时，目标账号 |
| uid | string | At 特定指定人员时，目标ID，`u_xxx` |
| name | string | At 特定指定人员时，目标昵称/名称 |

样例： 

```JSON
{
    "type": "mention",
    "data": {
        "at": {
            "isAll": false,
            "uin": 123456789,
            "uid": "u_useridididid",
            "name": "昵称/名称"
        }
    }
}
```
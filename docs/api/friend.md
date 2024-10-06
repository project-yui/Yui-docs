# 好友API

## 获取好友的分组及列表

Action: `get_friend_list_with_group`

> [!TIP]
> 无需请求参数

响应数据：

响应内容为 json 数组, 每个元素结构如下：

| 字段 | 类型 | 说明 |
|------|-----|-----|
| id  | int32 | 分组id |
| name | string | 分组名称 |
| count | int32 | 在线人数 |
| friend_list | list | 好友数组 |

好友元素结构如下：

| 字段 | 类型 | 说明 |
|------|-----|-----|
| uin | int64 | 好友QQ号 |
| nick | string | 昵称 |
| avatar_url | string | 头像链接 |
| remark | string | 备注 |
| long_nick | string | 个性签名 |

响应示例：
<details>

<summary>点我查看</summary>

```JSON
{
    "id": "d52bc1ef-e5bf-4fef-848a-2ba1296e8f09",
    "status": "ok",
    "retcode": 0,
    "data": [
        {
            "id": 9999,
            "name": "特别关心",
            "count": 0,
            "friend_list": []
        },
        {
            "id": 0,
            "name": "我的好友",
            "count": 1,
            "friend_list": [
                {
                    "uin": "12345678",
                    "nick": "昵称",
                    "avatar_url": "https://q1.qlogo.cn/g?b=qq&nk=12345678&s=100",
                    "remark": ""
                }
            ]
        },
        {
            "id": 1,
            "name": "朋友",
            "count": 0,
            "friend_list": [
            ]
        },
        {
            "id": 2,
            "name": "家人",
            "count": 0,
            "friend_list": []
        },
        {
            "id": 3,
            "name": "同学",
            "count": 0,
            "friend_list": []
        }
    ],
    "message": ""
}
```

</details>

## 获取好友信息

Action: `get_user_info`

请求数据：

| 字段 | 类型 | 说明 |
|-----|------|------|
| userUid | string | 用户id, u_xxxx |

响应数据：

| 字段 | 类型 | 说明 |
|-----|------|------|
| uid | string | 用户id, u_xxxx |
| uin | number | 用户账号 |
| nick | string | 昵称 |
| avatar_url | string | 头像链接 |

## 给好友点赞

Action: `send_like_friend`

请求数据：

| 字段 | 类型 | 说明 |
|-----|------|------|
| user_id | string | 用户id，u_xxxx |
| count | int32 | 点赞数量 |

响应数据：

| 字段 | 类型 | 说明 |
|-----|------|------|
| succ_counts | int32 | 实际点赞数量 |
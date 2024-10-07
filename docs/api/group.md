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

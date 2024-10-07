# 图片消息结构

Type: `image`

| Data 字段 | 类型 | 说明 |
|-----|------|-----|
| pic | object | 图片定义内容 |

图片定义：

| 字段 | 类型 | 说明 |
|-----|------|-----|
| path | string | 图片本地路径（高优先级） |
| url | string | 图片网络路径（低优先级） |

> [!TIP] 注意
> `path` 非空时，`url` 会被忽略
> 
> `path` 为空或路径无效时，会使用 `url` 下载图片
>
> `path` 可通过上传文件的HTTP接口得到。

样例：

```JSON
{
    "type": "image",
    "data": {
        "pic": {
            "path": "z:/path/to/image.jpg",
            "url": "http://example.com/image.jpg"
        }
    }
}
```
# 图片消息结构

| 字段 | 类型 | 说明 |
|-----|------|-----|
| pic | object | 图片定义内容 |

图片定义：

| 字段 | 类型 | 说明 |
|-----|------|-----|
| type | 'simple'/'emoji' | 图片类型：simple - 普通图片；emoji - 表情图片 |
| width | number | 图片宽度 |
| height | number | 图片高度 |
| size | number | 图片大小 |
| path | string | 图片路径 |
| url | string | 图片网络路径 |
| md5 | string | 图片md5 |

样例：

```JSON
{
    "type": "image",
    "data": {
        "pic": {
            "type": "simple",
            "width": 0,
            "heith": 0,
            "size": 0,
            "path": "z:/path/to/image.jpg",
            "url": "http://example.com/image.jpg",
            "md5": "11111111111111112222222222222222"
        }
    }
}
```
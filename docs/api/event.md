# 事件API

本页基于 `src/adapters/onebot/**` 与 `src/onebot/contracts/event.ts`。

## 事件通用结构

Yui 通过 WebSocket 主动推送事件，统一结构如下：

```json
{
  "time": 1710000000000,
  "self": {
    "id": 12345678,
    "uid": "u_xxx"
  },
  "type": "message",
  "detail_type": "group",
  "sub_type": "",
  "data": {}
}
```

字段说明：

| 字段 | 说明 |
|---|---|
| `time` | 事件时间戳 |
| `self` | 当前 bot 身份信息 |
| `type` | 事件主类型：`message` / `notice` / `meta` / `request` |
| `detail_type` | 事件详细类型 |
| `sub_type` | 事件子类型 |
| `data` | 事件载荷 |

## 消息域事件

来源：`register-message-events.ts`

### `type=message`

`detail_type`：

- `private`：私聊消息
- `group`：群消息

`data` 主要字段：

| 字段 | 说明 |
|---|---|
| `messageId` | 消息 ID |
| `messageSeq` | 消息序号 |
| `groupId` | 群号（私聊为 0） |
| `groupName` | 群名（私聊为空） |
| `senderUid` | 发送者 uid |
| `senderId` | 发送者 QQ |
| `senderMemberName` | 发送者群名片/昵称 |
| `elements` | 消息元素列表 |
| `records` | 引用消息列表 |

### `type=notice`

- `detail_type=group_message_post_send`：本机发送消息后事件
- `detail_type=group_message_delete`，`sub_type=recall`：群消息撤回
- `detail_type=private_message_delete`，`sub_type=recall`：私聊消息撤回
- `detail_type=group_nudge`：群戳一戳
- `detail_type=private_nudge`：私聊戳一戳

## 登录域事件

来源：`register-login-events.ts`

均为 `type=notice`，`sub_type=""`：

- `login.qrcode.fetch`：二维码获取成功
- `login.qrcode.scanned`：二维码已被扫描
- `login.qrcode.success`：二维码登录成功
- `login.qrcode.timeout`：二维码超时
- `login.qrcode.refused`：二维码登录被拒绝
- `login.qrcode.alreadyLogin`：账号已登录
- `login.account.deviceConfirm`：设备验证状态（通用）
- `login.account.deviceConfirm.cancel`：设备验证取消
- `login.account.deviceConfirm.rejected`：设备验证拒绝
- `login.account.deviceConfirm.timeout`：设备验证超时
- `login.account.deviceConfirm.unknown`：设备验证未知状态
- `login.account.deviceConfirm.success`：设备验证通过

## 账号域事件

来源：`register-account-events.ts`

- `type=notice`
- `detail_type=account.kickedOffline`
- `sub_type=""`

`data` 中包含被踢下线相关原始载荷（`p1` 字段）。

## 注意事项

- 消息事件会过滤“超过一分钟的旧消息”和部分不支持的聊天类型。
- 撤回事件来源于消息更新监听，不是单独的消息接收回调。

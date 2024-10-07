# 使用Docker

Yui支持使用Docker，镜像可在Docker Hub取得。

## 拉取镜像

```shell
docker pull msojocs/yui:latest
```

## 准备Dockerfile

Dockerfile:

```Dockerfile
FROM msojocs/yui:v3.2.5-21453

COPY ./ntqq/resources/app/app_launcher/index.js /opt/qq/resources/app/app_launcher/index.js
COPY ./ntqq/resources/app/app_launcher/core.jsc /opt/qq/resources/app/app_launcher/core.jsc
```

docker-compose.yml:

```yaml
services:
  yui:
    build:
      context: .
      dockerfile: Dockerfile
    tty: true
    container_name: yui
    restart: always
    ports:
      - "8080:8080"
    environment:
      - TZ=Asia/Shanghai
      - YUKIHANA_LOG=true
    volumes:
      - ./data/QQ:/root/.config/QQ
```

## 开始运行

```shell
docker-compose up -d
```

## 日志追踪

```shell
docker logs yui -f
```
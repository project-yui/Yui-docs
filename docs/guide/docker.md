# 使用Docker

Yukihana支持使用Docker，镜像可在Docker Hub取得。

## 拉取镜像

```shell
docker pull msojocs/yukihana:latest
```

## 准备Dockerfile

Dockerfile:

```Dockerfile
FROM msojocs/yukihana:v3.2.5-21453

COPY ./ntqq/resources/app/app_launcher/index.js /opt/qq/resources/app/app_launcher/index.js
COPY ./ntqq/resources/app/app_launcher/core.jsc /opt/qq/resources/app/app_launcher/core.jsc
```

docker-compose.yml:

```yaml
services:
  yukihana:
    build:
      context: .
      dockerfile: Dockerfile
    tty: true
    container_name: yukihana
    restart: always
    ports:
      - "8080:8080"     #red默认端口
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
docker logs yukihana -f
```
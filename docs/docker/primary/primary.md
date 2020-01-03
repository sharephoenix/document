# Docker 简单打包镜像

## demo

1. 创建 docker 文件夹。
2. docker 文件夹中创建 Dockerfile main.go 文件。 文件目录如下：
3. main.go 中的代码，和 Dockerfile 中的内容如下
4. 进入 docker 文件夹中执行： docker build -t zcdocker .
5. 运行 docker run -it -d -p 9191:8080  zcdocker

```Dir
- docker
 - Dockerfile
 - main.go
```

```go
package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/zc",hello)
	http.ListenAndServe(":8080",nil)
}

func hello(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w,"Hello Docker Form Golang!")
}
```

```Dockerfile
FROM golang # 基础镜像

MAINTAINER lanys "550709871@qq.com" # 作者 联系方式

WORKDIR $GOPATH/src/godocker # 为后续命令配置工作目录

ADD . $GOPATH/src/godocker # ADD SRC DEST

RUN go build main.go

EXPOSE 8080

ENTRYPOINT ["./main"] # 运行时候指定的命令
```

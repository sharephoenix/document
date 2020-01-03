FROM golang

MAINTAINER lanys "550709871@qq.com"

WORKDIR $GOPATH/src/godocker

ADD . $GOPATH/src/godocker

RUN go build main.go

EXPOSE 8080

ENTRYPOINT ["./main"]

# j2objc

## 什么是 j2objc?

j2objc 是 google 研发，可以将 java 的逻辑代码翻译成 oc 代码的工具，可以实现 android ios 网络，数据库等服务的，代码公用。

## j2bojc 安装准备

将 j2objc 下载到本地，并配置好环境变量

## 编译脚本

```sh
# https://stackoverflow.com/questions/29365645/how-to-translate-an-entire-folder-or-package-from-java-to-objective-c

if [ ! -f "/Users/apple/Library/j2objc-2.3/j2objc" ]; then 
echo "J2OBJC_HOME is not correctly defined, currently set to '${J2OBJC_HOME}'"; 
exit 1; 
fi;

excommand="/Users/apple/Library/j2objc-2.3/j2objc"
javaSource="/Users/apple/MyClientRemote/j2objc/CocoaPodsTest/CocoaPodsTest/JavaSource/src"
resultSource="/Users/apple/MyClientRemote/j2objc/CocoaPodsTest/CocoaPodsTest/JavaSource/src"
echo "start"
cd /Users/apple/Library/j2objc-2.3/
j2objc -h

j2objc -d ${resultSource}/oc -sourcepath ${javaSource}  --swift-friendly \
-classpath $J2OBJC/lib/javax-inject.jar \
    `find ${javaSource} -name '*.java'`

open ${resultSource}/oc
echo "finish"
```

## [demo](https://github.com/sharephoenix/j2objc)

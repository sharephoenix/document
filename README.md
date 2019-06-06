# 使用 vuepress 写自己的文档
1. 周报
2. 代码 review 总结
3. 个人推销 个人网站准备搭建过程


```js
# 将 VuePress 作为一个本地依赖安装
yarn add -D vuepress # 或者：npm install -D vuepress

# 新建一个 docs 文件夹
mkdir docs

# 新建一个 markdown 文件
echo '# Hello VuePress!' > docs/README.md

# 开始写作
npx vuepress dev docs
```
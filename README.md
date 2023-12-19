## 框架内容

```
vue3+vite+scss+element plus+pinia+vue router+axios+pnpm
```

## 具体版本

| 名称             | 版本    |
| ---------------- | ------- |
| node             | 20.10.0 |
| pnpm             | 8.7.1   |
| vite             | 5.0.0   |
| vue              | 3.3.8   |
| vue-router       | 4.0.13  |
| pinia            | 2.1.7   |
| element-plus     | 2.4.3   |
| vite-plugin-mock | 2.9.6   |

## pnpm 安装及使用

```
//安装
npm install -g pnpm
//获取当前配置的镜像地址
pnpm get registry
//设置新的镜像地址--根据情况判断是否需要设置
pnpm set registry https://registry.npm.taobao.org
```

基本命令

```
pnpm install 安装全部依赖
pnpm add PackageName 安装指定包
pnpm remove PackageName 删除指定脚本
pnpm serve(脚本名称) 运行脚本serve相当于npm中的npm run serve
```

## nvm node 管理工具

建议使用 nvm node 管理工具管理 node 版本 可以多版本切换，根据不同的项目使用不同的 node
[下载地址](https://github.com/coreybutler/nvm-windows/releases)--下载 nvm-setup.exe
常用命令：

```
//安装
nvm install 18.16.1(下载18.16.1版本)
nvm use 18.16.1 (使用某个node版本)
nvm ls (展示所有的node版本和当前正在使用的node版本)

```

[搭建过程参考](https://juejin.cn/post/7228990409909108793#heading-1)
[vue-pure-admin 参考](https://yiming_chang.gitee.io/pure-admin-doc/pages/introduction/)
[vue3 官网](https://cn.vuejs.org/guide/essentials/application.html)
前端规范地址：http://192.168.143.143/svn/R28/100-（知识库）/40-智能风控组/前端/前端规范

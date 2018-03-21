最简单直接的 Koa2 的脚手架 - **koa2-safe-start**

## 哲学

**我不想知道你的哲学，但我想立即开始并完成工作**

* 迅速开发　-　自动热重启服务 + 测试驱动开发模式 + 重置数据库(by cli)
* 生产就绪　-　有node 和 npm 马上可以部署,不用安装任何东西
* 从众 - 80%人会做的设计决定(design decision)和80%人会使用的库(library)
* 结构简单　-　routes + MVC + 中间件(Middleware)
* 没有魔法 - 可由app.js 开始 , 25 分钟读懂的代码

## 特别之处
1. 没有babel配置(Node 9)
2. Nodemon 自动热重启服务
3. 自带会员系统 (可选)(Passport js)
4. 邮件服务 (Sparkpost)
5. 对象关系映射(ORM) (Sequelize)
6. 多个配置(/.env production.json,test.json,development.json)
7. koa-router


## 定位

*　koa 2 入门至中级䦕发者
*　1-5 位䦕发者
*　小微IT企业
*　没有魔法(易用易写易看易学的车子结构)

P.S
如果你的开发团队人数大于10人且人人都是koa大神,eggjs 会是更适合你

## 技术堆栈
1. Node js
2. koa2
3. Sequelize
4. Mysql/SQlite

## 安装并运行
```
1. git clone git@github.com:chungchi300/koa2-safe-start.git
//更改 database
2. src/config/default.js  (default sqlite but suggest mysql in production)
3. npm i && npm run reset && npm start
```

访问

* http://localhost:3000
* http://localhost:3000/feedback

## 测试服务器
* http://45.76.76.16:3000/
* http://45.76.76.16:3000/feedback

## 开发模式

文件修改后nodemon**立即自动重启** Node.js 服务
```
npm run start
```

[![在优酷上观看](https://t4.ftcdn.net/jpg/01/12/56/73/240_F_112567399_fVHoy5kIkNXdDnwCSpaSkDC3wmH9NVCs.jpg)](http://v.youku.com/v_show/id_XMzM0NDQ5MDg1Ng==.html?spm=a2hzp.8253869.0.0)

## 测试驱动开发模式

文件修改后Jest**立即自动重新运行**所有测试

```
npm run test
```

[![在优酷上观看](https://t4.ftcdn.net/jpg/01/12/56/73/240_F_112567399_fVHoy5kIkNXdDnwCSpaSkDC3wmH9NVCs.jpg)](http://v.youku.com/v_show/id_XMzM0NDQ5NTMwMA==.html?spm=a2hzp.8253869.0.0)

## 线上模式

使用pm2是node进程管理器,如果node进程崩溃**立即自动重启**进程
```
npm run production
```


[![在优酷上观看](https://t4.ftcdn.net/jpg/01/12/56/73/240_F_112567399_fVHoy5kIkNXdDnwCSpaSkDC3wmH9NVCs.jpg)](http://v.youku.com/v_show/id_XMzM0NDQ5ODU3Ng==.html?spm=a2hzp.8253869.0.0)



## 配置&&部署线上
默认配置文件位于 src/config/default.js.

.env 配置会覆盖(override) 默认配置.

e.g

.env/production.json 覆盖 src/config/default.js 配置

## 线上3000 port转80

https://stackoverflow.com/questions/16573668/best-practices-when-running-node-js-with-port-80-ubuntu-linode


## 谢谢
使用部分代码和概念于

[17koa2](https://github.com/17koa/koa2-startkit)

[koa2-server](https://github.com/zhongxia245/koa2-server)

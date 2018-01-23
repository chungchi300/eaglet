简單武断的 Koa2 的脚手架

## 哲学

**我不想知道你的哲学，但我想立即开始并完成工作**

* 迅速开发　-　自动热重启服务 + 测试驱动开发模式 + 重置数据库(by cli)
* 生产就绪　-　有node 和 npm 馬上可以部署,不用安裝任何东西
* 從眾 - 80%人会做的设计决定(design decision)和80%人会使用的库(library)
* 结构简單　-　routes + MVC + 中间件(Middleware)
* 没有魔法 - 可由app.js 開始 , 25 分钟读懂的代码

## 特别之处
1. 没有babel配置(Node 9)
2. Nodemon 自动热重启服务
3. 自帶会员系统 (可拆开)(Passport js)
4. 邮件服务 (Sparkpost)
5. 对象关系映射(ORM) (Sequelize)
6. 多个配置
7. koa-router

## 开发模式

文件修改后自动重启 Node.js 自动热重启服务

## 测试驱动开发模式

Jest

npm run test

## 生产模式

pm2

production

## 配置
默认配置文件位于 src/config/default.js.

.env 配置会覆盖(override) 默认配置.

e.g

.env/production.json 覆盖 src/config/default.js 配置

## Thanks
使用代碼於

17koa2

koa2-server

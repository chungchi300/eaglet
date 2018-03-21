const http = require('http');
const Koa = require('koa');
const path = require('path');
const views = require('koa-views');
const convert = require('koa-convert');
const json = require('koa-json');
const Bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const koaStatic = require('koa-static-plus');
const koaOnError = require('koa-onerror');
const cors = require('@koa/cors');
const passport = require('koa-passport');
require('./smartRequire');
// const session = require('koa-session');
// console.log('the dirname', __dirname);
// global.appRoot = '/home/jeffchung/work/source/web/js/personal/koa2-startkit';
global.srcRoot = __dirname;
const config = smartRequire('config');

//
const app = new Koa();

// trust proxy
// app.proxy = true;
// app.keys = ['your-session-secret'];
// app.use(session({}, app));

const bodyparser = Bodyparser();
//create sequelize object and load sequelize models in global scope
smartRequire('services/orm/sequelize.js');

// middlewares
app.use(cors());
app.use(convert(bodyparser));
app.use(convert(json()));
app.use(convert(logger()));

app.use(passport.initialize());
// app.use(passport.session());
//to let route use the passport object
// static
app.use(
  convert(
    koaStatic(path.join(__dirname, '../public'), {
      pathPrefix: '',
    })
  )
);

// views
app.use(
  views(path.join(__dirname, '../views'), {
    extension: 'ejs',
  })
);
//
//

// http status logger response
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});
// error logger
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = 400;
    console.log(err);
    err.expose = true;
    err._error = err.message;
    ctx.body = err;
  }
});

// response router
app.use(async (ctx, next) => {
  await smartRequire('routes').routes()(ctx, next);
});
app.use(async (ctx, next) => {
  await smartRequire('routes').allowedMethods();
});
// database
app.use(async (ctx, next) => {
  console.log('middle ware');
  await next();
});

const port = parseInt(config.port || '3000');
const server = http.createServer(app.callback());

server.listen(port);
server.on('error', error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(port + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(port + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
});
server.on('listening', () => {
  console.log('Listening on port: %d', port);
});

module.exports = server;

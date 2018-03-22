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

const config = smartRequire('config');
const httpLogger = smartRequire('middleware/httpLogger');
const presentError = smartRequire('middleware/presentError');

//
const app = new Koa();

const bodyparser = Bodyparser();

// middlewares
app.use(cors());
app.use(convert(bodyparser));
app.use(convert(json()));
app.use(convert(logger()));

app.use(passport.initialize());

// http status logger response
app.use(httpLogger);
// error logger
app.use(presentError);

// response router
app.use(async (ctx, next) => {
  await smartRequire('router').routes()(ctx, next);
});
app.use(async (ctx, next) => {
  await smartRequire('router').allowedMethods();
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

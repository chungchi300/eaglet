require('./smartRequire');

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

const config = smartRequire('config');
const httpLogger = smartRequire('middleware/httpLogger');
const presentError = smartRequire('middleware/presentError');

//
const app = new Koa();

const bodyparser = Bodyparser();
app.use(
  convert(
    koaStatic(path.join(__dirname, '../public'), {
      pathPrefix: '',
    })
  )
);
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

/*

    Add your custom reducers

    // views
    app.use(
      views(path.join(__dirname, '../views'), {
        extension: 'ejs',
      })
    );

*/

module.exports = app;

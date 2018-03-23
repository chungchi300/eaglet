const parseError = smartRequire('lib/parseError');
module.exports = async function presentError(ctx, next) {
  try {
    await next();
  } catch (err) {
    ctx.status = 400;
    console.log(err);
    err.expose = true;

    switch (err.name) {
      case 'SequelizeValidationError':
        err = parseError.sequenlize(err);
        break;
      default:
        err = parseError.basic(err);
    }
    ctx.body = err;
  }
};

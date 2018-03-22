module.exports = async function presentError(ctx, next) {
  try {
    await next();
  } catch (err) {
    ctx.status = 400;
    console.log(err);
    err.expose = true;
    err._error = err.message;
    ctx.body = err;
  }
};

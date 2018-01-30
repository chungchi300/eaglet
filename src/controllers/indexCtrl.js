module.exports = async (ctx, next) => {
  const app = 'koa2-safe-start';
  const author = 'Jeff Chung';
  const message = 'Welcome my friend';
  ctx.body = { app: app, author: author, message: message };
};

module.exports = async (ctx, next) => {
  const app = 'safe-start-koa2';
  const author = 'Jeff Chung';
  const message = 'Welcome my friend';
  ctx.body = { app: app, author: author, message: message };
};

module.exports = async (ctx, next) => {
  // // //
  const err = new Error('demo exception');

  throw err;
  // ctx.body = 'dd';
};

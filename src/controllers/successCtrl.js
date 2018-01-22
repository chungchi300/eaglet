module.exports = async (ctx, next) => {
  try {
    //
    // //

    ctx.body = { result: 'success' };
  } catch (err) {
    console.log('e', err);
  }
};

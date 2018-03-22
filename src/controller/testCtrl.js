module.exports = async (ctx, next) => {
  let author = 'jeffchung - the ninja,the student and the teacher';
  let current = new Date();

  ctx.body = { title: author, current: current };
};

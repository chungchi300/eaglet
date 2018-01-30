const _ = require('lodash');
//annonymous object!!(not class) with multiple
function getResourceName(url) {
  const res = /^\/(\w+)/.exec(url);
  return _.upperFirst(res[1]);
}
module.exports = class RestResourceCtrl {
  async list(ctx, next) {
    try {
      //
      // //

      let resources = await global.orm[
        getResourceName(ctx.request.url)
      ].findAll({
        include: [{ all: true }],
      });
      ctx.set('X-Total-Count', resources.length);
      ctx.set('Access-Control-Expose-Headers', 'X-Total-Count');

      ctx.body = resources;
    } catch (err) {
      console.log('e', err);
    }
  }
  async show(ctx, next) {
    try {
      //
      // //

      let resource = await global.orm[
        getResourceName(ctx.request.url)
      ].findAll({
        include: [{ all: true }],
        where: {
          id: ctx.params.id,
        },
      });

      ctx.body = resource[0];
    } catch (err) {
      console.log('e', err);
    }
  }
  async create(ctx, next) {
    //
    // //
    console.log('create', ctx.request.body);
    let resource = await global.orm[getResourceName(ctx.request.url)].create(
      ctx.request.body
    );
    ctx.body = resource.id;
  }
  async update(ctx, next) {
    try {
      //
      // //
      let resource = await global.orm[
        getResourceName(ctx.request.url)
      ].update(ctx.request.body, { where: { id: ctx.params.id } });
      ctx.body = { operation: 'done' };
    } catch (err) {
      console.log('e', err);
    }
  }
  async delete(ctx, next) {
    //
    // //
    let resource = await global.orm[getResourceName(ctx.request.url)].destroy({
      where: {
        id: ctx.params.id,
      },
    });

    ctx.body = ctx.params.id;
  }
};

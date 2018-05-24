const _ = require('lodash')
//annonymous object!!(not class) with multiple

import {
  list,
  getResourceName,
  find,
  create,
  update,
  remove
} from 'lib/adminOnRest'
export default class RestResourceCtrl {
  async list(ctx, next) {
    try {
      //
      // //

      let resources = await list(getResourceName(ctx.request.url))
      ctx.set('X-Total-Count', resources.length)
      ctx.set('Access-Control-Expose-Headers', 'X-Total-Count')

      ctx.body = resources
    } catch (err) {
      console.log('e', err)
    }
  }
  async show(ctx, next) {
    try {
      //
      // //

      ctx.body = await find(getResourceName(ctx.request.url), ctx.params.id)
    } catch (err) {
      console.log('e', err)
    }
  }
  async create(ctx, next) {
    //
    // //
    console.log('create', ctx.request.body)
    let resource = await create(
      getResourceName(ctx.request.url),
      ctx.request.body
    )
    ctx.body = resource.id
  }
  async update(ctx, next) {
    try {
      //
      // //

      ctx.body = await update(
        getResourceName(ctx.request.url),
        ctx.params.id,
        ctx.request.body
      )
    } catch (err) {
      console.log('e', err)
    }
  }
  async remove(ctx, next) {
    //
    // //

    await remove(getResourceName(ctx.request.url), ctx.params.id)
    ctx.body = 'deleted'
  }
}

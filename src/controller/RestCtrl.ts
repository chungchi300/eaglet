const _ = require('lodash')
//annonymous object!!(not class) with multiple

import { list, getResourceName } from 'lib/adminOnRest'
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

      let resource = await find(getResourceName(ctx.request.url))

      ctx.body = resource[0]
    } catch (err) {
      console.log('e', err)
    }
  }
  async create(ctx, next) {
    //
    // //
    console.log('create', ctx.request.body)
    let resource = await orm[getResourceName(ctx.request.url)].create(
      ctx.request.body
    )
    ctx.body = resource.id
  }
  async update(ctx, next) {
    try {
      //
      // //
      let resource = await orm[getResourceName(ctx.request.url)].update(
        ctx.request.body,
        { where: { id: ctx.params.id } }
      )
      ctx.body = { operation: 'done' }
    } catch (err) {
      console.log('e', err)
    }
  }
  async delete(ctx, next) {
    //
    // //
    let resource = await orm[getResourceName(ctx.request.url)].destroy({
      where: {
        id: ctx.params.id
      }
    })

    ctx.body = ctx.params.id
  }
}

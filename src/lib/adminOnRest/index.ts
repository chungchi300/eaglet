import _ from 'lodash'
import { getConnection } from 'typeorm'
import { DB } from '../orm/util'
export function getResourceName(url) {
  const res = /^\/(\w+)/.exec(url)
  if (res == null) {
    throw new Error('resource mapping fail')
  }
  return _.upperFirst(res[1])
}
export async function list(resourceName: string) {
  let repository = (await DB()).manager.getRepository(resourceName)
  let resources = await repository.find()
  return resources
}
export async function find(resourceName: string, id: number) {
  let repository = (await DB()).manager.getRepository(resourceName)
  return (await repository.find({ id: id }))[0]
}

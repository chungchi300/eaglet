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
  return await repository.findOneOrFail({ id: id })
}
export async function create(resourceName: string, data) {
  let repository = (await DB()).manager.getRepository(resourceName)
  console.log('creating')
  return await repository.save(data)
}
export async function update(resourceName: string, id: number, data) {
  let repository = (await DB()).manager.getRepository(resourceName)

  console.log('creating')
  await repository.update({ id: id }, data)
  return await find(resourceName, id)
}

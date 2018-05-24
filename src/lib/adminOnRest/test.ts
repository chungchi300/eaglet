import _ from 'lodash'
import { getResourceName, list, find } from 'lib/adminOnRest'
import { reloadDatabase } from 'lib/orm/util'
import User from 'service/Membership/orm/entity/User'

afterEach(() => {})
beforeEach(async () => {
  let connection = await reloadDatabase()
  // console.log('User Repository', connection.manager.getRepository('User'))
  await connection.manager.getRepository('User').save({
    name: 'demo',
    token: '123323',
    phone: 'asdsad',
    password: 'asdasd'
  })
  // console.log(
  //   'connection manager',
  //   connection.entityMetadatas.map(entityMetaData => entityMetaData.tableName)
  // )
  let user = new User()
  user.name = 'jeasdasdff'
  user.token = '123'
  user.phone = '67348649'
  user.password = 'qweqwe'
  await connection.manager.save(user)
})
describe('get Resource name', () => {
  it('resource name', () => {
    expect(getResourceName('/user')).toBe('User')
  })
  it('list', async () => {
    expect(await list('User')).toEqual([
      {
        id: 1,
        token: '123323',
        phone: 'asdsad',
        phoneVerified: false,
        email: null,
        emailVerified: false,
        password: 'asdasd',
        name: 'demo',
        banned: false
      },
      {
        id: 2,
        token: '123',
        phone: '67348649',
        phoneVerified: false,
        email: null,
        emailVerified: false,
        password: 'qweqwe',
        name: 'jeasdasdff',
        banned: false
      }
    ])
  })
  it('find', async () => {
    expect(await find('User', 1)).toEqual({
      id: 1,
      token: '123323',
      phone: 'asdsad',
      phoneVerified: false,
      email: null,
      emailVerified: false,
      password: 'asdasd',
      name: 'demo',
      banned: false
    })
  })
})

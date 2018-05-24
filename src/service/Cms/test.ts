const request = require('supertest')
const fs = require('fs')
const path = require('path')
import mail from 'lib/mail'
import { reloadDatabase, DB } from 'lib/orm/util'
import User from 'service/Membership/orm/entity/User'
import Feedback from 'service/Analytic/orm/entity/Feedback'
import RestResourceCtrl from 'controller/RestCtrl'

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
  let feedback = new Feedback()
  feedback.content = 'eaglet is very efficient'
  feedback.user = user
  await connection.manager.save(feedback)
})
describe('membership', () => {
  it('basic', () => {
    mail({ emailData: 'asd' })
    expect(true).toBe(true)
  })
})

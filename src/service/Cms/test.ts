const request = require('supertest')
const fs = require('fs')
const path = require('path')
import mail from 'lib/mail'
import { reloadDatabase } from 'lib/orm/util'
import User from 'service/Membership/orm/entity/User'
import Feedback from 'service/Analytic/orm/entity/Feedback'
afterEach(() => {})
beforeEach(async () => {
  let connection = await reloadDatabase()
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

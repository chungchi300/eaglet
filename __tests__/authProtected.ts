const request = require('supertest')
const fs = require('fs')
const path = require('path')
const httpServer = require('../src/httpServer')
const Membership = smartRequire('service/Membership')
const sequelize = smartRequire('sequelize')
const orm = smartRequire('orm')

afterEach(() => {})
beforeEach(() => {
  return sequelize.sync({ force: true })
})
var testingEmail = 'chungchi300@gmail.com'

async function pRegister() {
  let otp = await Membership.createOtp(testingEmail)
  // let previousUser = await orm.User.count();
  return await Membership.register(
    {
      name: 'jeffchung杰夫',
      phone: '',
      email: testingEmail,
      password: '123456'
    },
    otp.code
  )
}
afterEach(() => {
  httpServer.close()
})
describe('membership', () => {
  test('me with token', async () => {
    let user = await pRegister()

    const response = await request(httpServer)
      .get('/membership/me')
      .set('Authorization', 'bearer ' + user.token)

    expect(response.status).toEqual(200)
    expect(response.type).toEqual('application/json')
    expect(response.body.email).toEqual(testingEmail)
  })
  test('me with invalid token', async () => {
    let user = await pRegister()

    const response = await request(httpServer)
      .get('/membership/me')
      .set('Authorization', 'bearer ' + 'dummy' + user.token)

    expect(response.status).toEqual(400)
    expect(response.type).toEqual('application/json')
  })
})

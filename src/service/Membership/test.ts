const request = require('supertest')
const fs = require('fs')
const path = require('path')
import mail from 'lib/mail'
// all using same config and sequelize sinced cached

// const Membership = smartRequire('service/Membership')
afterEach(() => {})
beforeEach(() => {
  // return sequelize.sync({ force: true })
})
// describe('membership', () => {
//   it('basic', () => {
//     mail({ emailData: 'asd' })
//     expect(true).toBe(true)
//   })
// })
// async function pRegister(username, password) {
//   let otp = await Membership.createOtp(username)
//   // let previousUser = await orm.User.count();
//   return await Membership.register(
//     {
//       name: 'jeffchung杰夫',
//       phone: '',
//       email: username,
//       password: password
//     },
//     otp.code
//   )
// }
// describe('membership', () => {
//   var testingEmail = 'chungchi300@gmail.com'
//   var testingPhone = '67348649'
//   test('otp success email', async () => {
//     let previousOtp = await orm.Otp.count()
//     await Membership.createOtp(testingEmail)
//     expect((await orm.Otp.count()) - previousOtp).toBe(1)
//   })
//   test('otp success phone', async () => {
//     let previousOtp = await orm.Otp.count()
//     await Membership.createOtp(testingPhone)
//     expect((await orm.Otp.count()) - previousOtp).toBe(1)
//   })

//   test('register success using email', async () => {
//     let username = testingEmail
//     let otp = await Membership.createOtp(username)
//     let previousUser = await orm.User.count()
//     await Membership.register(
//       {
//         name: 'jeffchung杰夫',
//         phone: '',
//         email: username,
//         password: '123456'
//       },
//       otp.code
//     )

//     let currentUserNo = await orm.User.count()
//     expect(currentUserNo - previousUser).toBe(1)
//   })
//   test('register success using phone', async () => {
//     let username = testingPhone
//     let otp = await Membership.createOtp(username)
//     let previousUser = await orm.User.count()
//     await Membership.register(
//       {
//         name: 'jeffchung杰夫',
//         phone: username,
//         email: '',
//         password: '123456'
//       },
//       otp.code
//     )
//     let currentUserNo = await orm.User.count()
//     expect(currentUserNo - previousUser).toBe(1)
//   })

//   test('login success', async () => {
//     let email = testingEmail
//     let password = '123456'
//     let user = await pRegister(email, password)
//     let resultUser = await Membership.getUser(email, password)
//     expect(user.email).toBe(resultUser.email)
//   })

//   test('reset password success', async () => {
//     let email = testingEmail
//     let password = '123456'
//     let newPassword = 'abc123456'
//     await pRegister(email, password)
//     let otp = await Membership.createOtp(email)
//     let user = await Membership.resetPassword(otp, newPassword)

//     expect(user.password).toEqual(newPassword)
//   })
// })

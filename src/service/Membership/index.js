const uuid = require('uuid/v1')
const validator = require('validator')
const mail = smartRequire('mail')
const orm = smartRequire('orm')
module.exports = {
  async getUser(username, password) {
    //TODO must check verification
    //password optional
    let user = await orm.User.findOne({
      where: {
        $or: {
          email: {
            $eq: username
          },
          phone: {
            $eq: username
          }
        }
      }
    })
    if (user && user.password == password) {
      return user
    }
  },
  async resetPassword(otp, newPassword) {
    console.log('the otp', otp)
    let user = await orm.User.findOne({
      where: {
        $or: {
          email: {
            $eq: otp.username
          },
          phone: {
            $eq: otp.username
          }
        }
      }
    })
    if (user == null) {
      throw Error('User not found')
    }

    user.password = newPassword
    return await user.save()
  },
  async createOtp(username) {
    var num = Math.floor(Math.random() * 900000) + 100000
    return await orm.Otp.create({
      username: username,
      code: num
    })
  },
  async getOtp(email, phone, code) {
    return await orm.Otp.findOne({
      where: {
        code: code,
        username: { $in: [email, phone] }
      }
    })
  },
  async register({ name, phone, email, password }, code) {
    let otp = await this.getOtp(email, phone, code)
    if (otp == null) {
      throw Error('otp not found')
    }
    let user = await orm.User.create({
      name: name,
      phone: phone,
      email: email,
      password: password,
      token: uuid()
    })
    if (validator.isEmail('' + otp.username)) {
      user.emailVerified = true
      await mail({
        to: email,
        subject: 'Welcome',
        html: `<html><body>Welcome ${user.name}</body></html>`
      })
    } else {
      user.phoneVerified = true
    }
    user.save()
    return user
  }
}

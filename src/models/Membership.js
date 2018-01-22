const uuid = require('uuid/v1');
const validator = require('validator');
module.exports = {
  async getUser(username, password) {
    //TODO must check verification
    //password optional
    let user = await global.orm.models.User.findOne({
      where: {
        $or: {
          email: {
            $eq: username,
          },
          phone: {
            $eq: username,
          },
        },
      },
    });
    if (user && user.password == password) {
      return user;
    }
  },
  async resetPassword(otp, newPassword) {
    console.log('the otp', otp);
    let user = await global.orm.models.User.findOne({
      where: {
        $or: {
          email: {
            $eq: otp.username,
          },
          phone: {
            $eq: otp.username,
          },
        },
      },
    });
    if (user == null) {
      throw Error('User not found');
    }

    user.password = newPassword;
    await user.save();
  },
  async getOtp(email, phone, code) {
    return await global.orm.models.Otp.findOne({
      where: {
        code: code,
        username: { $in: [email, phone] },
      },
    });
  },
  async register({ name, phone, email, password }, code) {
    let otp = await this.getOtp(email, phone, code);
    if (otp == null) {
      throw Error('otp not found');
    }
    let user = await global.orm.models.User.create({
      name: name,
      phone: phone,
      email: email,
      password: password,
      token: uuid(),
    });
    if (validator.isEmail('' + otp.username)) {
      user.emailVerified = true;
      await global.mail({
        to: email,
        subject: 'Welcome',
        html: `<html><body>Welcome ${user.name}</body></html>`,
      });
    } else {
      user.phoneVerified = true;
    }
    user.save();
    return user;
  },
};

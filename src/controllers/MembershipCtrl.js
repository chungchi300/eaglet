const validator = require('validator');
const Membership = require(global.srcRoot + '/models/Membership.js');

module.exports = class MembershipCtrl {
  async login(ctx, next) {
    let { username, password } = ctx.request.body;
    let user = await Membership.getUser(username, password);
    if (user == null) {
      throw Error('User not found');
    }
    ctx.body = user;
  }
  async register(ctx, next) {
    let { name, phone, email, password, code } = ctx.request.body;

    let user = await Membership.register(
      {
        name: name,
        phone: phone,
        email: email,
        password: password,
      },
      code
    );

    ctx.body = user;
  }
  async otp(ctx, next) {
    var num = Math.floor(Math.random() * 900000) + 100000;

    let { username } = ctx.request.body;

    let otp = await global.orm.models.Otp.create({
      username: username,
      code: num,
    });

    if (validator.isEmail('' + username)) {
      await global.mail({
        to: username,
        subject: 'OTP',
        html: `<html><body>Your otp ${otp.code}</body></html>`,
      });
    }
    ctx.body = { result: 'otp send' };
  }

  async resetPassword(ctx, next) {
    let { phone, email, newPassword, code } = ctx.request.body;
    await Membership.resetPassword(
      await Membership.getOtp(email, phone, code),
      newPassword
    );
    ctx.body = { result: 'password reset' };
  }
};

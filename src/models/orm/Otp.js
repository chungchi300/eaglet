const Sequelize = require('sequelize');
const validator = require('validator');

module.exports = (sequelize, Sequelize) => {
  const model = {
    // id: {
    //   type: Sequelize.UUID,
    //
    //   allowNull: false,
    //   primaryKey: true,
    // },
    //phone or email
    username: {
      type: Sequelize.STRING(40),
      //part of the validator
      allowNull: false,
      validate: {
        isEmailOrPhone(value) {
          if (
            validator.isEmail(value) ||
            validator.isMobilePhone(value, 'zh-HK')
          ) {
            // throw new Error('username format error');
          } else {
            throw new Error('username format error');
          }
        },
      },
    },
    //
    // expiredAt: {
    //   type: Sequelize.Date,
    // },
    code: {
      type: Sequelize.STRING(40),
      allowNull: false,
    },
  };
  const sequelizeModel = sequelize.define('otp', model);

  return sequelizeModel;
};

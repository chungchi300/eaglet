const Sequelize = require('sequelize');
const validator = require('validator');
const instanceMethods = require(global.srcRoot +
  '/lib/sequenlizeClassMethod.js');

module.exports = (sequelize, Sequelize) => {
  const model = {
    // id: {
    //   type: Sequelize.UUID,
    //   allowNull: false,
    //   primaryKey: true,
    // },
    token: {
      type: Sequelize.STRING(255),
    },
    phone: {
      type: Sequelize.STRING(40),
      allowNull: true,

      unique: true,
    },
    phoneVerified: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    email: {
      type: Sequelize.STRING(100),
      allowNull: true,

      unique: true,
    },
    emailVerified: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    password: {
      type: Sequelize.STRING(200),
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING(40),
      allowNull: false,
    },
    banned: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  };
  var SequelizeUser = sequelize.define('user', model, {
    validate: {
      phoneOrEmail() {
        if (!this.email && !this.phone) {
          throw new Error('Must have email or phone');
        }
        if (this.email && !validator.isEmail(this.email)) {
          throw new Error('email format error');
        }
        if (this.phone && !validator.isMobilePhone(this.phone, 'zh-HK')) {
          throw new Error('phone format error');
        }
      },
    },
  });
  SequelizeUser.prototype.toJSON = function() {
    var values = Object.assign({}, this.get());

    delete values.password;
    return values;
  };

  return SequelizeUser;
};

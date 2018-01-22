const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const model = {
    name: {
      type: Sequelize.STRING,
    },
  };
  return sequelize.define('Company', model);
};

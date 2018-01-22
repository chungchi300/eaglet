const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const model = {
    name: {
      type: Sequelize.STRING,
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 25,
      validate: { min: -180, max: 180 },
    },
  };
  return sequelize.define('Employee', model);
};

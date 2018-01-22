const Sequelize = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  const model = {
    content: {
      type: Sequelize.STRING(255),
    },
  };
  return sequelize.define('Feedback', model);
};

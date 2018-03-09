const Sequelize = require('sequelize');
const path = require('path');
const fs = require('fs');
const _ = require('lodash');
const instanceMethods = smartRequire('lib/sequenlizeClassMethod.js');

var sequelize = new Sequelize(
  global.config.database.connection.database,
  global.config.database.connection.username,
  global.config.database.connection.password,
  global.config.database.extra
);

let modelsPath = global.srcRoot + '/models/orm';
const child = fs.readdirSync(modelsPath);
for (let model of child) {
  let modelPath = path.resolve(modelsPath, model);
  // console.log('the modal path', modelPath);
  if (fs.statSync(modelPath).isFile()) {
    let importedModel = sequelize.import(modelPath);

    for (let methodName of Object.keys(instanceMethods)) {
      importedModel[methodName] = instanceMethods[methodName];
    }
  }
}
let models = {};
Object.keys(sequelize.models).map(modelName => {
  models[_.upperFirst(modelName)] = sequelize.models[modelName];
});
global.sequelize = sequelize;
global.orm = models;

require('./relation');

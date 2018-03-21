const Sequelize = require('sequelize');
const path = require('path');
const fs = require('fs');
const _ = require('lodash');
const instanceMethods = smartRequire('lib/sequenlizeClassMethod.js');
const config = smartRequire('config');
var sequelize = new Sequelize(
  config.database.connection.database,
  config.database.connection.username,
  config.database.connection.password,
  config.database.extra
);

let modelsPath = smartRequire('ormModelPath');
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
module.exports = {
  orm: models,
  sequelize: sequelize,
};
//
require('./relation');

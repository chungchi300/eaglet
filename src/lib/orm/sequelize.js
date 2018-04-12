const Sequelize = require('sequelize')
const path = require('path')
const fs = require('fs')
const _ = require('lodash')
const instanceMethods = require('./sequenlizeClassMethod.js')
const config = smartRequire('config')
var sequelize = new Sequelize(
  config.database.connection.database,
  config.database.connection.username,
  config.database.connection.password,
  config.database.extra
)
function loadModel (modelsPath) {
  const child = fs.readdirSync(modelsPath)
  for (let model of child) {
    let modelPath = path.resolve(modelsPath, model)
    // console.log('the modal path', modelPath);
    if (fs.statSync(modelPath).isFile()) {
      let importedModel = sequelize.import(modelPath)

      for (let methodName of Object.keys(instanceMethods)) {
        importedModel[methodName] = instanceMethods[methodName]
      }
    }
  }
  let modelsByName = {}
  Object.keys(sequelize.models).map(modelName => {
    modelsByName[_.upperFirst(modelName)] = sequelize.models[modelName]
  })
  return modelsByName
}
let modelsPaths = smartRequire('ormModelPaths')
var modelsByName = {}
modelsPaths.forEach(modelsPath => {
  modelsByName = Object.assign(modelsByName, loadModel(modelsPath))
})

module.exports = {
  orm: modelsByName,
  sequelize: sequelize
}
//

let relationPaths = smartRequire('ormRelationPaths')
relationPaths.forEach(relationPath => {
  require(relationPath)
})

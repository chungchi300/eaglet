/*
  Smart require is basically a root require but you
  can do dependency injection here if u want

*/
global.smartRequire = function(name) {
  if (name == 'mail') {
    if (process.env.NODE_ENV == 'test') {
      return smartRequire('lib/mail/default');
    } else {
      return smartRequire('lib/mail/sparkpost');
    }
  }

  if (name == 'ormModelPath') {
    return __dirname + '/service/orm/models';
  }
  if (name == 'ormRelationModelPath') {
    return __dirname + '/service/orm/relation';
  }
  //find method to avoid orm ,sequelize,config load more then  once
  /*
  Node js already cached and only load once
  http://www.infoq.com/cn/articles/nodejs-module-mechanism
  */

  if (name == 'orm') {
    return smartRequire('lib/orm/sequelize').orm;
  }
  if (name == 'sequelize') {
    return smartRequire('lib/orm/sequelize').sequelize;
  }
  return require(__dirname + '/' + name);
};

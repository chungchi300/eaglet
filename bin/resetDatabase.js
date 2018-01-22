var path = require('path');
async function reloadDatabase() {
  console.log('reloading');
  await global.orm.sync({ force: true });
  // console.log(global.orm.models.Employee);

  process.exit(0);
}
try {
  console.log('dirname', __dirname);
  global.srcRoot = __dirname.replace('bin', 'src');
  // var config = require(path.join(__dirname, '../src/config/default.js'));

  //
  global.config = require(global.srcRoot + '/config');

  //
  require(path.join(__dirname, '../src/init/sequelize.js'));
  reloadDatabase().then(res => console.log('reload done'));
} catch (err) {
  throw new Error(err.message);
  process.exit(1);
}

global.smartRequire = function(name) {
  //do dependency injection here if u want
  return require(__dirname + '/' + name);
};

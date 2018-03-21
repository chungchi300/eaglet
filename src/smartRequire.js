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
  if (name == 'auth') {
    return smartRequire('services/auth');
  }
  return require(__dirname + '/' + name);
};

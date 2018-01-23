const passport = require('koa-passport');

const BearerStrategy = require('passport-http-bearer').Strategy;
//get the user from token
passport.use(
  new BearerStrategy(async function(token, done) {
    let user = await global.orm.User.findOne({
      where: {
        token: token,
      },
    });

    if (user) {
      return done(null, user, { scope: 'all' });
    } else {
      return done(new Error('token invalid'));
    }
  })
);
// const LocalStrategy = require('passport-local').Strategy;
// passport.use(
//   //the username
//   new LocalStrategy(function(username, password, done) {
//     return fetchUser()
//       .then(user => {
//         console.log('executing local');
//         if (username === user.username && password === user.password) {
//           done(null, user);
//         } else {
//           done(null, false);
//         }
//       })
//       .catch(err => done(err));
//   })
// );
//
// const FacebookStrategy = require('passport-facebook').Strategy;
// passport.use(
//   new FacebookStrategy(
//     {
//       clientID: 'your-client-id',
//       clientSecret: 'your-secret',
//       callbackURL:
//         'http://localhost:' +
//         (process.env.PORT || 3000) +
//         '/auth/facebook/callback',
//     },
//     function(token, tokenSecret, profile, done) {
//       // retrieve user ...
//       fetchUser().then(user => done(null, user));
//     }
//   )
// );
//
// const TwitterStrategy = require('passport-twitter').Strategy;
// passport.use(
//   new TwitterStrategy(
//     {
//       consumerKey: 'your-consumer-key',
//       consumerSecret: 'your-secret',
//       callbackURL:
//         'http://localhost:' +
//         (process.env.PORT || 3000) +
//         '/auth/twitter/callback',
//     },
//     function(token, tokenSecret, profile, done) {
//       // retrieve user ...
//       fetchUser().then(user => done(null, user));
//     }
//   )
// );
//
// const GoogleStrategy = require('passport-google-auth').Strategy;
// passport.use(
//   new GoogleStrategy(
//     {
//       clientId: 'your-client-id',
//       clientSecret: 'your-secret',
//       callbackURL:
//         'http://localhost:' +
//         (process.env.PORT || 3000) +
//         '/auth/google/callback',
//     },
//     function(token, tokenSecret, profile, done) {
//       // retrieve user ...
//       fetchUser().then(user => done(null, user));
//     }
//   )
// );

const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

// Load User model
const User = require('../models/User');

module.exports = function (passport) {

  passport.use(
    new localStrategy({ usernameField: 'email' }, (email, password, done) => {
      console.log(email, password)
      User.findOne({ email: email }, (err, user) => {
        console.log(user)
        if (err) throw err;
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err, result) => {
          
          if (err) throw err;
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => {
      console.log(user)
      const userInformation = {
        email: user.email,
      };
      cb(err, user);
    });
  });
};
// module.exports = function(passport) {
//   passport.use(
//     new LocalStrategy( (email, password, done) => {
//       console.log(email)
//       User.findOne({
//         email: email
//       }).then(user => {
//         if (!user) {
//           return done(null, false, { message: 'That email is not registered' });
//         }

//         // Match password
//         bcrypt.compare(password, user.password, (err, isMatch) => {
//           if (err) throw err;
//           if (isMatch) {
//             return done(null, user);
//           } else {
//             return done(null, false, { message: 'Password incorrect' });
//           }
//         });
//       });
//     }
//     )
//   );

//   passport.serializeUser(function(user, done) {
//     done(null, user.id);
//   });

//   passport.deserializeUser(function(id, done) {
//     User.findById(id, function(err, user) {
//       done(err, user);
//     });
//   });
// };
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

app.use(passport.initialize());
app.use(passport.session());

passport.use(new GoogleStrategy({
    clientID: 'My-google-client-ID',
    clientSecret: 'my-google-clinet-secret',
    callbackURL: "http://localhost:3000/auth/google/callback" // 해당 URL은 Google Developer Console에서 설정한 리디렉션 URL과 일치해야 한다.
  },
  function(accessToken, refreshToken, profile, cb) {
    // TODO: accessToken, profile 정보를 사용하여 필요한 처리를 수행합니다. 예를 들어, 사용자 정보를 데이터베이스에 저장하는 등의 작업을 수행할 수 있습니다.
    return cb(null, profile);
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = passport;
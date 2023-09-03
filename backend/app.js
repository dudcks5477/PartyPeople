const express = require('express');
const session = require('express-session');
const app = express();
const passport = require('./middlewares/passport');
const authRouter = require('./routes/auth');
const initializeDB = require('./config/db');

initializeDB();

app.use(session({
  secret: 'secret', // 실제 사용시에는 복잡한 문자열을 사용
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', authRouter);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

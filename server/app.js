require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const auth = require('./auth');

const app = express();
const port = process.env.PORT || 5002;

const allowedOrigins = [process.env.CLIENT_URL, 'http://all.rit.edu:5002/page/complete', 'http://localhost:5002', 'http://all.rit.edu','http://all.rit.edu:5002/user','http://localhost:3000','http://all.rit.edu:5002/logout','http://all.rit.edu:5002/'];

app.use(passport.initialize());
app.use(passport.session());
auth(passport);

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  name: 'session',  secret: process.env.KEY,
  resave: false,
  saveUninitialized: true
}));
app.use(cors({
  origin: function (origin, callback) {
    console.log('CORS origin is:' + origin);
    if (allowedOrigins.indexOf(origin) !== -1) {
      return callback(null, true);
    }

    return callback(null, false);
  },
  credentials: true
}));

app.use(require('./routes'));
app.listen(port, () => console.log(`Listening on port ${port}!`));
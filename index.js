// Express app requirements
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// JSON web token dependencies
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');
var secret = process.env.JWT_SECRET;

// instantiate app
var app = express();

// mongoose models and connection
var mongoose = require('mongoose');
var User = require('./models/user');
mongoose.connect('mongodb://localhost/sails');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('morgan')('dev'));


app.use('/api/users', expressJWT({secret: secret}).unless({method: 'POST'}), require('./controllers/users'));

// middleware: JWT user authorization check
app.use(function(err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send({message: 'You need authorization token to view this information.'});

  }
});

// if authenticated, return a JWT token

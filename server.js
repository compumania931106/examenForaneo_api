const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const wagner = require('wagner-core');
const path = require('path');

const URL = `/prueba`;

// MODELS
require('./models/models')(wagner);

const user = require('./router/user.router.js')(wagner);
const purchase = require('./router/purchase.router.js')(wagner);

let app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});


// ROUTERS

const v = 'v1';
const uri = `${URL}/${v}/`;

app.use(uri+'user', user);
app.use(uri+'purchase', purchase);

module.exports = app;
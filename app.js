var createError=require('http-errors');
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var atletasRouter = require('./routes/atletas');
var clubsRouter = require('./routes/clubs');
var aclubsRouter = require('./routes/aclubs');

var app = express();
var app = express();
var MongoServer = require("./config/db");
MongoServer();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/atletas', atletasRouter);
app.use('/clubs', clubsRouter);
app.use('/aclubs', aclubsRouter);

module.exports = app;

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('./config')
var cors = require('cors')

var passport =require('passport')
var LocalStrategy= require('passport-local').Strategy


var mongoose = require('mongoose');


var index = require('./routes/index');
var users = require('./routes/users');
var movies = require('./routes/movies');
var fav = require('./routes/favourite');


var app = express();
app.use(cors())



mongoose.connect(config.mongoDbUrl, function(err, db){
	if(!err){
		console.log('connected to mongo')
		database= db;
	}
	else{
		console.log('failed to connect to mongo')
		throw err
	}
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// config passport
var User= require('./models/user')
app.use(passport.initialize())
passport.use(new LocalStrategy(User.authenticate()))

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/movies', movies);
app.use('/favourites', fav);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  })
});

module.exports = app;

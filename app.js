var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session=require('express-session');
let cors = require("cors");



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var songsRouter = require('./routes/songsRouter');
var albumsRouter = require('./routes/albumsRouter');
var artistsRouter = require('./routes/artistsRouter');
var apiRouter = require('./routes/apiRouter');



var app = express();

app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({  //la sesion se debe inicializar antes de usar el middleware de userLogged.
  secret: "clave secreta 78-86-22", 
  resave: false, 
  saveUninitialized: false 
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/songs', songsRouter);
app.use('/albums', albumsRouter);
app.use('/artists', artistsRouter);
app.use('/api', apiRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

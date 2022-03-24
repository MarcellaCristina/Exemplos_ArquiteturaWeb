var createError = require('http-errors');// usado para pegar os erros http das aplicaççoes node
var express = require('express');
var path = require('path');//o módulo fornece utilitários para trabalhar com caminhos de aquivos e diretórios.
var cookieParser = require('cookie-parser');// criar um objeto para codificação de nomes de cokie para ser usado por outro middleware
var logger = require('morgan');// o Morgan é uma biblioteca que pode ser utilizada no NodeJs para salvar as logs das requisições feitas pela API.

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

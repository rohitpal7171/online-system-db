var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/admin');
var studentRouter = require('./routes/student/student');
var mainCategoryRouter = require('./routes/student/mainCategory');
var cllgCategoryRouter = require('./routes/student/cllgCategory');
var courseRouter = require('./routes/student/course');
var courseDescribeRouter = require('./routes/student/courseDescribe');
var schoolCategoryRouter = require('./routes/student/schoolCategory');
var razorpayRouter = require('./routes/student/razorpay')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin',adminRouter);
app.use('/student',studentRouter);
app.use('/mainCategory',mainCategoryRouter);
app.use('/cllgCategory',cllgCategoryRouter);
app.use('/course',courseRouter);
app.use('/courseDescribe',courseDescribeRouter);
app.use('/schoolCategory',schoolCategoryRouter);
app.use('/razorpay',razorpayRouter);


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

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// localhost:3000/ 요청이 오면
// ./routes 폴더에 있는 index.js 파일을 실행하여
// 요청을 처리하라

// Spring에서
// 클래스에 설정된 @RequestMapping 에 해당하는 부분
var indexRouter = require("./routes/index");

// localhost:3000/ 요청이 오면
// ./routes 폴더에 있는 users.js 파일을 실행하여
// 요청을 처리하라
var usersRouter = require("./routes/users");

// routes/home.js 모듈을 사용하기 위하여 import
const homeRouter = require("./routes/home");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
// /homes 라고 요청을 하면 homeRouter로 라우팅(연결) 하는 부분
app.use("/homes", homeRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

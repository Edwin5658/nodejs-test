const createError = require("http-errors"); 
const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const router = require('./routes/routes');

app.use('/', router);

app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3000;

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
})

app.listen(PORT, () => {
  console.log('Server running on port 3000');
});

module.exports = app;     
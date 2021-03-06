var express = require('express');
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
var sassMiddleware = require('node-sass-middleware');
require("dotenv").config();

//const cors = require('cors');

// importing files
const indexRouter = require('./routes/index');
const bookmarkRouter = require('./routes/bookmarks');

// Define Global Variables
const app = express();
const log = console.log;
//const PORT = process.env.PORT || process.env.LOCAL_PORT; // Step 1
const PORT = process.env.PORT || 8000; // Step 1

// Step 2 
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bookmark', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(() => { console.log("MongoDb Successfully Connected ") }).catch(() => { console.log("MongoDb Connection Failed ") });;

app.use('/', express.static(path.join(__dirname, '/client/build')));


//app.use(cors);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false, // true = . Sass and false = . scss
  sourceMap: true
}));

// Configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//app.use('/api', indexRouter);
app.use('/api/bookmarks', bookmarkRouter);

// if(process.env.NODE_ENV === 'production'){
//   app.use(express.static('client/build'));
//   console.log('Static : ', path.join(__dirname, 'client/build'))
//   //app.use(express.static(path.join(__dirname, 'client/build')));
// }

// if(process.env.NODE_ENV === 'production'){
// app.use(require('express').static('client/build'));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });
// }



app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}.`);
});

//module.exports = app;
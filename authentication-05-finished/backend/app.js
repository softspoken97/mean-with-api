const path = require("path");
const express = require("express");

const mongoose = require("mongoose");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const postsRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");
const algorithms = require('./routes/algorithms.route');
var occurrences = require('./routes/occurrences.route');
var species = require('./routes/species.route');
var scenarios = require('./routes/scenarios.route');
var experiments = require('./routes/experiments.route');
var search = require('./routes/search.route');


const app = express();

mongoose
  .connect(
    "mongodb+srv://johnboy:afc8w8DRasUcZpBR@cluster0-mdduj.mongodb.net/node-angular?retryWrites=true&w=majority", {
      useNewUrlParser: true
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch(() => {
      console.log("Connection failed!");
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/images", express.static(path.join("backend/images")));
app.use(cookieParser())

let reporter = function (type, ...rest)
{
	// remote reporter logic goes here
};

/* handle an uncaught exception & exit the process */
process.on('uncaughtException', function (err)
{
	console.error((new Date).toUTCString() + ' uncaughtException:', err.message);
	console.error(err.stack);

	reporter("uncaughtException", (new Date).toUTCString(), err.message, err.stack);

	process.exit(1);
});

/* handle an unhandled promise rejection */
process.on('unhandledRejection', function (reason, promise)
{
	console.error('unhandled rejection:', reason.message || reason);

	reporter("uncaughtException", (new Date).toUTCString(), reason.message || reason);
})

app.use(function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);

//Elseweb
app.use('/api/v1/algorithms', algorithms);
app.use('/api/v1/occurrences', occurrences);
app.use('/api/v1/species', species);
app.use('/api/v1/scenarios', scenarios);
app.use('/api/v1/experiments', experiments);
app.use('/api/v1/search', search);


module.exports = app;

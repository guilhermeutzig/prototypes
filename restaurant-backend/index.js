let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let app = express();

let router = require("./router");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Accept,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

mongoose.connect('mongodb://localhost/restaurant', { useNewUrlParser: true});
var db = mongoose.connection;

if (!db) {
  console.log("Error connecting db")
} else {
  console.log("Db connected successfully")
}

var port = process.env.PORT || 3000;

app.use('/api', router);

app.listen(port, () => {
  console.log(`Running Restaurant on port ${port}`);
});

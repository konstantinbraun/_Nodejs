//description ++//
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer'); 
var http = require("http");
var path = require("path");

var app = express();

// config app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// app middleware
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data
//app.use(express.static(path.join(__dirname, 'bower_components/bootstrap/dist')));

app.use(require('./todo'));

// respond with "hello world" when a GET request is made to the homepage

var port  = process.env.PORT || 1337;

http.createServer(app).listen(port, function() {
	console.log('Server running on port ' + port);
});

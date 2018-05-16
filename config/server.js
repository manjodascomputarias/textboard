var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

consign()
	.include('routes')
	.then('models')
	.then('controllers')
	.then('./config/dbConnection.js')
	.into(app);

module.exports = app;
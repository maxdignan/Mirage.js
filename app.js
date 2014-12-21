var express = require('express');
var app = express();
var mongoose = require('mongoose');
var mirage = require('./mirage.js');

console.log(mirage);

mongoose.connect('mongodb://localhost/db');
var Schema = mongoose.Schema;
var todoSchema = new Schema({text: String, done: false});
var todoModel = mongoose.model('todo', todoSchema);

mirage.setup(app, todoModel, '');

console.log(mirage.query);

app.use('/api_route', mirage.run);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
})

app.listen(8000, function(){
	console.log('Server Running...');
})
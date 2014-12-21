var express = require('express');
var app = express();
var mongoose = require('mongoose');
var mirage = require('./mirage.js');

console.log(mirage);

app.use(express.static('./'));

mongoose.connect('mongodb://localhost/db');
var Schema = mongoose.Schema;
var todoSchema = new Schema({text: String});
var todoModel = mongoose.model('testing', todoSchema);

mirage.setup(app, todoModel, 'testing');

console.log(todoModel.modelName == mirage.query);

app.use('/api_route', mirage.run);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
})

app.listen(8000, function(){
	console.log('Server Running...');
})
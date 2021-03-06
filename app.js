var express = require('express');
var app = express();
var mongoose = require('mongoose');


app.use(express.static('./'));

mongoose.connect('mongodb://localhost:27017/db');
var Schema = mongoose.Schema;
var todoSchema = new Schema({text: String, random: Number});
var todoModel = mongoose.model('testing', todoSchema);


//console.log(todoModel);
console.log(app);
//Here's all you need to do to have a REST api with mongo
var mirage = require('./mirage');

function reqAcc(request){
	return {
		text: request.headers.text,
		random: request.headers.random
	};
}

mirage(app, todoModel, '/api', reqAcc, [function(req, res, next){
		//console.log(req);
		next();
}]);

console.log(app);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});


app.listen(8000, function(){
	console.log('Server Running...');
});

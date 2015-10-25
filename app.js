var express = require('express');
var app = express();
var mongoose = require('mongoose');


app.use(express.static('./'));

mongoose.connect('mongodb://localhost/db');
var Schema = mongoose.Schema;
var todoSchema = new Schema({text: String});
var todoModel = mongoose.model('testing', todoSchema);


//console.log(todoModel);

//Here's all you need to do to have a REST api with mongo
var mirage = require('./mirage.js');
console.log(mirage); //UNECESSARY LINE
mirage.setup(app, todoModel, todoModel.modelName);
app.use('/api_route', mirage.run);



app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});


app.listen(8000, function(){
	console.log('Server Running...');
})
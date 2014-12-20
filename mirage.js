var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

var express = require('express');



var mirage = {};

module.exports = mirage;

mirage.run = function(req, res, next){
	mirage.exp_app.get('*', function(req, res){
		mirage.mongo_model.find(mirage.query, function(err, data){
			if (err){
				next(err);
			} else{
				res.json(data);
			}
		})
	});

	mirage.exp_app.post('*', function(req, res){

	})


	next();
	
}

mirage.setup = function(exp_app, mongo_model, query){
	mirage.exp_app = exp_app;
	mirage.mongo_model = mongo_model;
	mirage.query = query;

	mirage.exp_app.use(express.json());       // to support JSON-encoded bodies
	mirage.exp_app.use(express.urlencoded()); // to support URL-encoded bodies
}
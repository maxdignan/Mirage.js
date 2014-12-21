var bodyParser = require('body-parser')
 

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
		});
	});

	mirage.exp_app.post('*', function(req, res){
		mirage.mongo_model.find(mirage.query, function(err, data){
			if (err) {
				next(err);
			} else {
				mirage.mongo_model.find(mirage.query).insert(req.body);
				res.end();
			}
		});
	})


	next();
}

mirage.setup = function(exp_app, mongo_model, query){
	mirage.exp_app = exp_app;
	mirage.mongo_model = mongo_model;
	mirage.query = query;

	var express = require('express');

	exp_app.use( bodyParser.json() );       // to support JSON-encoded bodies
	exp_app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  		extended: true
	}));
}
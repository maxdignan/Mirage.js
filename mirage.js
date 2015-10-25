var bodyParser = require('body-parser')
 

var mirage = {};

module.exports = mirage;

mirage.run = function(req, res, next){
	mirage.exp_app.get('*', function(req, res){
		mirage.mongo_model.find(mirage.query, function(err, data){
			console.log(data + 'mirage');
			if (err){
				next(err);
			} else{
				res.send(data);
			}
		});
	});

	mirage.exp_app.post('*', function(req, res){
		//console.log(req.body);
		var temp = new mirage.mongo_model(req.body);
		temp.save(function(err){
			if (err){
				next(err);
			}
		});
		//mirage.mongo_model.find(mirage.query).insert(req.body);
	});


	//still have not gotten it able to replace same number of items as deleted
	mirage.exp_app.put('*', function(req, res){
		console.log(req.body.one);

		console.log(mirage.mongo_model.find(req.body.one));

		mirage.mongo_model.find(req.body.one).remove().exec();

		var temp = new mirage.mongo_model(req.body.two);
		temp.save(function(err){
			if (err){
				next(err);
			}
		});
	});

	mirage.exp_app.delete('*', function(req, res){
		mirage.mongo_model.find(req.body).remove().exec();
	});

	next();

}

mirage.setup = function(exp_app, mongo_model, query){
	mirage.exp_app = exp_app;
	mirage.mongo_model = mongo_model;
	mirage.query = query;

	var bodyParser = require('body-parser')
	mirage.exp_app.use( bodyParser.json() );       // to support JSON-encoded bodies
	mirage.exp_app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  		extended: true
	})); 	

}
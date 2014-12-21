var bodyParser = require('body-parser')
 

var mirage = {};

module.exports = mirage;

mirage.run = function(req, res, next){
	mirage.exp_app.get('*', function(req, res){
		mirage.mongo_model.find(mirage.query, function(err, data){
			//console.log(data + 'mirage');
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
	})
	next();

	mirage.exp_app.all('*', function(req, res){
		res.end();
	})
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
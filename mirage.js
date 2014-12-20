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


	next();
	
}

mirage.setup = function(exp_app, mongo_model, query){
	mirage.exp_app = exp_app;
	mirage.mongo_model = mongo_model;
	mirage.query = query;
}
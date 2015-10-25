var express = require('express');
var mirage = {};

function run(){
    var router = express.Router();

    //add middleware
    for (var i = 0; i < mirage.middleware.length; i++) {
        router.use(mirage.middleware[i]);
    }

    //get all
    router.get('/', function (req, res) {
        mirage.mongo_model.find({}, function(err, docs){
            if (err){
                res.send('an error occured');
            }
            res.send(docs);
        });
    });

    router.get('/:id', function (req, res) {
        var id = req.params.id;
        mirage.mongo_model.findById(id, function(err, doc){
            if (err){
                res.send('an error occured');
            }
            res.send(doc);
        });
    });

    router.post('/', function (req, res) {

    });

    router.delete('/:id', function(req, res){
        var id = req.params.id;

    });

    router.put('/:id', function(req, res){
        var id = req.params.id;

    });

    mirage.app.use(mirage.query, router);
}


module.exports = function(app, mongo_model, query, middleware){
	mirage.app = exp_app;
	mirage.mongo_model = mongo_model;
	mirage.query = query;
    mirage.middleware = middleware;


    run();
};

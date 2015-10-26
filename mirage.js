var express = require('express');

module.exports = function(app, mongo_model, query, middleware){
    var router = express.Router();

    //add middleware
    for (var i = 0; i < middleware.length; i++) {
        router.use(middleware[i]);
    }

    //get all
    router.get('/', function (req, res) {
        mongo_model.find({}, function(err, docs){
            if (err){
                res.send('an error occured');
            }
            res.send(docs);
        });
    });

    router.get('/:id', function (req, res) {
        var id = req.params.id;
        mongo_model.findById(id, function(err, doc){
            if (err){
                res.send('an error occured');
            }
            res.send(doc);
        });
    });

    router.post('/', function (req, res) {
        mongo_model.create(req.body, function(err, doc){
            if (err){
                res.send('an error occured');
            }
            res.send(doc);
        });
    });

    router.delete('/:id', function(req, res){
        var id = req.params.id;

    });

    router.put('/:id', function(req, res){
        var id = req.params.id;

    });

    app.use(query, router);
};

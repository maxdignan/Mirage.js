Mirage.js is a node.js based, Express.js middleware application that allows developers to make RESTful API with only a few lines of code! It's dependent on Node, Express, and MongoDB as Mongoose.js(as it's perfect for web-based apps in need of a database).

When setting up Mirage.js you only need to do the following

var mirage = require('mirage');

//do your express and mongodb/mongoose setup to get app and mongo model variables

mirage.setup(app, mongo_Model, 'query');
              ^        ^          ^
              |        |          |
          This is    This is      This is
        the express  your Mongo    the db query
          app var     model var


then,

app.use('/api_route', mirage.run);

That's it! You now have a RESTful API with GET(retrieve), POST(add new), PUT(adjust), and DELETE(remove). Now you only have to worry about the front end!
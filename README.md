Mirage.js is a node.js based, Express.js middleware application that allows developers to make RESTful API with only a few lines of code! It's dependent on Node, Express, and MongoDB as Mongoose.js(as it's perfect for web-based apps in need of a database).

When setting up Mirage.js you only need to do the following...

var mirage = require('./mirage');  
(include mirage.js into your file structure).

do your express and mongodb/mongoose setup to get app and mongo model variables

mirage(app, mongo_Model, '/api_route', reqAccessor, [middleware]); Respectively these are (the express app variable, your mongo model variable, and your api route you wish to perform, then the accessor function (will explain), and an array of middleware).

The accessor function is a function that when provided the express request object, will return an object that matches the schema of the mongo model. The values of the properties of this object can be determined from the request object.


function reqAccessor(expressRequest) {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text: expressRequest.headers.text,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;otherProperty: expressRequest.headers.otherProperty,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;updatedAt: new Date()  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}  
}  

That's it! You now have a RESTful API with GET(retrieve), POST(add new), PUT(adjust), and DELETE(remove). Now you only have to worry about the front end, lol =D !

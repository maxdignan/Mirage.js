

console.log('im here1');

var getEvent = function(){
	console.log('im here2');
	$.get('/api_route', function(data) {
		$("#get").html(data);
		console.log(data);
	});
}

var postEvent = function(){
	var box = {"text": $("#todoitem").val()};
	console.log(box);
	$.post('/api_route', box);
}

var updateEvent = function(){
	
}

var deleteEvent = function(){
	
}
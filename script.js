

console.log('im here1');

var getEvent = function(){
	console.log('im here2');
	$.get('/api_route', function(data) {
		var out = [];
		_.each(data, function(obj){
			out.push(' ' + obj.text)
		})
		$("#get").text(out);
		console.log(data);
	});
}

var postEvent = function(){
	var box = {"text": $("#todoitem").val()};
	$("#todoitem").val('');
	console.log(box);
	$.post('/api_route', box);
}

var updateEvent = function(){
	var prev = $("#previtem").val();
	var post = $("#newitem").val();

	prev = {"text": prev};
	post = {"text": post};

	var arr = [prev, post];
	$.ajax({
  		url: '/api_route',
  		type: 'PUT',
  		data: {"one": arr[0], "two": arr[1]},
  		success: function(data) {
    		alert('Load was performed.');
  		}
	});
}

var deleteEvent = function(){
	var tobedel = $('#delitem').val();

	$.ajax({
  		url: '/api_route',
  		type: 'DELETE',
  		data: {"text": tobedel},
  		success: function(data) {
    		alert('Load was performed.');
  		}
	});
}
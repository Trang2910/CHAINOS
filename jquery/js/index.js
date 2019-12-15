$(document).ready(function(){
	$('#btn').click(function(){
		$('#add').append("<div class='parent'><input type='text' class='text'><button class='show'>SHOW</button><span class='result'></span></div><br><br>");
		$('.show').click(function(){
			var parent = $(this).parent();
			var text = parent.find('.text').val();
			var result = parent.find('.result');
			result.html(text);
		});

	})
})
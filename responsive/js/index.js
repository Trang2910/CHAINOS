$(document).ready(function(){

	$(window).resize(function(){
	    var w = $(window).width();
	    if(w >= 990) {
	        $('#nav').removeClass('mobile');
	        $('#nav').show();
	    }
	});

	$('#i-menu').click(function(){
		$('#nav').toggle();
		$('#nav').addClass('mobile');
	});

	$(window).resize(function(){
	    var w = $(window).width();
	    if(w < 990) {
	        $('#nav').hide();

	    }
	});
});
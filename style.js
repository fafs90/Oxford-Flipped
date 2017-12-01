$(function(){
	blink.events.on('style:loaded', function(){
    	blink.getCourse(idcurso).done(function(data){console.log(data)})
	});
});


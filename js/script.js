var scroll = function(section) {
	$('#' + section).click(function() {
		$('html, body').animate({
			scrollTop: $('.' + section).offset().top - 30
		});
	});
}

$(document).ready(function(){
	$('.biografias').slick();
	['sobre', 'palestrantes', 'programacao', 'localizacao'].forEach(scroll);
});
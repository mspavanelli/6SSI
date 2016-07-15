var scroll = function(section) {
	$('#' + section).click(function() {
		$('html, body').animate({
			scrollTop: $('.' + section).offset().top - 30
		});
	});
}

$(document).ready(function(){
	$('.biografias').slick();

	// rolagem
	['sobre', 'palestrantes', 'programacao', 'localizacao'].forEach(scroll);
	// $('.navbar-brand').click(function() {$('html, body').animate({scrollTop: 0 }); });
});
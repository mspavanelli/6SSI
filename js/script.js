var scroll = function(section) {
	$('#' + section).click(function() {
		$('html, body').animate({
			scrollTop: $('.' + section).offset().top - 30
		});
	});
}

$(document).ready(function(){
	$('.biografias').slick({
		dots: true,
		infinite: true,
		speed: 600,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 4000,
	});
	
	['sobre', 'palestrantes', 'programacao', 'localizacao'].forEach(scroll);
});
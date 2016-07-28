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
		autoplaySpeed: 10000,
	});
	
	['sobre', 'palestrantes', 'programacao', 'inscricao', 'hackathon', 'localizacao'].forEach(scroll);
});
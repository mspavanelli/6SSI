angular.module('ssi')
.directive('sobre', function() {
	return {
		restrict: 'AE', 
		templateUrl: 'partials/sobre.html'
	}
})
.directive('palestrante', function() {
	return {
		restrict: 'AE', 
		scope: {
			nome: '@',
			foto: '@',
			descricao: '@'
		},
		templateUrl: 'partials/palestrante.html'
	}
})
.directive('programacao', function() {
	return {
		restrict: 'AE', 
		templateUrl: 'partials/programacao.html'
	}
})
.directive('info', function() {
	return {
		restrict: 'AE', 
		templateUrl: 'partials/info.html'
	}
})
.directive('parcerias', function() {
	return {
		restrict: 'AE', 
		templateUrl: 'partials/parceria.html'
	}
})
.directive('marca', function() {
	return {
		restrict: 'AE',
		scope: {
			logo: '@imagem',
			url: '@',
			nome: '@'
		},
		templateUrl: 'partials/marca.html'
	}
});
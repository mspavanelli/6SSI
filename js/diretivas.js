angular.module('ssi')
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

.directive('inscricao', function() {
	return {
		restrict: 'AE', 
		templateUrl: 'partials/inscricao.html'
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
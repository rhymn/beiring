var beiring = angular.module('beiring', [
	'bControllers',
	'bDirectives',
	'bRouter'
])



.run(['$rootScope', '$location', '$window', function($rootScope, $location, $window){
	$rootScope.$on('$routeChangeStart', function(event, next, current){
		if(false){
		}
	});

	$rootScope.$on('$routeChangeSuccess', function () {
		$window.scrollTo(0,0);
	});
}]);


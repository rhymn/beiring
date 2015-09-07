var beiring = angular.module('beiring', [
	'bControllers',
	'bDirectives',
	'bRouter'
])


.run(['$rootScope', '$location', function($rootScope, $location){
	$rootScope.$on('$routeChangeStart', function(event, next, current){
		if(false){
		}
	});
}]);


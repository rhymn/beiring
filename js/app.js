var beiring = angular.module('beiring', [
	'bDirectives',
	'bRouter'
])

.config(['$locationProvider', function ($locationProvider) {
    $locationProvider
    	.html5Mode(true)
    	.hashPrefix('!');
}])

.run(['$rootScope', '$location', '$window', function($rootScope, $location, $window){
	$rootScope.$on('$routeChangeStart', function(event, next, current){
		if(false){
		}
	});

	$rootScope.$on('$routeChangeSuccess', function(event, currentRoute, previousRoute){
		// Set Title
		$rootScope.title = currentRoute.title;

		// Scroll to top
		$window.scrollTo(0,0);

		// Track to GA
		ga('send', 'pageview', $location.path());
	});
}]);


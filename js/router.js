angular.module('bRouter', [
	'ngRoute'
])

.config(['$routeProvider', function($routeProvider){
		$routeProvider.
			when('/', {
				templateUrl: 'partials/start.html',
				controller: 'StartCtrl'
			}).
			when('/om', {
				templateUrl: 'partials/about.html'
			}).
			otherwise({
				redirectTo: '/'
			});
}]);
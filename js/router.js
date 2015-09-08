angular.module('bRouter', [
	'ngRoute'
])

.config(['$routeProvider', function($routeProvider){
		$routeProvider.
			when('/', {
				templateUrl: 'partials/start.html',
				controller: 'StartCtrl'
			}).
			when('/akut', {
				templateUrl: 'partials/akut.html'
			}).
			when('/behandlingar', {
				templateUrl: 'partials/behandlingar.html'
			}).
			when('/tandreglering', {
				templateUrl: 'partials/tandreglering.html'
			}).
			when('/vardgivare', {
				templateUrl: 'partials/vardgivare.html'
			}).
			when('/priser', {
				templateUrl: 'partials/priser.html'
			}).
			when('/om', {
				templateUrl: 'partials/about.html'
			}).
			otherwise({
				redirectTo: '/'
			});
}]);

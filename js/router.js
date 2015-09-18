angular.module('bRouter', [
	'ngRoute'
])

.config(['$routeProvider', function($routeProvider){
		$routeProvider.
			when('/', {
				templateUrl: 'partials/start.html',
				controller: 'StartCtrl',
				title: 'Start'
			}).
			when('/akut', {
				templateUrl: 'partials/akut.html',
				title: 'Akut'
			}).
			when('/behandlingar', {
				templateUrl: 'partials/behandlingar.html',
				title: 'Behandlingar'
			}).
			when('/behandlingar/bettskena', {
				templateUrl: 'partials/bettskena.html'
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

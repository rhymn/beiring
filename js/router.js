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
			when('/behandlingar/forebyggande-tandvard-och-tandhygienist', {
				templateUrl: 'partials/forebyggande-tandvard-och-tandhygienist.html'
			}).
			when('/behandlingar/allman-tandvard', {
				templateUrl: 'partials/allman-tandvard.html'
			}).
			when('/behandlingar/tandblekning', {
				templateUrl: 'partials/tandblekning.html'
			}).
			when('/behandlingar/visdomtandskirurgi', {
				templateUrl: 'partials/visdomtandskirurgi.html'
			}).
			when('/behandlingar/tandimplantat', {
				templateUrl: 'partials/tandimplantat.html'
			}).
			when('/behandlingar/tandreglering', {
				templateUrl: 'partials/tandreglering.html'
			}).
			when('/behandlingar/estetisk-tandvard', {
				templateUrl: 'partials/estetisk-tandvard.html'
			}).
			when('/behandlingar/tandvardsradsla', {
				templateUrl: 'partials/tandvardsradsla.html'
			}).
			when('/behandlingar/incognito', {
				templateUrl: 'partials/incognito.html'
			}).
			when('/behandlingar/inman', {
				templateUrl: 'partials/inman.html'
			}).
			when('/behandlingar/invisalign', {
				templateUrl: 'partials/invisalign.html'
			}).



			otherwise({
				redirectTo: '/'
			});
}]);

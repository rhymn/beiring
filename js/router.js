angular.module('bRouter', [
	'ngRoute'
])

.config(['$routeProvider', function($routeProvider){
		$routeProvider.
			when('/', {
				templateUrl: 'partials/start.html',
				controller: 'StartCtrl',
				title: 'Tandläkare Göteborg - Beiring Tandklinik'
			}).
			when('/akut', {
				templateUrl: 'partials/akut.html',
				title: 'Akut tandvård i Göteborg - Beiring Tandklinik'
			}).
			when('/behandlingar', {
				templateUrl: 'partials/behandlingar.html',
				title: 'Behandlingar tandvård Göteborg - Beiring Tandklinik'
			}).
			when('/behandlingar/bettskena', {
				templateUrl: 'partials/bettskena.html',
				title: ''
			}).
			when('/tandreglering', {
				templateUrl: 'partials/tandreglering.html',
				title: ''
			}).
			when('/vardgivare', {
				templateUrl: 'partials/vardgivare.html',
				title: ''
			}).
			when('/priser', {
				templateUrl: 'partials/priser.html',
				title: ''
			}).
			when('/om', {
				templateUrl: 'partials/about.html',
				title: ''
			}).
			when('/behandlingar/forebyggande-tandvard-och-tandhygienist', {
				templateUrl: 'partials/forebyggande-tandvard-och-tandhygienist.html',
				title: ''
			}).
			when('/behandlingar/allman-tandvard', {
				templateUrl: 'partials/allman-tandvard.html',
				title: ''
			}).
			when('/behandlingar/tandblekning', {
				templateUrl: 'partials/tandblekning.html',
				title: ''
			}).
			when('/behandlingar/visdomtandskirurgi', {
				templateUrl: 'partials/visdomtandskirurgi.html',
				title: ''
			}).
			when('/behandlingar/tandimplantat', {
				templateUrl: 'partials/tandimplantat.html',
				title: ''
			}).
			when('/behandlingar/tandreglering', {
				templateUrl: 'partials/tandreglering.html',
				title: ''
			}).
			when('/behandlingar/estetisk-tandvard', {
				templateUrl: 'partials/estetisk-tandvard.html',
				title: ''
			}).
			when('/behandlingar/tandvardsradsla', {
				templateUrl: 'partials/tandvardsradsla.html',
				title: ''
			}).
			when('/behandlingar/incognito', {
				templateUrl: 'partials/incognito.html',
				title: ''
			}).
			when('/behandlingar/inman', {
				templateUrl: 'partials/inman.html',
				title: ''
			}).
			when('/behandlingar/invisalign', {
				templateUrl: 'partials/invisalign.html',
				title: ''
			}).
			

			otherwise({
				redirectTo: '/'
			});
}]);

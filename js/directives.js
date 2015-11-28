angular.module('bDirectives', [])

.directive('navigation', ['$location', function($location) {
	return {
		link: function(scope, element) {
			scope.isActive = function(viewLocation){
				return viewLocation == $location.path();
			}

			// Use jQuery instead of jQLite by using the $ here..
			$(element).on('click', 'a', function(){
				console.log('Closing menu');
				$('#collapsing-menu').collapse('hide');
			});
		}
	}
}])


.directive('akutForm', ['$rootScope', '$location', '$http', function($rootScope, $location, $http) {
	return {
		restrict: 'A',
		templateUrl: 'partials/directives/akut-form.html',
		link: function($scope, $element, $attr){
			$scope.submit = function(user){
				user.type = 'Akut';

				/*
				$http
					.post('//www.beiringtandklinik.se/form.php', user)
					.then(function(response) {
						$scope.success = true;
					}, function(response) {
						$scope.fail = true;
					});
				*/
				$scope.success = true;

				// ga('send', 'event', 'button', 'click', 'akut-form');
				ga('send', 'event', { eventCategory: 'AKUT Contact', eventAction: 'AKUT Contact request', eventLabel: 'AKUT', eventValue: 1000});
				
				// Alt 1
				_as("send", "pageview", "http://www.beiringtandklinik.se/signup/akut");

				// Alt 2
				$http.get('//www.googleadservices.com/pagead/conversion/948875852/?value=1000.00&amp;currency_code=SEK&amp;label=HzKZCMOexmAQzOS6xAM&amp;guid=ON&amp;script=0');
			}
		}
	}
}])

.directive('callMeForm', ['$rootScope', '$location', '$http', function($rootScope, $location, $http) {
	return {
		restrict: 'A',
		templateUrl: 'partials/directives/call-me-form.html',
		link: function($scope, $element, $attr){
			$scope.submit = function(user){
				user.type = 'Ring mig';

				$http
					.post('//www.beiringtandklinik.se/form.php', user)
					.then(function(response) {
						$scope.success = true;
					}, function(response) {
						$scope.fail = true;
					});

				ga('send', 'event', { eventCategory: 'RING', eventAction: 'RING request', eventLabel: 'RING form', eventValue: 1000});

				// $http.get('//www.googleadservices.com/pagead/conversion/948875852/?value=1000.00&amp;currency_code=SEK&amp;label=HzKZCMOexmAQzOS6xAM&amp;guid=ON&amp;script=0');

			}
		}
	}
}])

.directive('contactVertical', ['$rootScope', '$location', '$http', function($rootScope, $location, $http) {
	return {
		restrict: 'A',
		templateUrl: 'partials/directives/contactform-vertical.html',
		link: function($scope, $element, $attr){
			$scope.submit = function(user){
				user.type = 'Kontakt';

				$http
					.post('//www.beiringtandklinik.se/form.php', user)
					.then(function(response) {
						$scope.success = true;
					}, function(response) {
						$scope.fail = true;
					});

				ga('send', 'event', { eventCategory: 'LISTED', eventAction: 'LISTED request', eventLabel: 'LISTED form', eventValue: 1000});
				// ga('send', 'event', 'button', 'click', 'contact-form');
			}
		}
	}
}])

.directive('contactHorizontal', ['$rootScope', '$location', '$http', function($rootScope, $location, $http) {
	return {
		restrict: 'A',
		templateUrl: 'partials/directives/contactform-horizontal.html',
		link: function($scope, $element, $attr){
			$scope.submit = function(user){
				user.type = 'Kontakt';

				$http
					.post('//www.beiringtandklinik.se/form.php', user)
					.then(function(response) {
						$scope.success = true;
					}, function(response) {
						$scope.fail = true;
					});

				// ga('send', 'event', 'button', 'click', 'contact-form');
				ga('send', 'event', { eventCategory: 'LISTED', eventAction: 'LISTED request', eventLabel: 'LISTED form', eventValue: 1000});
			}
		}
	}
}]);

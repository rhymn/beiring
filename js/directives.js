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


.directive('akutForm', ['$rootScope', '$location', function($rootScope, $location) {
	return {
		restrict: 'A',
		templateUrl: 'partials/directives/akut-form.html',
		link: function($scope, $element, $attr){
		}
	}
}])

.directive('callMeForm', ['$rootScope', '$location', '$http', function($rootScope, $location, $http) {
	return {
		restrict: 'A',
		templateUrl: 'partials/directives/call-me-form.html',
		link: function($scope, $element, $attr){
			$scope.submit = function(user){
				$http
					.post('http://www.beiringtandklinik.se/newsite/form.php')
					.then(function(response) {
						console.log(response.data);
						$scope.status = response.status;
						$scope.data = response.data;
					}, function(response) {
						console.log(response.data);
						$scope.data = response.data || "Request failed";
						$scope.status = response.status;
					});
			}
		}
	}
}])

.directive('contactVertical', ['$rootScope', '$location', function($rootScope, $location) {
	return {
		restrict: 'A',
		templateUrl: 'partials/directives/contactform-vertical.html',
		link: function($scope, $element, $attr){
		}
	}
}])

.directive('contactHorizontal', ['$rootScope', '$location', function($rootScope, $location) {
	return {
		restrict: 'A',
		templateUrl: 'partials/directives/contactform-horizontal.html',
		link: function($scope, $element, $attr){
		}
	}
}]);

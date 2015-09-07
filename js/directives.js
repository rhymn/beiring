angular.module('bDirectives', [])


.directive('navigation', ['$location', function($location) {
	return function(scope, element, attrs) {
		scope.isActive = function(viewLocation){
			return viewLocation == $location.path();
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

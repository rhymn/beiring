angular.module('bDirectives', [])


.directive('navigation', ['$location', function($location) {
	return function(scope, element, attrs) {
		scope.isActive = function(viewLocation){
			return viewLocation == $location.path();
		}
	}
}])

.directive('contactForm', ['$rootScope', '$location', function($rootScope, $location) {
	return {
		restrict: 'A',
		templateUrl: 'partials/directives/contactform.html',
		controller: function($scope){
			$scope.isDone = false;
		},

		link: function($scope, $element, $attr){
			$element.css({
				display: 'none'
			});

			$rootScope.$on('message', function(obj, message){
				console.log(message);
				$scope.text = message;

				$element.css({
					display: 'block'
				});

				setTimeout(function(){
					$element.css({
						display: 'none'
					});
				}, 5000);

			});
		}
	}
}]);


var <%= name %> = <%= name %> || angular.module('<%= name %>', []);

(function () {
	'use strict';

	<%= name %>
		directive('<%= name %>', ['', function(){
			// Runs during compile
			return {
				// name: '',
				// priority: 1,
				// terminal: true,
				// scope: {}, // {} = isolate, true = child, false/undefined = no change
				// controller: function($scope, $element, $attrs, $transclude) {},
				// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
				// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
				// template: '',
				// replace: true,
				// transclude: true,
				// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
				templateUrl: '<%= name %>/<%= name %>.html',
				link: function($scope, iElm, iAttrs, controller) {
					
				}
			};
		}]);
})(); 
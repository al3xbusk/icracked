'use strict';

/* Directives */
var b1 = 0;
icrackedApp.directive("btnBar",function(){
	return {
		scope:{},
		restrict: "A",
		link: function(scope,elem,attrs) {
			var bar = angular.element(document.querySelector('#bar'));
			$(elem).click(function() {
				b1+=10;
				bar.css({'width':b1+'%'})
			})
		}
	}
});
icrackedApp.directive("btnDecr",function(){
	return {
		scope:{},
		restrict: "A",
		link: function(scope,elem,attrs) {
			var bar = angular.element(document.querySelector('#bar'));
			$(elem).click(function() {
				b1= b1-10;
				bar.css({'width':b1+'%'})
			})
		}
	}
});

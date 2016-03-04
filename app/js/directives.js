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
icrackedApp.directive("btnTest",function(){
	return {
		scope:{},
		restrict: "A",
		link: function(scope,elem,attrs) {
			var title = angular.element(document.querySelector('.copyrights'));
			$(elem).click(function() {
				title.css({'color':'#ccc'})
			})
		}
	}
});
'use strict';

/* Directives */
//var b1 = 0;
icrackedApp.directive("btnBar0",function(){
	return {
		scope:{},
		restrict: "A",
		link: function(scope,elem,attrs) {
			var bar = angular.element(document.querySelector('#bar'));
			$(elem).add(function() {
				var b1=0;
				bar.css({'width':b1+'%'})
			})
			$(elem).click(function() {
				b1+=10;
				bar.css({'width':b1+'%'})
			})
		}
	}
});
icrackedApp.directive("btnBar10",function(){
	return {
		scope:{},
		restrict: "A",
		link: function(scope,elem,attrs) {
			var bar = angular.element(document.querySelector('#bar'));
			$(elem).add(function() {
				var b1=10;
				bar.css({'width':b1+'%'})
			})
			$(elem).click(function() {
				b1+=10;
				bar.css({'width':b1+'%'})
			})
		}
	}
});
icrackedApp.directive("btnBar20",function(){
	return {
		scope:{},
		restrict: "A",
		link: function(scope,elem,attrs) {
			var bar = angular.element(document.querySelector('#bar'));
			$(elem).add(function() {
				var b1=20;
				bar.css({'width':b1+'%'})
			})
			$(elem).click(function() {
				b1+=10;
				bar.css({'width':b1+'%'})
			})
		}
	}
});
icrackedApp.directive("btnBar30",function(){
	return {
		scope:{},
		restrict: "A",
		link: function(scope,elem,attrs) {
			var bar = angular.element(document.querySelector('#bar'));
			$(elem).add(function() {
				var b1=30;
				bar.css({'width':b1+'%'})
			})
			$(elem).click(function() {
				b1+=10;
				bar.css({'width':b1+'%'})
			})
		}
	}
});


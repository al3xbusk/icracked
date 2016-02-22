'use strict';

/* App Module */
var icrackedApp = angular.module('icrackedApp', ['ngRoute']);
icrackedApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/phones', {
			templateUrl: 'partials/main.html',
			controller: 'icrackedCtrl'
		}).
		//phones
		when('/phones/iPhone', {
			templateUrl: 'partials/iphone.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/ipad', {
			templateUrl: 'partials/ipad.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/ipod', {
			templateUrl: 'partials/ipod.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/samsung', {
			templateUrl: 'partials/samsung.html',
			controller: 'iphoneCtrl'
		}).
		//=-=-=-=-=-iPhones-=-=-=-=-=-
		//iphone models
		when('/phones/iPhone/6s', {
			templateUrl: 'partials/iphone/6s.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/5', {
			templateUrl: 'partials/iphone/5.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/4s', {
			templateUrl: 'partials/iphone/4s.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/3', {
			templateUrl: 'partials/iphone/3.html',
			controller: 'iphoneCtrl'
		}).
		//=-=-=-=-iPhone 6s -=-=-=-=-=-
		//iphone 6s colors
		when('/phones/iPhone/6s/gold', {
			templateUrl: 'partials/iphone/6s-colors/gold.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/space-grey', {
			templateUrl: 'partials/iphone/6s-colors/space-grey.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/silver', {
			templateUrl: 'partials/iphone/6s-colors/silver.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/rose-gold', {
			templateUrl: 'partials/iphone/6s-colors/rose-gold.html',
			controller: 'iphoneCtrl'
		}).
		//-=-=-=-=-=-iPhone 6s colors-=-=-=-=-=
		//iphone 6s gold network
		when('/phones/iPhone/6s/gold/at&t', {
			templateUrl: 'partials/iphone/6s-colors/6s-gold-network/at&t.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/gold/sprint', {
			templateUrl: 'partials/iphone/6s-colors/6s-gold-network/sprint.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/gold/t-mobile', {
			templateUrl: 'partials/iphone/6s-colors/6s-gold-network/t-mobile.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/gold/verizon', {
			templateUrl: 'partials/iphone/6s-colors/6s-gold-network/verizon.html',
			controller: 'iphoneCtrl'
		}).
		//iphone 6s rose gold network
		when('/phones/iPhone/6s/rose-gold/at&t', {
			templateUrl: 'partials/iphone/6s-colors/6s-rose-gold-network/at&t.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/rose-gold/sprint', {
			templateUrl: 'partials/iphone/6s-colors/6s-rose-gold-network/sprint.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/rose-gold/t-mobile', {
			templateUrl: 'partials/iphone/6s-colors/6s-rose-gold-network/t-mobile.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/rose-gold/verizon', {
			templateUrl: 'partials/iphone/6s-colors/6s-rose-gold-network/verizon.html',
			controller: 'iphoneCtrl'
		}).
		//iphone 6s silver network
		when('/phones/iPhone/6s/silver/at&t', {
			templateUrl: 'partials/iphone/6s-colors/6s-silver-network/at&t.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/silver/sprint', {
			templateUrl: 'partials/iphone/6s-colors/6s-silver-network/sprint.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/silver/t-mobile', {
			templateUrl: 'partials/iphone/6s-colors/6s-silver-network/t-mobile.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/silver/verizon', {
			templateUrl: 'partials/iphone/6s-colors/6s-silver-network/verizon.html',
			controller: 'iphoneCtrl'
		}).
		//iphone 6s space grey network
		when('/phones/iPhone/6s/space-grey/at&t', {
			templateUrl: 'partials/iphone/6s-colors/6s-space-grey-network/at&t.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/space-grey/sprint', {
			templateUrl: 'partials/iphone/6s-colors/6s-space-grey-network/sprint.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/space-grey/t-mobile', {
			templateUrl: 'partials/iphone/6s-colors/6s-space-grey-network/t-mobile.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/space-grey/verizon', {
			templateUrl: 'partials/iphone/6s-colors/6s-space-grey-network/verizon.html',
			controller: 'iphoneCtrl'
		}).
		//=-=-=-=-=-=-=iphone 6s gold-=-=-=-=-=--=
		//iphone 6s gold at&t problem
		when('/phones/iPhone/6s/gold/at&t/battery', {
			templateUrl: 'partials/iphone/6s-colors/6s-gold-network/6s-gold-network-at-and-t/battery.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/gold/at&t/broken-screen', {
			templateUrl: 'partials/iphone/6s-colors/6s-gold-network/6s-gold-network-at-and-t/broken-screen.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/gold/at&t/water-damage', {
			templateUrl: 'partials/iphone/6s-colors/6s-gold-network/6s-gold-network-at-and-t/water-damage.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/gold/at&t/wont-turn-on', {
			templateUrl: 'partials/iphone/6s-colors/6s-gold-network/6s-gold-network-at-and-t/wont-turn-on.html',
			controller: 'iphoneCtrl'
		}).
		//iphone 6s gold sprint problem
		when('/phones/iPhone/6s/gold/sprint/battery', {
			templateUrl: 'partials/iphone/6s-colors/6s-gold-network/6s-gold-network-sprint/battery.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/gold/sprint/broken-screen', {
			templateUrl: 'partials/iphone/6s-colors/6s-gold-network/6s-gold-network-sprint/broken-screen.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/gold/sprint/water-damage', {
			templateUrl: 'partials/iphone/6s-colors/6s-gold-network/6s-gold-network-sprint/water-damage.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/gold/sprint/wont-turn-on', {
			templateUrl: 'partials/iphone/6s-colors/6s-gold-network/6s-gold-network-sprint/wont-turn-on.html',
			controller: 'iphoneCtrl'
		}).
		//iphone 6s gold t-mobile problem
		when('/phones/iPhone/6s/gold/t-mobile/battery', {
			templateUrl: 'partials/iphone/6s-colors/6s-gold-network/6s-gold-network-t-mobile/battery.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/gold/t-mobile/broken-screen', {
			templateUrl: 'partials/iphone/6s-colors/6s-gold-network/6s-gold-network-t-mobile/broken-screen.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/gold/t-mobile/water-damage', {
			templateUrl: 'partials/iphone/6s-colors/6s-gold-network/6s-gold-network-t-mobile/water-damage.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/gold/t-mobile/wont-turn-on', {
			templateUrl: 'partials/iphone/6s-colors/6s-gold-network/6s-gold-network-t-mobile/wont-turn-on.html',
			controller: 'iphoneCtrl'
		}).
		//iphone 6s gold verizon problem
		when('/phones/iPhone/6s/gold/verizon/battery', {
			templateUrl: 'partials/iphone/6s-colors/6s-gold-network/6s-gold-network-verizon/battery.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/gold/verizon/broken-screen', {
			templateUrl: 'partials/iphone/6s-colors/6s-gold-network/6s-gold-network-verizon/broken-screen.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/gold/verizon/water-damage', {
			templateUrl: 'partials/iphone/6s-colors/6s-gold-network/6s-gold-network-verizon/water-damage.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/gold/verizon/wont-turn-on', {
			templateUrl: 'partials/iphone/6s-colors/6s-gold-network/6s-gold-network-verizon/wont-turn-on.html',
			controller: 'iphoneCtrl'
		}).
		//-=-=-=-=-=-=-iPhone 6s rose gold -=-=-=-=-=-=
		//iphone 6s rose gold at&t problem
		when('/phones/iPhone/6s/rose-gold/at&t/battery', {
			templateUrl: 'partials/iphone/6s-colors/6s-rose-gold-network/6s-rose-gold-network-at-and-t/battery.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/rose-gold/at&t/broken-screen', {
			templateUrl: 'partials/iphone/6s-colors/6s-rose-gold-network/6s-rose-gold-network-at-and-t/broken-screen.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/rose-gold/at&t/water-damage', {
			templateUrl: 'partials/iphone/6s-colors/6s-rose-gold-network/6s-rose-gold-network-at-and-t/water-damage.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/rose-gold/at&t/wont-turn-on', {
			templateUrl: 'partials/iphone/6s-colors/6s-rose-gold-network/6s-rose-gold-network-at-and-t/wont-turn-on.html',
			controller: 'iphoneCtrl'
		}).
		//iphone 6s rose gold sprint problem
		when('/phones/iPhone/6s/rose-gold/sprint/battery', {
			templateUrl: 'partials/iphone/6s-colors/6s-rose-gold-network/6s-rose-gold-network-sprint/battery.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/rose-gold/sprint/broken-screen', {
			templateUrl: 'partials/iphone/6s-colors/6s-rose-gold-network/6s-rose-gold-network-sprint/broken-screen.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/rose-gold/sprint/water-damage', {
			templateUrl: 'partials/iphone/6s-colors/6s-rose-gold-network/6s-rose-gold-network-sprint/water-damage.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/rose-gold/sprint/wont-turn-on', {
			templateUrl: 'partials/iphone/6s-colors/6s-rose-gold-network/6s-rose-gold-network-sprint/wont-turn-on.html',
			controller: 'iphoneCtrl'
		}).
		//iphone 6s rose gold t-mobile problem
		when('/phones/iPhone/6s/rose-gold/t-mobile/battery', {
			templateUrl: 'partials/iphone/6s-colors/6s-rose-gold-network/6s-rose-gold-network-t-mobile/battery.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/rose-gold/t-mobile/broken-screen', {
			templateUrl: 'partials/iphone/6s-colors/6s-rose-gold-network/6s-rose-gold-network-t-mobile/broken-screen.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/rose-gold/t-mobile/water-damage', {
			templateUrl: 'partials/iphone/6s-colors/6s-rose-gold-network/6s-rose-gold-network-t-mobile/water-damage.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/rose-gold/t-mobile/wont-turn-on', {
			templateUrl: 'partials/iphone/6s-colors/6s-rose-gold-network/6s-rose-gold-network-t-mobile/wont-turn-on.html',
			controller: 'iphoneCtrl'
		}).
		//iphone 6s rose gold verizon problem
		when('/phones/iPhone/6s/rose-gold/verizon/battery', {
			templateUrl: 'partials/iphone/6s-colors/6s-rose-gold-network/6s-rose-gold-network-verizon/battery.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/rose-gold/verizon/broken-screen', {
			templateUrl: 'partials/iphone/6s-colors/6s-rose-gold-network/6s-rose-gold-network-verizon/broken-screen.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/rose-gold/verizon/water-damage', {
			templateUrl: 'partials/iphone/6s-colors/6s-rose-gold-network/6s-rose-gold-network-verizon/water-damage.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/rose-gold/verizon/wont-turn-on', {
			templateUrl: 'partials/iphone/6s-colors/6s-rose-gold-network/6s-rose-gold-network-verizon/wont-turn-on.html',
			controller: 'iphoneCtrl'
		}).
		//-=-=-=-=-=-=-iPhone 6s silver -=-=-=-=-=-=
		//iphone 6s silver at&t problem
		when('/phones/iPhone/6s/silver/at&t/battery', {
			templateUrl: 'partials/iphone/6s-colors/6s-silver-network/6s-silver-network-at-and-t/battery.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/silver/at&t/broken-screen', {
			templateUrl: 'partials/iphone/6s-colors/6s-silver-network/6s-silver-network-at-and-t/broken-screen.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/silver/at&t/water-damage', {
			templateUrl: 'partials/iphone/6s-colors/6s-silver-network/6s-silver-network-at-and-t/water-damage.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/silver/at&t/wont-turn-on', {
			templateUrl: 'partials/iphone/6s-colors/6s-silver-network/6s-silver-network-at-and-t/wont-turn-on.html',
			controller: 'iphoneCtrl'
		}).
		//iphone 6s silver sprint problem
		when('/phones/iPhone/6s/silver/sprint/battery', {
			templateUrl: 'partials/iphone/6s-colors/6s-silver-network/6s-silver-network-sprint/battery.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/silver/sprint/broken-screen', {
			templateUrl: 'partials/iphone/6s-colors/6s-silver-network/6s-silver-network-sprint/broken-screen.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/silver/sprint/water-damage', {
			templateUrl: 'partials/iphone/6s-colors/6s-silver-network/6s-silver-network-sprint/water-damage.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/silver/sprint/wont-turn-on', {
			templateUrl: 'partials/iphone/6s-colors/6s-silver-network/6s-silver-network-sprint/wont-turn-on.html',
			controller: 'iphoneCtrl'
		}).
		//iphone 6s silver t-mobile problem
		when('/phones/iPhone/6s/silver/t-mobile/battery', {
			templateUrl: 'partials/iphone/6s-colors/6s-silver-network/6s-silver-network-t-mobile/battery.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/silver/t-mobile/broken-screen', {
			templateUrl: 'partials/iphone/6s-colors/6s-silver-network/6s-silver-network-t-mobile/broken-screen.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/silver/t-mobile/water-damage', {
			templateUrl: 'partials/iphone/6s-colors/6s-silver-network/6s-silver-network-t-mobile/water-damage.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/silver/t-mobile/wont-turn-on', {
			templateUrl: 'partials/iphone/6s-colors/6s-silver-network/6s-silver-network-t-mobile/wont-turn-on.html',
			controller: 'iphoneCtrl'
		}).
		//iphone 6s silver verizon problem
		when('/phones/iPhone/6s/silver/verizon/battery', {
			templateUrl: 'partials/iphone/6s-colors/6s-silver-network/6s-silver-network-verizon/battery.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/silver/verizon/broken-screen', {
			templateUrl: 'partials/iphone/6s-colors/6s-silver-network/6s-silver-network-verizon/broken-screen.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/silver/verizon/water-damage', {
			templateUrl: 'partials/iphone/6s-colors/6s-silver-network/6s-silver-network-verizon/water-damage.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/silver/verizon/wont-turn-on', {
			templateUrl: 'partials/iphone/6s-colors/6s-silver-network/6s-silver-network-verizon/wont-turn-on.html',
			controller: 'iphoneCtrl'
		}).
		//-=-=-=-=-=-=-iPhone 6s space grey -=-=-=-=-=-=
		//iphone 6s space grey at&t problem
		when('/phones/iPhone/6s/space-grey/at&t/battery', {
			templateUrl: 'partials/iphone/6s-colors/6s-space-grey-network/6s-space-grey-network-at-and-t/battery.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/space-grey/at&t/broken-screen', {
			templateUrl: 'partials/iphone/6s-colors/6s-space-grey-network/6s-space-grey-network-at-and-t/broken-screen.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/space-grey/at&t/water-damage', {
			templateUrl: 'partials/iphone/6s-colors/6s-space-grey-network/6s-space-grey-network-at-and-t/water-damage.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/space-grey/at&t/wont-turn-on', {
			templateUrl: 'partials/iphone/6s-colors/6s-space-grey-network/6s-space-grey-network-at-and-t/wont-turn-on.html',
			controller: 'iphoneCtrl'
		}).
		//iphone 6s space-grey sprint problem
		when('/phones/iPhone/6s/space-grey/sprint/battery', {
			templateUrl: 'partials/iphone/6s-colors/6s-space-grey-network/6s-space-grey-network-sprint/battery.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/space-grey/sprint/broken-screen', {
			templateUrl: 'partials/iphone/6s-colors/6s-space-grey-network/6s-space-grey-network-sprint/broken-screen.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/space-grey/sprint/water-damage', {
			templateUrl: 'partials/iphone/6s-colors/6s-space-grey-network/6s-space-grey-network-sprint/water-damage.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/space-grey/sprint/wont-turn-on', {
			templateUrl: 'partials/iphone/6s-colors/6s-space-grey-network/6s-space-grey-network-sprint/wont-turn-on.html',
			controller: 'iphoneCtrl'
		}).
		//iphone 6s space-grey t-mobile problem
		when('/phones/iPhone/6s/space-grey/t-mobile/battery', {
			templateUrl: 'partials/iphone/6s-colors/6s-space-grey-network/6s-space-grey-network-t-mobile/battery.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/space-grey/t-mobile/broken-screen', {
			templateUrl: 'partials/iphone/6s-colors/6s-space-grey-network/6s-space-grey-network-t-mobile/broken-screen.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/space-grey/t-mobile/water-damage', {
			templateUrl: 'partials/iphone/6s-colors/6s-space-grey-network/6s-space-grey-network-t-mobile/water-damage.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/space-grey/t-mobile/wont-turn-on', {
			templateUrl: 'partials/iphone/6s-colors/6s-space-grey-network/6s-space-grey-network-t-mobile/wont-turn-on.html',
			controller: 'iphoneCtrl'
		}).
		//iphone 6s space-grey verizon problem
		when('/phones/iPhone/6s/space-grey/verizon/battery', {
			templateUrl: 'partials/iphone/6s-colors/6s-space-grey-network/6s-space-grey-network-verizon/battery.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/space-grey/verizon/broken-screen', {
			templateUrl: 'partials/iphone/6s-colors/6s-space-grey-network/6s-space-grey-network-verizon/broken-screen.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/space-grey/verizon/water-damage', {
			templateUrl: 'partials/iphone/6s-colors/6s-space-grey-network/6s-space-grey-network-verizon/water-damage.html',
			controller: 'iphoneCtrl'
		}).
		when('/phones/iPhone/6s/space-grey/verizon/wont-turn-on', {
			templateUrl: 'partials/iphone/6s-colors/6s-space-grey-network/6s-space-grey-network-verizon/wont-turn-on.html',
			controller: 'iphoneCtrl'
		}).
		otherwise({
			redirectTo: '/phones'
		});
	}])


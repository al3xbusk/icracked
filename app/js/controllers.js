'use strict';

/* Controllers */
var icracked = icrackedApp.controller('icrackedCtrl', ['$scope', '$location',	function($scope, $location) {
	$scope.devices = 
	[
	{
		'name': 'iPhone',
		'class': 'img-iphone',
		'href': 'partials/iphone.html'
	},
	{
		'name': 'ipad',
		'class': 'img-ipad',
		'href': 'partials/iphone.html'
	},
	{
		'name': 'ipod',
		'class': 'img-ipod',
		'href': 'partials/iphone.html'
	},
	{
		'name': 'samsung',
		'class': 'img-samsung',
		'href': 'partials/iphone.html'
	}
	];
}]);
icrackedApp.controller('iphoneCtrl', function($scope){
	$scope.iphones = [
	{
		'model': '6s',
		'colors': 
		[
		{
			'color': 'Gold',
			'id': 'gold'
		},
		{
			'color':'Space Grey',
			'id': 'space-grey'
		},
		{
			'color': 'Silver',
			'id': 'silver'
		},
		{
			'color':'Rose Gold',
			'id': 'rose-gold'
		}
		]
	},
	{
		'model': '6',
		'colors': 
		[
		{
			'color': 'Gold',
			'id': 'gold'
		},
		{
			'color':'Space Grey',
			'id': 'space-grey'
		},
		{
			'color': 'Silver',
			'id': 'silver'
		}
		]
	},
	{
		'model': '5s',
		'colors': 
		[
		{
			'color': 'Gold',
			'id': 'gold'
		},
		{
			'color':'Space Grey',
			'id': 'space-grey'
		},
		{
			'color': 'Silver',
			'id': 'silver'
		}
		]
	},
	{
		'model': '5',
		'colors': [
		{
			'color': 'black',
			'id': 'black'
		},
		{
			'color':'white',
			'id': 'white'
		}
		]
	},
	{
		'model': '4s',
		'colors': [
		{
			'color': 'black',
			'id': 'black'
		},
		{
			'color':'white',
			'id': 'white'
		}
		]
	},
	{
		'model': '4',
		'colors': [
		{
			'color': 'black',
			'id': 'black'
		},
		{
			'color':'white',
			'id': 'white'
		}
		]
	},
	{
		'model': '3',
		'colors' : [
		{
			'color': 'black',
			'id': 'black'
		},
		{
			'color':'white',
			'id': 'white'
		}
		]
	}
	];
	$scope.networks = [
	'At&t',
	'Verizon',
	'Sprint',
	'T-mobile'
	];
	$scope.problems = [
	{
		'issue': 'Broken screen',
		'id': 'broken-screen'
	},
	{
		'issue': 'Battery',
		'id': 'battery'
	},
	{
		'issue': 'Water Damage',
		'id': 'water-damage'
	},
	{
		'issue': "Won't turn on",
		'id': 'wont-turn-on'
	}
	]
});
icrackedApp.controller('ipadCtrl', function($scope){
	$scope.ipads = [
	{
		'model': '1',
	},
	{
		'model': '2',
	},
	{
		'model': 'air',
	},
	{
		'model': 'retina',
	}
	];
});
icrackedApp.controller('ipodCtrl', function($scope){
	$scope.ipods = [
	{
		'model': '2g',
	},
	{
		'model': '3g',
	},
	{
		'model': '4g touch',
	},
	{
		'model': '5g touch',
	}
	];
});
icrackedApp.controller('samsungCtrl', function($scope){
	$scope.samsungs = [
	{
		'model': '3s',
	},
	{
		'model': '4s',
	},
	{
		'model': '5s',
	},
	{
		'model': '6s',
	}
	];
});
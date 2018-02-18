angular.module('main')

.controller('mapCtrl',['$scope','$ ',
	function($scope, $rootScope,NgMap){
		NgMap.getMap().then(function(map) {
		    console.log(map.getCenter());
		    console.log('markers', map.markers);
		    console.log('shapes', map.shapes);
	  	});
	}
]);
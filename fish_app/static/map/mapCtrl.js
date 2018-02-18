angular.module('main')

.controller('mapCtrl',['$scope','$rootScope','$compile','NgMap',
	function($scope, $rootScope, $compile, NgMap){
		$scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyC__jz_XKUkrgNXlkWvyVUwFMogwj_yzio";

		var vm = this;
	 	vm.ne, vm.sw;
	  	NgMap.getMap().then(function(map) {
	    	console.log('map', map);
	    	vm.map = map;
	  	});

	  	vm.click = function(ev){
	  			console.log(ev)
	  	}
	  	$scope.rect_visible = 'None';
	  	function create_rectangle(c_lat,c_lng){
          $scope.north= c_lat+0.1
          $scope.south=c_lat-0.1
          $scope.east=c_lng+0.1
          $scope.west=c_lng-0.1
		}
		create_rectangle(10.467,-61.355)
	

	}
]);
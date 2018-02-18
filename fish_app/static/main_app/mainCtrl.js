angular.module('main',['ngMaterial','ngMessages','ngMap'])

.controller('mainCtrl',['$scope','$rootScope','catchService',
	function($scope,$rootScope,catchService){
		window.onload = function(){
			// let map = initMap();
			$rootScope.table_data=[];
			catchService.catch.getCatch(null,
			function(resp){
				$rootScope.markers_data=resp['data']['data'];
				
				
			},null);
		}

		$rootScope.getData = function(){
			$rootScope.table_data = $rootScope.markers_data.slice(3,8);
			console.log($rootScope.table_data)
		}
	}
])
console.log('what the fuck')
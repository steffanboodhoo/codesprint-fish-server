angular.module('main',['ngMaterial','ngMessages'])

.controller('mainCtrl',['$scope','$rootScope','catchService',
	function($scope,$rootScope,catchService){
		window.onload = function(){
			let map = initMap();

			catchService.catch.getCatch(null,
			function(resp){
				$rootScope.table_data=resp['data']['data'];
				console.log($rootScope.table_data)
				loadMarkers(resp['data'],map)
			},null);
		}

		
	}
])
console.log('what the fuck')
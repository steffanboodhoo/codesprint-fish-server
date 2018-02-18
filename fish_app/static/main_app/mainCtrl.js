angular.module('main',['ngMaterial','ngMessages','ngMap'])

.controller('mainCtrl',['$scope','$rootScope','catchService',
	function($scope,$rootScope,catchService){
		window.onload = function(){

			$rootScope.table_data=[];
			catchService.catch.getCatch(null,
			function(resp){
				$rootScope.markers_data=resp['data']['data'];
				
				
			},null);
		}

		$rootScope.getData = function(){
			$rootScope.table_data = $rootScope.markers_data.slice(3,8);
			$rootScope.func()
		}
	}
])
console.log('what the fuck')
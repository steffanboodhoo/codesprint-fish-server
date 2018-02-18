angular.module('main')

.controller('tableCtrl',['$scope','$rootScope',
	function($scope, $rootScope){
		function grab_keys(obj) {
			console.log(obj)
			return Object.keys(obj)
		}

		
		// $rootScope.table_data;
		$rootScope.func = function(){
			console.log($rootScope.table_data)
			$scope.table_data = $rootScope.table_data;
        	$scope.headings = grab_keys($scope.table_data);
        	$scope.grab = function(x, d) {return x[d]};
		}
	}
]);
angular.module('main')

.controller('tableCtrl',['$scope','$rootScope',
	function($scope, $rootScope){
		function grab_keys(obj) {
			return Object.keys(obj)
		}

		$scope.table_data = $rootScope.table_data;
		// [
        //
		// 	{
        //
		// 		'x': 2,
		// 		'y': 3,
		// 		'z': 4
		// 	},
        //
		// 	{
		// 		'x': -1,
		// 		'y': -2,
		// 		'z': -3
        //
		// 	}
        //
		// ];

        $scope.headings = grab_keys($scope.table_data);


        $scope.grab = function(x, d) {return x[d]};
		// $rootScope.table_data;
	}
]);

angular.module('credit',['ngMaterial','ngMessages'])

.controller('mainCtrl',['$scope','$rootScope',
	function($scope,$rootScope){
		
		$scope.AUTHENTICATED = false;
		
		$scope.sampletextA = "hello boys";
		$scope.sampletextB = "It's been a pleasure";
	}
])
console.log('what the fuck')
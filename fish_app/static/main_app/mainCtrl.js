angular.module('credit',['ngMaterial'])

.controller('mainCtrl',['$scope','$rootScope',
	function($scope,$rootScope){
		$scope.AUTHENTICATED = false;
		$scope.sampletextA = "hello boys";
		$scope.sampletextB = "It's been a pleasure";
		/*//COOKIES -----------------------
		cookies = document.cookie.split('; '); //supposed to be thingy
		$rootScope.cookies = {}
		cookies.forEach(function(el){
			el = el.split('=')
			$rootScope.cookies[el[0]]= el[1];
		});

		//AUTHENTICATION ----------------
		 (function(){ 
			creditService.auth.validateToken(null
				,function(response){
					console.log(response)
					$scope.AUTHENTICATED = $rootScope.cookies['auth_type'];
				})
		})();

		//EVENTS ------------------------
		$scope.$on('planid-loaded', function(event, data){
			$scope.$broadcast('planid-recieved',data);
		})

		$scope.$on('authenticated-admin', function(event, data){
			$scope.AUTHENTICATED = 'admin';
		})
		$scope.$on('authenticated-customer', function(event, data){
			$scope.AUTHENTICATED = 'customer';
		})


		$scope.$on('timeout', function(event, data){
			$scope.AUTHENTICATED = 'timeout';
		})*/

	}
])
console.log('what the fuck')
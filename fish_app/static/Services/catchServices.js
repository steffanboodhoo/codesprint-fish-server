angular.module('main')

.service('catchService',['$http',
	function($http){

		var api={};

		api.catch = {
			'getCatch':function(_data, success=null, failure=null){
				return genReq($http({headers:{'Content-Type':'application/json'},method:'GET',url:'/catch',params:_data}), success, failure);
			}
		}

		function genReq(req, success, failure){
			req.then(function(response){
				// console.log(response)
				if(response.data.status==='success'){
					// console.log('success');
					success(response);
				}else if(response.data.status==='failure'){

					if( typeof(failure) === 'undefined' || failure === null)
						console.log('status is failure')
					else
						failure(response);
				}
			});
		}

		return api;
	}]);
angular.module('bryllup', [])
	.controller('registerController', ['$scope', '$http', function($scope, $http) {
		
		var inviteObj = new Object();
		inviteObj.email = "davidoj@siminn.is";
		inviteObj.invitecode ='AAAA';
		
		$scope.Invite = {};
        $scope.errorMessage = '';
        $scope.formTest = $scope.Invite;
        
        //{ invitecode: 'AAAA', email: 'janamaren@gmail.com' }
        
        var config = {
                headers : {
                    'Content-Type': 'application/json; charset=utf-8',
                    'host': 'localhost:10000',
                    'connection': 'keep-alive',
                    'content-type': 'application/json',
                    'accept': '*/*',
                    'accept-encoding': 'gzip, deflate',
                    'accept-language': 'en-US,en;q=0.8,is;q=0.6',
                    'Access-Control-Allow-Origin': '*',
                }
            }
        
        $scope.register = function(persons) {
        	//$scope.formTest = "whhop"; 
        	$http.post('http://localhost:10000/api/invites/register', $scope.Invite, config)
        		.success(function(response)
        				{

    						//$scope.formTest = response;
        					$scope.persons = response.persons;
        					$scope.responseCode = response.$status
        					$scope.error = null;
        					
        				})
        		.error(function(data, status, header, config) 
        				{
        				    $scope.error = "error";
        				    $scope.persons = null;
        				    $scope.formTest = null;
        				});
        	
        	
        	//$http.get("http://localhost:10000/api/invites/list").success(function(response){$scope.formTest = response;});
        }
        
        $scope.getIconClass = function(person) {
            if(person.registered == "true"){
            	return "glyphicon-ok ";
            } else {
            	return "glyphicon-remove ";
            }
        	
         }
        $scope.getFormStatusClass = function(person) {
            if(person.registered == "true"){
            	return "inputSuccess ";
            } else {
            	return "inputError ";
            }
        	
         }
        
        $scope.getFormStatus = function(person) {
            if(person.registered == "true"){
            	return "has-success ";
            } else {
            	return "has-error ";
            }
        	
         }
        
}]);

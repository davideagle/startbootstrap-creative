angular.module('bryllup', [])
	.controller('registerController', ['$scope', '$http', function($scope, $http) {
		
		$scope.Invite = {};
        $scope.errorMessage = '';
        
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
        
        $scope.register = function() {
        	$scope.test = $scope.Invite
        	var invite = $scope.Invite
        	$scope.formemail = $scope.Invite.email
        	// Post í chrome er ekki að senda scope.invite
        	$http.post('http://localhost:10000/api/invites/register', invite)
        		.success(function(response)
        				{

    						//$scope.formTest = response;
        					$scope.Invite = response;
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
        
        $scope.update = function(persons) {

        	
        	$http.post('http://localhost:10000/api/invites/update', $scope.Invite, config)
    		.success(function(response)
    				{

						//$scope.formTest = response;
    					$scope.Invite.persons = response.persons;
    					$scope.responseCode = response.$status
    					$scope.error = null;
    					$scope.success = true;
    					
    				})
    		.error(function(data, status, header, config) 
    				{
    				    $scope.error = "error";
    				    $scope.persons = null;
    				    $scope.formTest = null;
    				    $scope.success = false;
    				});
        }
        
        $scope.getIconClass = function(person) {
            if(person.registered == true){
            	return "glyphicon-ok ";
            } else {
            	return "glyphicon-remove ";
            }
        	
         }
        $scope.getFormStatus = function(person) {
            if(person.registered == true){
            	return "inputSuccess ";
            } else {
            	return "inputError ";
            }
        	
         }
        
        $scope.getFormStatusClass = function(person) {
            if(person.registered == true){
            	return "has-success inviteRegistered";
            } else {
            	return "has-error ";
            }
        	
         }
        
}]);

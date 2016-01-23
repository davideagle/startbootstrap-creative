angular.module('bryllup', [])
	.controller('registerController', ['$scope', '$http', function($scope, $http) {
		
		$scope.Invite = {};
        $scope.errorMessage = '';
        
        var httpDomain = 'http://' + $location
        
        $scope.register = function() {
        	var path = httpDomain + '/api/invites/register'
        	$http.post(path, $scope.Invite)
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
        	
        }
        
        $scope.update = function(persons) {

        	
        	$http.post('http://$location/api/invites/update', $scope.Invite)
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

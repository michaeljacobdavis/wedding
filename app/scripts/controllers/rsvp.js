/*global weddingApp*/

'use strict';

weddingApp.controller('RsvpCtrl', function($scope, $http) {

	// Todo:
	// This is already on the form
	// it should probably be grabbed from there
	var url = 'https://docs.google.com/spreadsheet/formResponse?formkey=dFRORWZQSHh5aDJiM3dLUU9ldmlQNmc6MQ&theme=0AX42CRMsmRFbUy0yMjdiMTQ4Yi0zZjUwLTQ5NTUtOGVmNC05ODNlZTUxYTViYzA&embedded=true&ifq';
	$scope.save = function() {
		$http.post(url, $scope.entry);
	};
});

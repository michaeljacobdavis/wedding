/*global weddingApp*/

'use strict';

weddingApp.controller('RsvpCtrl', function($scope, $http) {

	var url = '/api/rsvp';
	$scope.save = function() {
	
		$http.post(url, $scope.entry);
	};
});

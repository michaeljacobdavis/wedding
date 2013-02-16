weddingApp.controller('OurStoryCtrl', function($scope) {
	'use strict';

	$scope.test = "blah";

	$scope.getClass = function(path) {
		if ($location.path().substr(0, path.length) == path) {
			return "active";
		} else {
			return "";
		}
	};
});

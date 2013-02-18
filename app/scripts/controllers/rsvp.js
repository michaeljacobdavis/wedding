/*global weddingApp*/

'use strict';

weddingApp.controller('RsvpCtrl', function($scope, $http, $location) {

  // Defaults
  $scope.entry = {
    coming: "Happily Accepts",
    howMany: 2
  };

  var url = '/api/rsvp';
  $scope.save = function() {
    // Todo: Handle error

    $http.post(url, $scope.entry).success(function(data){
      if($scope.entry.coming === 'true') $location.path('/rsvp/going');
      else $location.path('/rsvp/notgoing');
    });
  };
});

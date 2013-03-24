/*global weddingApp*/

'use strict';

weddingApp.controller('RsvpCtrl', function($scope, $http, $location) {

  // Defaults
  $scope.entry = {
    coming: true,
    howMany: 2
  };

  var url = '/api/rsvpi';
  $scope.save = function() {
    // Todo: Handle error
    $http.post(url, $scope.entry).success(function(data){
      if($scope.entry.coming) $location.path('/rsvp/going');
      else $location.path('/rsvp/notgoing');
    }).error(function(){
      $location.path('/error');
    });
  };
});

/*global weddingApp*/

'use strict';

weddingApp.controller('DirectionsCtrl', function($scope) {
  var model = $scope.model = {};
  var destinationLatLang = new google.maps.LatLng(33.238251,-117.236256);
  var mapOptions = {
    center: destinationLatLang,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  var marker = new google.maps.Marker({
    position: destinationLatLang,
    map: map,
    title:"Hello World!"
  });

  // Geo location
  // ===========
  if (navigator.geolocation) {
    var success = function(position){
      var userPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      var directionsService = new google.maps.DirectionsService();

      var request = {
        origin: userPosition,
        destination: destinationLatLang,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.DRIVING
      };
      directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          model.distance = result.routes[0].legs[0].distance.text;
          $scope.$apply();
        }
      });
    };
    navigator.geolocation.getCurrentPosition(success);
  }
});

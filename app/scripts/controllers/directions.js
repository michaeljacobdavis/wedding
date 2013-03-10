/*global weddingApp*/

'use strict';

weddingApp.controller('DirectionsCtrl', function($scope) {
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
});

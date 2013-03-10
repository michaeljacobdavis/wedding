/*global weddingApp*/

'use strict';

weddingApp.controller('DirectionsCtrl', function($scope) {
  var map = L.map('map').setView([33.238251,-117.236256], 10);
  L.tileLayer('http://{s}.tile.cloudmade.com/efbcd8f7d1d746819abd2aee833d814b/997/256/{z}/{x}/{y}.png').addTo(map);
  var marker = L.marker([33.238251,-117.236256]).addTo(map);
  marker.bindPopup('676 Osborne St, Vista, CA 92084');
});

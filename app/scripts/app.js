'use strict';

var weddingApp = angular.module('weddingApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/ourstory',
        controller: 'OurStoryCtrl'
      })
      .when('/directions', {
        templateUrl: 'partials/directions',
        controller: 'DirectionsCtrl'
      })
      .when('/registry', {
        templateUrl: 'partials/registry',
        controller: 'RegistryCtrl'
      })
      .when('/rsvp', {
        templateUrl: 'partials/rsvp',
        controller: 'RsvpCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

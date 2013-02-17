/*global angular*/

'use strict';

var weddingApp = angular.module('weddingApp', ['$strap.directives'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/ourstory', {
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
      .when('/rsvp/thanks', {
        templateUrl: 'partials/rsvp-thanks',
        controller: 'RsvpCtrl'
      })
      .otherwise({
        redirectTo: '/ourstory'
      });
  }]);

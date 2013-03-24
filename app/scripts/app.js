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
      .when('/rsvp/going', {
        templateUrl: 'partials/rsvp-going',
        controller: 'RsvpCtrl'
      })
      .when('/rsvp/notgoing', {
        templateUrl: 'partials/rsvp-notgoing',
        controller: 'RsvpCtrl'
      })
      .when('/error', {
        templateUrl: 'partials/error',
        controller: 'ErrorCtrl'
      })
      .otherwise({
        redirectTo: '/rsvp'
      });
  }]);

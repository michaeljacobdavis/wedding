/*global angular*/

'use strict';

var weddingApp = angular.module('weddingApp', ['$strap.directives'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/thankyou', {
        templateUrl: 'partials/thankyou',
        controller: 'ThankYouCtrl'
      })
      .otherwise({
        redirectTo: '/thankyou'
      });
  }]);

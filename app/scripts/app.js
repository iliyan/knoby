'use strict';

/**
 * @ngdoc overview
 * @name knobyApp
 * @description
 * # knobyApp
 *
 * Main module of the application.
 */
angular
  .module('knobyApp', [
    'knoby.lodash',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$routeProvider',
    function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    }]);

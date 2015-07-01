'use strict';

/**
 * @ngdoc function
 * @name knobyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the knobyApp
 */
angular.module('knobyApp')
  .controller('AboutCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

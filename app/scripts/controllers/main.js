'use strict';

/**
 * @ngdoc function
 * @name knobyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the knobyApp
 */
angular.module('knobyApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

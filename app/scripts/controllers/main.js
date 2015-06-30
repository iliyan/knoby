'use strict';

/**
 * @ngdoc function
 * @name lucieApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lucieApp
 */
angular.module('lucieApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

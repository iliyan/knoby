'use strict';

/**
 * @ngdoc function
 * @name lucieApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the lucieApp
 */
angular.module('lucieApp')
  .controller('AboutCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

'use strict';

/**
 * @ngdoc directive
 * @name knobyApp.directive:knobWorld
 * @description
 * # knobWorld
 */
angular.module('knobyApp')
  .directive('knobWorld', [function () {

    return {
      scope: {
        knobs: '=?'
      },
      type: 'svg',
      templateNamespace: 'svg',
      templateUrl: 'views/knob-world.html',
      transclude: true,
      replace: true,
      controller: ['$scope', function ($scope) {
        var scope = $scope.$parent; // isolate scope -> parent inherits the enclosing (world)?
        scope.knobs = scope.knobs || [];
        this.knobs = function (x, y) {
          $scope.$parent.knobs.push([x, y]);
        }
      }]
    }
  }]);

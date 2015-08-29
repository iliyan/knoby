'use strict';

/**
 * @ngdoc directive
 * @name knobyApp.directive:knobGenerator
 * @description
 * # knobGenerator
 */
angular.module('knobyApp')
  .directive('knob', function () {
    return {
      scope: {
        x: '=',
        y: '='
      },
      templateUrl: 'views/knob.html',
      type: 'svg',
      transclude: 'element',
      templateNamespace: 'svg',
      restrict: 'AE',
      replace: true,
      controllerAs: 'ctrl',
      controller: ['$scope', '$element', '$attrs', '$transclude', '$scope',
        function ($scope, $element, $attrs, $transclude, world) {
          this.knob = function knob(x, y) {
            $scope.knobs.push([x,y]);
          }
        }
      ]
    };
  })
  .directive('knobGenerator', function () {

    return {
      scope: {
        x: '=',
        y: '='
      },
      templateUrl: 'views/knob-generator.html',
      type: 'svg',
      templateNamespace: 'svg',
      restrict: 'AE',
      replace: true,
      require: '^knobWorld',
      link: function link(scope, iElement, iAttrs, world, transcludeFn) {
        scope.spi = {};
        scope.spi.onDragEndCallback = function onDragEnd(x, y) {
          scope.$apply(function(){
            world.knobs(x,y);
          });
        }
        return;
      },
      controllerAs: 'ctrl',
      controller: ['$scope', '$element', '$attrs', '$transclude',
        function ($scope, $element, $attrs, $transclude, world) {
        }
      ]
    };

  });

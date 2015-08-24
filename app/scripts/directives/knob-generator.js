'use strict';

/**
 * @ngdoc directive
 * @name knobyApp.directive:knobGenerator
 * @description
 * # knobGenerator
 */
angular.module('knobyApp')
  .directive('knobGenerator', function () {

    function postLink(scope, element, attrs, knobWorld) {
      scope.isProcreating = scope.isProcreating || false;
      scope.onDragEnd = function (x, y) {
        console.log(x, y);


      }

    }

    return {
      scope: {
        x : '=x',
        y : '=y'
      },
      templateUrl: 'views/knob-generator.html',
      type:'svg',
      templateNamespace:'svg',
      restrict: 'AE',
      replace: true,
      require: '^knobWorld',
      compile: function(tElement, tAttrs, transclude) {
        return {
          pre: function preLink(scope, iElement, iAttrs, controller) {
            return;
          },
          post: postLink
        };
      }
    };
  });

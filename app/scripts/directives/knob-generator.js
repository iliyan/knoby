'use strict';

/**
 * @ngdoc directive
 * @name knobyApp.directive:knobGenerator
 * @description
 * # knobGenerator
 */
angular.module('knobyApp')
  .directive('knobGenerator', function () {
    return {
      scope: {
        x : '=x',
        y : '=y'
      },
      templateUrl: 'views/knob-generator.html',
      templateNamespace:'svg',
      restrict: 'E',
      replace: true,
      require: '^knobWorld'
      //link: function postLink(scope, element, attrs) {
      //  element.text('this is the knobGenerator directive');
      //}
    };
  });

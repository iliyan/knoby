'use strict';

/**
 * @ngdoc directive
 * @name knobyApp.directive:knobWorld
 * @description
 * # knobWorld
 */
angular.module('knobyApp')
  .directive('knobWorld', function () {
    return {
      scope: {},
      template: '<svg version="1.1" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="overflow: hidden; position: relative;" ng-transclude></svg>',
      templateNamespace:'svg',
      transclude: true,
      restrict: 'E'
      //link: function postLink(scope, element, attrs) {
      //  element.text('this is the knobWorld directive');
      //}
    };
  });

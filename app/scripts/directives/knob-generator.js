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
      scope: {},
      template: '<circle class="kby-factory"></circle>',
      templateNamespace:'svg',
      restrict: 'E',
      replace: true,
      require: '^knobWorld'
      //link: function postLink(scope, element, attrs) {
      //  element.text('this is the knobGenerator directive');
      //}
    };
  });

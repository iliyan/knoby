'use strict';

angular
  .module('knoby.d3', [])
  .run(['d3', angular.noop])
  .service('d3', ['$window',
    function ($window) {
      var original = $window.d3;
      //$window.d3 = undefined;
      return original;
    }]);

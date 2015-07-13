'use strict';

angular
  .module('knoby.hammer', [])
  .run(['hammer', angular.noop])
  .service('hammer', ['$window',
    function ($window) {
      var original = $window.Hammer;
      delete($window.Hammer);
      return original;
    }]);

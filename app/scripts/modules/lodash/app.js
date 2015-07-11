'use strict';

angular
  .module('knoby.lodash', [])
  .run(['lodash', angular.noop])
  .service('lodash', ['$window',
    function ($window) {
      var original = $window._;
      delete( $window._ );
      return original;
    }]);

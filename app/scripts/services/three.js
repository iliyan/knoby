'use strict';

/**
 * @ngdoc service
 * @name knobyApp.three
 * @description
 * # three
 * Factory in the knobyApp.
 */
angular.module('knobyApp')
  .factory('three', ['$document', '$q', '$window',
    function ($document, $q, $window) {
      var d = $q.defer();
      $document.ready(function () {
        d.resolve($window.THREE);
      });
      return d.promise;
    }]);

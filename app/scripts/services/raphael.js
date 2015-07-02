'use strict';

/**
 * @ngdoc service
 * @name knobyApp.raphael
 * @description
 * # raphael
 * Factory in the knobyApp.
 */
angular.module('knobyApp')
  .factory('raphael', ['$document', '$q', '$window',
    function ($document, $q, $window) {
      var d = $q.defer();
      $document.ready(function () {
        d.resolve($window.Raphael);
      });
      return d.promise;
    }]);

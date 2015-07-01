'use strict';

angular.module('knobyApp')
  .factory('d3', ['$document', '$q', '$window',
    function ($document, $q, $window) {
      var d = $q.defer();
      $document.ready(function () {
        d.resolve($window.d3);
      });
      return d.promise;
    }]);

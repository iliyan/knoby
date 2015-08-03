'use strict';

/**
 * @ngdoc directive
 * @name knobyApp.directive:draggable
 * @description
 * # draggable
 */
angular.module('knobyApp')
  .directive('draggable', ['$document', function ($document) {
    return function (scope, element, attr) {
      var startX = 0, startY = 0;
      var clazz;
      var tranformation;
      element.on('mousedown', function (event) {
        // Prevent default dragging of selected content
        event.preventDefault();
        tranformation = element.attr("transform").slice(7,-1).split(' ');
        for(var i=0; i<tranformation.length; i++) {
          tranformation[i] = parseFloat(tranformation[i]);
        }

        scope.isProcreating = true;
        startX = event.screenX - tranformation[4];
        startY = event.screenY - tranformation[5];

        clazz = element.attr('class');
        element.attr('class', 'dragging');

        $document.on('mousemove', mousemove);
        $document.on('mouseup', mouseup);
      });

      function mousemove(event) {

        tranformation[4] = event.screenX - startX;
        tranformation[5] = event.screenY - startY;

        var moved = "matrix(" + tranformation.join(' ') + ")";
        element.attr("transform", moved);

      }

      function mouseup() {
        scope.isProcreating = false;
        element.attr('class', clazz);
        $document.off('mousemove', mousemove);
        $document.off('mouseup', mouseup);
      }
    };
  }]);

'use strict';

/**
 * @ngdoc directive
 * @name knobyApp.directive:draggable
 * @description
 * # draggable
 */
angular.module('knobyApp')
  .directive('draggable', ['$document', 'd3', function ($document, d3) {
    return {
      scope: {
        onDragEnd : '&'
      },
      link: function (scope, element, attr) {

        function dragstart(d) {
          d.transform = d3.select(this).attr("transform").slice(7,-1).split(' ').map(parseFloat);
          d.transform0 = d3.select(this).attr("transform").slice(7,-1).split(' ').map(parseFloat);
        }

        function dragend(d) {
          d3.select(this).attr("transform", "matrix(" + d.transform0.join(' ') + ")");
          scope.onDragEnd({x: d.transform[4], y: d.transform[5]});
        }

        function dragmove(d) {
          d.transform[4] = d3.event.x;
          d.transform[5] = d3.event.y;
          d3.select(this).attr("transform", "matrix(" + d.transform.join(' ') + ")");
        }

        var drag = d3.behavior
          .drag()
          .on("dragstart", dragstart)
          .on("drag", dragmove)
          .on("dragend", dragend);

        d3.select(element[0])
          .datum([{}])
          .call(drag);
      }
    };
  }]);

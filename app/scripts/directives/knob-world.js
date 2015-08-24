'use strict';

/**
 * @ngdoc directive
 * @name knobyApp.directive:knobWorld
 * @description
 * # knobWorld
 */
angular.module('knobyApp')
  .directive('knobWorld', ['d3', function (d3) {

    function postLink(scope, element, attrs) {
      //d3.select(element[0]).append("svg")
      //  .attr("width", "100%")
      //  .attr("height", "100%");
    }

    //return {
    //  scope: {
    //  },
    //  //template:"<div></div>",
    //  template: '<svg version="1.1" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="overflow: hidden; position: relative;" ng-transclude></svg>',
    //  templateNamespace:'svg',
    //  transclude: true,
    //  replace: true,
    //  restrict: 'E',
    //  compile: function(){
    //    return postLink;
    //  },
    //  //link: postLink,
    //  controller: ['$scope', function($scope){
    //
    //    $scope.signal = function(){alert('end')};
    //
    //    return {};}]
    //};

    return {
        templateNamespace:'svg',
        template: '<svg ng-transclude version="1.1" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="overflow: hidden; position: relative;"></svg>',
        transclude: true,
        replace: true,
      //link: function (scope, element, attrs) {
      //  d3.select(element[0]).append("svg")
      //    .attr("width", "100%")
      //    .attr("height", "100%")
      //},
      controller: ['$scope', function ($scope) {

        $scope.signal = function () {
          alert('end')
        };
        return {};
      }]
    }
  }]);

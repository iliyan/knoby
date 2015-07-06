'use strict';

/**
 * @ngdoc directive
 * @name knobyApp.directive:simpleCubeScene
 * @description
 * # simpleCubeScene
 */
angular.module('knobyApp')
  .directive('simpleCubeScene', ['three', function (threejs) {
    return {
      template: '<div></div>',
      restrict: 'EA',
      scope: {
        width: '&width',
        height: '&height'
      },
      link: function (scope, element) {

        var current = {width: scope.width() || 1000, height: scope.height() || 1000};

        threejs.then(function (THREE) {

          var scene = new THREE.Scene();
          var camera = new THREE.PerspectiveCamera(35, current.width / current.height, 0.1, 1000);

          var renderer = new THREE.WebGLRenderer({ antialias: true });
          renderer.setPixelRatio( window.devicePixelRatio );

                    //renderer.setSize(current.width, current.height);
          element.append(renderer.domElement);

          var geometry = new THREE.BoxGeometry(1, 1, 1);
          var material = new THREE.MeshBasicMaterial({color: 0x00ee00});
          var cube = new THREE.Mesh(geometry, material);
          scene.add(cube);

          camera.position.z = 5;

          var render = function () {
            requestAnimationFrame(render);

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
          };

          render();

        });
      }
    };
  }]);

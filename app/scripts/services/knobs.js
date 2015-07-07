'use strict';

/**
 * @ngdoc service
 * @name knobyApp.knobs
 * @description
 * # knobs
 * Factory in the knobyApp.
 */
angular.module('knobyApp')
  .factory('knobs', [function () {
    function DragController(view, onStart, onDone) {

      var self = this;
      this.destroy = function () {
        view.undrag();
      };

      this.onMove = function (dx, dy) { // move ...
        this.attr({
          cx: Math.max(self.x + dx, 15),
          cy: Math.max(self.y + dy, 15)
        });
      };

      this.onStart = function () { // start ...
        self.x = this.attr('cx');
        self.y = this.attr('cy');
        onStart.call(this);
      };

      view.drag(this.onMove, this.onStart, function () { // end ...
        this.animate({ms: 800, easing: 'bounce', 'r': 100, 'stroke-width': 10});
        onDone.call(this);
      });
    }

    function HoverController(view, glow) {
      glow.hide();
      view.hover(function () {
        glow.show();
      }, function () {
        glow.hide();
      });

      this.destroy = function () {
        glow.remove();
      };
    }

    function ConditionsFactoryController(view, onNewInstance) {
      if (!view) {
        throw new ReferenceError();
      }
      var self = this;
      this.view = view;
      this.onDragStart = function () {
        var clone = new ConditionsFactoryController(this.clone(), onNewInstance);
      };
      this.onDragEnd = function () {
        self.dragster.destroy();
        self.hoverer.destroy();
        onNewInstance.call(new ConditionController(this));
      };

      this.dragster = new DragController(this.view, this.onDragStart, this.onDragEnd);
      this.glow = view.glow();
      this.hoverer = new HoverController(this.view, this.glow);
    }

    function ConditionController(view) {

    }

    return {
      ConditionsFactoryController: ConditionsFactoryController
    };

  }]);

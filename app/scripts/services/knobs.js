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
        return angular.isFunction(onStart) ? onStart.call(this) : undefined;
      };

      view.drag(this.onMove, this.onStart, function () { // end ...
        this.animate({ms: 800, easing: 'bounce', 'r': 100, 'stroke-width': 10});
        onDone.call(this);
      });
    }

    DragController.prototype = {};
    DragController.prototype.constructor = DragController;


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

    HoverController.prototype = {};
    HoverController.prototype.constructor = HoverController;


    function Factory(clazz) {
      this.clazz = ['kby-factory', clazz].join(' ');
    }

    Factory.prototype = {};
    Factory.prototype.constructor = Factory;
    Factory.prototype.generate = function (Ctor, view, onNewInstance) {
      var instance = new Ctor(view);
      return angular.isFunction(onNewInstance) ? onNewInstance.call(instance) : instance;
    };
    Factory.prototype.attach = function (view, onNewInstance) {
      if (!view) {
        throw new ReferenceError();
      }
      this.view = view;
      angular.element(view.node).attr('class', this.clazz);

      this.glow = view.glow();
      this.hoverer = new HoverController(this.view, this.glow);

      var self = this;
      this.onDragEnd = function () {
        self.dragster.destroy();
        self.hoverer.destroy();
        return self.generate(self.producer, this, onNewInstance);
      };

      this.onDragStart = function () {
        var factory = self.generate(self.constructor, this.clone());
        angular.element(this.node).attr('class', '');
        return factory;
      };
      this.dragster = new DragController(this.view, self.onDragStart, self.onDragEnd);
    };


    function ConditionsFactoryController(view, onNewInstance) {
      this.attach(view, onNewInstance);
    }

    ConditionsFactoryController.prototype = new Factory('kby-condition');
    ConditionsFactoryController.prototype.constructor = ConditionsFactoryController;
    ConditionsFactoryController.prototype.producer = ConditionController;


    function CommandsFactoryController(view, onNewInstance) {
      this.attach(view, onNewInstance);
    }

    CommandsFactoryController.prototype = new Factory('kby-command');
    CommandsFactoryController.prototype.constructor = CommandsFactoryController;
    CommandsFactoryController.prototype.producer = CommandController;


    function DestinationsFactoryController(view, onNewInstance) {
      this.attach(view, onNewInstance);
    }

    DestinationsFactoryController.prototype = new Factory('kby-destination');
    DestinationsFactoryController.prototype.constructor = DestinationsFactoryController;
    DestinationsFactoryController.prototype.producer = DestinationController;


    function KnobController(clazz) {
      this.clazz = [this.clazz, clazz].join(' ');
    }

    KnobController.prototype = {clazz: 'kby-knob'};
    KnobController.prototype.constructor = KnobController;
    KnobController.prototype.adder = function (newClass) {
      var oldClass = angular.element(this.view.node).attr('class');

      // NOTE: addClass/removeClass don't work with SVGElement (by DOM design.
      // See http://stackoverflow.com/questions/8638621/jquery-svg-why-cant-i-addclass)
      angular.element(this.view.node).attr('class', [oldClass, newClass].join(' '));

      var self = this;
      this.view.undblclick();
      this.view.dblclick(function () {
        self.remover.call(self, 'adjustable');
      });
    };

    // element.classList property?
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

    KnobController.prototype.remover = function (newClass) {
      var oldClass = angular.element(this.view.node).attr('class');

      // NOTE: addClass/removeClass don't work with SVGElement (by DOM design.
      // See http://stackoverflow.com/questions/8638621/jquery-svg-why-cant-i-addclass)
      angular.element(this.view.node).attr('class', oldClass.replace(newClass, ''));

      var self = this;
      this.view.undblclick();
      this.view.dblclick(function () {
        self.adder.call(self, 'adjustable');
      });
    };

    KnobController.prototype.attach = function (view) {
      if (!view) {
        throw new ReferenceError();
      }
      this.view = view;
      angular.element(view.node).attr('class', this.clazz);

      var self = this;
      this.view.dblclick(function () {
        self.adder.call(self, 'adjustable');
      });
    };


    function ConditionController(view) {
      this.attach(view);
    }

    ConditionController.prototype = new KnobController('kby-condition');
    ConditionController.prototype.constructor = ConditionController;


    function CommandController(view) {
      this.attach(view);
    }

    CommandController.prototype = new KnobController('kby-command');
    CommandController.prototype.constructor = CommandController;


    function DestinationController(view) {
      this.attach(view);
    }

    DestinationController.prototype = new KnobController('kby-destination');
    DestinationController.prototype.constructor = DestinationController;


    return {
      ConditionsFactoryController: ConditionsFactoryController,
      CommandsFactoryController: CommandsFactoryController,
      DestinationsFactoryController: DestinationsFactoryController
    };

  }]);

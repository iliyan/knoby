'use strict';

/**
 * @ngdoc service
 * @name knobyApp.knobs
 * @description
 * # knobs
 * Factory in the knobyApp.
 */
angular.module('knobyApp')
  .factory('knobs', ['lodash', function (_) {
    function DragController(view, onStart, onDone) {

      var self = this;
      this.destroy = function () {
        view.undrag();
      };

      this.onMove = function (dx, dy) { // move ...
        this.transform(self.t+'T'+dx+','+dy);
      };

      this.onStart = function () { // start ...
        self.t = this.transform();
        return angular.isFunction(onStart) ? onStart.call(this): undefined;
      };

      view.drag(this.onMove, this.onStart, function () { // end ...
        self.t = this.transform();
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

    KnobController.prototype.toggler = function (newClass) {
      var self = this;
      self.view.node.classList.toggle(newClass);
      self.view.undblclick();
      self.view.dblclick(function () {
        self.toggler.call(self, newClass);
      });
    };

    KnobController.prototype.attach = function (view) {
      if (!view) {
        throw new ReferenceError();
      }
      var self = this;
      self.view = view;
      angular.element(self.view.node).attr('class', self.clazz);
      self.view.node.classList.add('adjustable');
      self.toggler('adjustable');


      self.onDragEnd = function () {
        this.animate({"opacity": 1}, 500);
      };

      self.onDragStart = function () {
        this.animate( {"opacity":0.1}, 500);
      };

      self.dragster = new DragController(self.view, self.onDragStart, self.onDragEnd);
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

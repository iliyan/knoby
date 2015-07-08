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


    function ConditionController(view) {
      if (!view) {
        throw new ReferenceError();
      }
      this.view = view;
      angular.element(view.node).attr('class', 'kby-condition');
    }
    ConditionController.prototype = {clazz: 'kby-condition'};
    ConditionController.prototype.constructor = ConditionController;


    function CommandController(view) {
      if (!view) {
        throw new ReferenceError();
      }
      this.view = view;
      angular.element(view.node).attr('class', 'kby-command');
    }
    CommandController.prototype = {clazz: 'kby-command'};
    CommandController.prototype.constructor = CommandController;


    function DestinationController(view) {
      if (!view) {
        throw new ReferenceError();
      }
      this.view = view;
      angular.element(view.node).attr('class', 'kby-destination');
    }
    DestinationController.prototype = {clazz: 'kby-destination'};
    DestinationController.prototype.constructor = DestinationController;


    return {
      ConditionsFactoryController: ConditionsFactoryController,
      CommandsFactoryController: CommandsFactoryController,
      DestinationsFactoryController: DestinationsFactoryController
    };

  }]);

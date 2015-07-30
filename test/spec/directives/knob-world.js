'use strict';

describe('Directive: knobWorld', function () {

  // load the directive's module
  beforeEach(module('knobyApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<knob-world></knob-world>');
    element = $compile(element)(scope);
    expect(element.find('svg').length).toBe(1);
  }));
});

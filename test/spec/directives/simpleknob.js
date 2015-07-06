'use strict';

describe('Directive: simpleKnob', function () {

  // load the directive's module
  beforeEach(module('knobyApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<simple-knob></simple-knob>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('');
  }));
});

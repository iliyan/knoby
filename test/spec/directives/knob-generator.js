'use strict';

describe('Directive: knobGenerator', function () {

  // load the directive's module
  beforeEach(module('knobyApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<knob-generator></knob-generator>');
    element = $compile(element)(scope);
    expect(element.length).toBe(1);
    expect(element[0].nodeName).toBe('circle');
  }));
});

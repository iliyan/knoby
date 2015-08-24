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
    element = $compile(angular.element('<knob-generator></knob-generator>'))(scope);
    console.log(element.html());
    expect(element.find('circle').length).toBe(1);
  }));
});

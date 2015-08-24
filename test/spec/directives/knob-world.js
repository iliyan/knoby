'use strict';

describe('Directive: knobWorld', function () {

  // load the directive's module
  beforeEach(module('knobyApp'));

  var scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    var element = $compile("<knob-world></knob-world>")(scope);
    scope.$digest();
    expect(element[0].nodeName).toBe('svg');
  }));
});

'use strict';

describe('Directive: knobGenerator', function () {

  // load the directive's module
  beforeEach(module('knobyApp'));
  beforeEach(module('knoby.templates'));

  var
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    var element = $compile("<knob-world><knob-generator></knob-generator></knob-world>")(scope);
    scope.$digest();
    expect(element.find('circle').length).toBe(1);
  }));


});

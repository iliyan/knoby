'use strict';

describe('Directive: draggable', function () {

  // load the directive's module
  beforeEach(module('knobyApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<circle draggable></circle>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('');
  }));
});

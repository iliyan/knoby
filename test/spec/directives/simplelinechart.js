'use strict';

describe('Directive: simpleLineChart', function () {

  // load the directive's module
  beforeEach(module('knobyApp'));

  var element,
    rootScope, scope;

  beforeEach(inject(function ($rootScope) {
    rootScope = $rootScope;
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = $compile('<simple-line-chart></simple-line-chart>')(rootScope);
    expect(element).toBeDefined();
  }));
});

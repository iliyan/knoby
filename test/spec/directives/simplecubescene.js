'use strict';

describe('Directive: simpleCubeScene', function () {

  // load the directive's module
  beforeEach(module('knobyApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<div simple-cube-scene><div>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.html()).toContain('<div>');
  }));
});

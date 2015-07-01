'use strict';

/* global describe, beforeEach, it, expect, inject, module */

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('knobyApp'));

  var AboutCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AboutCtrl).toBeDefined();
    expect(scope.awesomeThings.length).toBe(3);
  });
});

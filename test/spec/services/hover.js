'use strict';

describe('Service: hover', function () {

  // load the service's module
  beforeEach(module('knobyApp'));

  // instantiate service
  var knobs;
  beforeEach(inject(function (_knobs_) {
    knobs = _knobs_;
  }));

  it('should be defined', function () {
    expect(!!knobs).toBe(true);
  });

  it('should be be a promise', function () {
    var dragster = new knobs.createHoverController({glow: angular.noop, hover: angular.noop});

    expect(dragster).toBeDefined();
  });

});

'use strict';

describe('Service: drag', function () {

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
    var dragster = new knobs.createDragController({drag: angular.noop});

    expect(knobs).toBeDefined();
  });

});

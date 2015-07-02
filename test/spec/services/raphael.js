'use strict';

describe('Service: raphael', function () {

  // load the service's module
  beforeEach(module('knobyApp'));

  // instantiate service
  var raphael;
  beforeEach(inject(function (_raphael_) {
    raphael = _raphael_;
  }));

  it('should be defined', function () {
    expect(!!raphael).toBe(true);
  });

  it('should be be a promise', function () {
    expect(raphael.then).toBeDefined();
  });

});

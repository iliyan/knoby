'use strict';

describe('Service: d3', function () {

  // load the service's module
  beforeEach(module('lucieApp'));

  // instantiate service
  var d3;
  beforeEach(inject(function (_d3Service_) {
    d3 = _d3_;
  }));

  it('should do something', function () {
    expect(!!d3).toBe(true);
  });

});

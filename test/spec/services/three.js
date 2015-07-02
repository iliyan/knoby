'use strict';

describe('Service: three', function () {

  // load the service's module
  beforeEach(module('knobyApp'));

  // instantiate service
  var three;
  beforeEach(inject(function (_three_) {
    three = _three_;
  }));

  it('should do something', function () {
    expect(!!three).toBe(true);
  });

});

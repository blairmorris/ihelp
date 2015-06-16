'use strict';

describe('Service: question', function () {

  // load the service's module
  beforeEach(module('ihelpApp'));

  // instantiate service
  var question;
  beforeEach(inject(function (_Question_) {
    question = _Question_;
  }));

  it('should do something', function () {
    expect(!!question).toBe(true);
  });

});

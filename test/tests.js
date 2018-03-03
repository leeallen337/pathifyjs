var expect = require('chai').expect;
var faker = require('faker');
var pathifyjs = require('../index');

describe('pathifyjs', function() {
  context('when there is no configuration object', function() {
    it('returns the url that was passed in with no modifications', function() {
      expect(pathifyjs('/abcd')).to.equal('/abcd');
      expect(pathifyjs('/abc/ab')).to.equal('/abc/ab');
      expect(pathifyjs('/ab/:id')).to.equal('/ab/:id');
    });
  });

  context('when there is a configuration object', function() {
    var randomId;
    var randomParam;

    beforeEach(function() {
      randomId = faker.random.number({ min: 1, max: 100 });
      randomParam = faker.lorem.word();
    });

    it('returns the url with the parameters replaced with the given values', function() {
      expect(pathifyjs('/abc/:id', { id: randomId }))
        .to.equal(`/abc/${randomId}`);
      expect(pathifyjs('/abc/:id/nested/:param', { id: randomId, param: randomParam }))
        .to.equal(`/abc/${randomId}/nested/${randomParam}`);
    });
  });
});

var server = require('../lib/server')
  , request = require('supertest')
  , api = request(server);

describe('component-server', function() {
  it('should be able to serve the example repo\'s component.json', function(done) {
    api
      .get('/example/foo/master/component.json')
      .expect(200)
      .end(done);
  });

  it('should be able to proxy unknown components through to github', function(done) {
    api
      .get('/component/tip/master/component.json')
      .expect(200)
      .end(done);
  });
})
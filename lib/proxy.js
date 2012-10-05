var request = require('superagent');

module.exports = function(req, res) {
  var proxy = request
    .get('https://raw.github.com' + req.path)

  if (process.env.GH_USERNAME && process.env.GH_PASSWORD) {
    proxy.auth(process.env.GH_USERNAME, process.env.GH_PASSWORD);
  }

  proxy
    .end(function(r) {
      res.send(r.statusCode, r.body);
    });
}
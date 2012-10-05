var request = require('superagent');

module.exports = function(req, res) {
  request
    .get('https://raw.github.com/' + request.path)
    .pipe(res);
}
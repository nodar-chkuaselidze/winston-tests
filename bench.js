'use strict';

var stream = require('./stream'),
    file = require('./plainFile');

if (typeof(suite) == 'undefined') {
  console.error('Run with matcha');
  return;
}

suite('Stream loggin vs File loggin', function () {
  bench('Plain File', function (done) {
    file.logger.info('some small info', done);
  });

  bench('Streaming', function (done) {
    stream.logger.info('some small info', done);
  });
});

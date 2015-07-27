'use strict';

var stream = require('./stream'),
    file = require('./plainFile'),
    rotate = require('./logRotateFile'),
    data = 'some small info';

if (typeof(suite) == 'undefined') {
  console.error('Run with matcha');
  return;
}

suite('Stream loggin vs File loggin', function () {
  bench('Streaming', function (done) {
    stream.logger.info(data, done);
  });

  bench('Plain File', function (done) {
    file.logger.info(data, done);
  });

  bench('Log Rotate', function (done) {
    rotate.logger.info(data, done);
  });

});

'use strict';

function formatter(options) {
  return options.level + ':' + options.message + ' - ' + Date.now();
}

var winston = require('winston'),
  logger = new (winston.Logger)({
    transports : [
      new (winston.transports.File)({
        filename : 'testFile.log',
        formatter : formatter,
        json : false
      })
    ]
  });

exports.logger = logger;

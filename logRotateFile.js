'use strict';

function formatter(options) {
  return options.level + ':' + options.message + ' - ' + Date.now();
}

var winston = require('winston'),
  logger = new (winston.Logger)({
    transports : [
      new (winston.transports.DailyRotateFile)({
        filename : 'testFileRotate.log',
        datePattern : '.mm',
        formatter : formatter,
        json : false
      })
    ]
  });

exports.logger = logger;

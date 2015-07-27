'use strict';

function formatter(options) {
  return options.level + ':' + options.message + ' - ' + Date.now();
}

var fs = require('fs'),
   winston = require('winston'),
   writeStream = fs.createWriteStream('testStream.log'),
   logger = new (winston.Logger)({
     transports : [
       new (winston.transports.File)({
         stream : writeStream,
         formatter : formatter,
         json : false,
       })
     ]
   });

exports.logger = logger;

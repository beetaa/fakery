var _ = require('underscore');

function Fakery() {
  this.name = 'Fake Data Provider';
  this.version = '0.0.1';
  
  this.cn = require('./lib/_cn_.js');
  this.en = require('./lib/_en_.js');
  this.code = require('./lib/_code_.js');
  this.math = require('./lib/_math_.js');
  this.time = require('./lib/_time_.js');
  this.item = require('./lib/_item_.js');
}

exports = module.exports = new Fakery();
exports.Fakery = Fakery;
var _ = require('underscore');
var should = require('should');

var F = require('../index.js');

describe('测试 time 模块', function() {
  
  var date = new Date();
  var now = {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
  
  describe('# birthday(_age) 函数', function() {
    
    it('结果应当是毫秒数', function() {
      F.time.birthday().should.be.a.Number;
    });
    it('生日年份应当等于当前年份与年龄的差额', function() {
      var _age = _.random(1, 100);
      var birth_date = new Date(F.time.birthday(_age));
      birth_date.getFullYear().should.be.equal(now.year - _age);
    });
  });
  
  describe('# years(_diff) 函数', function() {
    
    var _diff = _.random(1, 100);
    var result = F.time.years(_diff);
    var date_ago = new Date(result.ago);
    var date_later = new Date(result.later);
    
    it('结果应当是一个 json', function() {
      F.time.years().should.be.a.json;
      result.should.be.a.json;
    });
    it('结果应当包含 ago 和 later 两个属性', function() {
      result.should.have.properties(['ago', 'later']);
    });
    it('ago 和 later 都是毫秒数', function() {
      result.ago.should.be.a.Number;
      result.later.should.be.a.Number;
    });
    it('返回的年份应当是当前年份与_diff的差额', function() {
      date_ago.getFullYear().should.be.equal(now.year - _diff);
      date_later.getFullYear().should.be.equal(now.year + _diff);
    });
  });
  
  describe('# days(_diff) 函数', function() {
    
    var _diff = _.random(1, 365);
    var result = F.time.days(_diff);
    
    it('结果应当是一个 json', function() {
      F.time.days().should.be.a.json;
      result.should.be.a.json;
    });
    it('ago 和 later 应该是数值', function() {
      result.ago.should.be.a.Number;
      result.later.should.be.a.Number;
    });
    it('差异应该在 1～365 天的毫秒数之间', function() {
      var DAY = 1000 * 60 * 60 * 24;
      var NOW = Date.now();
      result.ago.should.be.within(NOW - DAY*365, NOW - DAY*0.9);
      result.later.should.be.within(NOW + DAY*0.9, NOW + DAY*365);
    });
  });
});









var _ = require('underscore');
var should = require('should');

var F = require('../index.js');

describe('测试 Q 模块', function() {
  
  describe('# single() 单项选择题', function() {
    
    var single = F.Q.single();
    
    it('结果应该是 json', function() {
      single.should.be.a.json;
    });
    it('题干应该是一个字符串，且长度为 6～105', function() {
      single.main.should.be.a.String;
      single.main.length.should.be.within(6, 105);
    });
    it('题目应该有 4～6 个选项，每个选项长度为 2～15', function() {
      single.options.length.should.be.within(4, 6);
      _.each(single.options, function(option) {
        option.title.length.should.be.within(2, 15);
      });
    });
  });
});
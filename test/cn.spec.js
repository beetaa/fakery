var _ = require('underscore');
var should = require('should');

var F = require('../index.js');

describe('测试 CN 模块：', function() {
  
  describe('# word(_len) 函数', function() {
    
    it('缺省情况下，返回词的长度应为 2~5 之间', function() {
      F.cn.word().length.should.be.within(2, 5);
    });
    it('传入参数 5，返回词的长度应为 5', function() {
      F.cn.word(5).should.have.length(5);
    });
  });
  
  describe('# setence() 函数', function() {
    
    var sentence = F.cn.sentence();
    it('结果应当是字符串', function() {
      sentence.should.be.a.Sting;
    });
    it('每句话的字符数量应当在 6～105 之间', function() {
      sentence.length.should.be.within(6, 105);
    });
    it('每句话应当以 [？！。] 之一结尾', function() {
      sentence.should.match(/^\S+[。？！]$/);
    });
  });
  
  describe('# paragraph() 函数', function() {
    
    var paragraph = F.cn.paragraph();
    it('结果应当是字符串', function() {
      paragraph.should.be.a.Sting;
    });
    it('每段话的字符数量应当在 12～2100 之间', function() {
      paragraph.length.should.be.within(12, 2100);
    });
    it('每段话应当以 [？！。] 之一结尾', function() {
      paragraph.should.match(/^\S+[。？！]$/);
    });
  });
  
  describe('# article() 函数', function() {
    
    var article = F.cn.article();
    it('结果应当是字符串', function() {
      article.should.be.a.Sting;
    });
    it('每篇文章的字数应当在 24～42000 之间', function() {
      article.length.should.be.within(24, 42000);
    });
    it('每篇文章应当以 [？！。] 之一结尾', function() {
      article.should.match(/^\S+[。？！]$/);
    });
  });
  
  describe('# tags(_count) 函数', function() {
    
    it('标签列表应当是数组', function() {
      F.cn.tags().should.be.a.Array;
    });
    it('默认返回 2 个标签', function() {
      F.cn.tags().should.have.length(2);
    });
    it('返回标签的数量应当与 _count 参数一致', function() {
      var _count = _.random(1, 15);
      F.cn.tags(_count).should.have.length(_count);
    });
    it('每个标签的长度应为 2～4 个字符', function() {
      _.sample(F.cn.tags()).length.should.be.within(2, 4);
    });
  });
  
  describe('# name() 函数', function() {
    
    it('姓名应该是字符串', function() {
      F.cn.name().should.be.a.String;
    });
    it('姓名的字数应当在 2～3 个', function() {
      F.cn.name().length.should.be.within(2, 3);
    });
  });
});













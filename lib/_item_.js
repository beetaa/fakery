var _ = require('underscore');
var Question = require('./__question__.js');
var Card = require('./__card__.js');
var Lesson = require('./__lesson__.js');

exports = module.exports = {
  
  create: function(_type, subtype) {
    switch (_type) {
      case '题目':
        case '单选':
          return Question.single();
      
      case '卡片':
        //
        
      case '课件':
        //
    }
  }
}
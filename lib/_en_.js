var _ = require('underscore');

var Data = {
  
  "chars": "abcdefghijklmnopqrstuvwxyz",
  "seperators": ",,,,,,,;:",
  "endings": "....?!"
};

exports = module.exports = {
  
  // 词：word(_len)，缺省长度为 3～7 个字符
  word: function(_len) {
    var len = parseInt(arguments[0] ? arguments[0] : _.random(3, 7));
    return _.sample(Data.chars, len).join('');
  },
  
  // 句：sentence()，由 1～5 个半句组成，每个半句由 3～10 个单词组成
  sentence: function() {
    var semi_sentences = [];
    semi_sentences.push(this.tags(_.random(3, 10)).join(' ') + _.sample(Data.endings));
    for(i=0; i<_.random(0, 5); i++) {
        semi_sentences.unshift(this.tags(_.random(3, 10)).join(' ') + _.sample(Data.seperators) + ' ');
    }
    return semi_sentences.join('');
  },
  
  // 段：paragraph(), 由 1～10 句组成
  paragraph: function() {
    var sentences = [];
    for(i=0; i<_.random(1, 10); i++) {
        sentences.push(this.sentence());
    }
    return sentences.join('');
  },
  
  // 文：article()，由 2～20 段组成
  article: function() {
    var paragraphs = [];
    for (i=0; i<_.random(2, 20); i++) {
        paragraphs.push(this.paragraph());
    }
    return paragraphs.join('<br/>');
  },
  
  // 标签数组：tags(_count)，缺省为 2 个标签，每个标签一个单词
  tags: function(_count) {
    var count = parseInt(arguments[0] ? arguments[0] : 2);
    var tags = [];
    for (var i=0; i<count; i++) tags.push(this.word());
    return tags;
  },
  
  // 姓名：name()
  name: function() {
    
    return this.tags().join(' ');
  }

}














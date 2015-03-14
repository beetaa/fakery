var _ = require('underscore');
var CN = require('./_cn_.js');

exports = module.exports = {
  
  /** single() 生成一条单项选择题
  结构如下：
  {
    main: 一句话,
    options: [{  4～6个选项
      order: 1~6,
      option: 2~15个字符
      answer: true或false（单选题只有一个为true）
    }]
  }
  */
  single: function() {
    var item = {
      main: CN.sentence(),
      options: []
    };
    var option_count = _.random(4, 6);
    var answer_index = _.sample(_.range(option_count));
    for (var i=0; i<option_count; i++) {
      item.options.push({
        order: i + 1,
        title: CN.word(_.random(2, 15)),
        answer: answer_index == i ? true : false
      });
    }
    return item;
  }
}
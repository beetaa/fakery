var _ = require('underscore');

exports = module.exports = {
  
  // ratio(_rate)，根据概率返回布尔值，_rate 是一个形式为 '20%' 的字符串
  ratio: function(_rate) {
    return Number(_rate.split('%')[0]) > _.random(1, 100) ? true : false;
  }

}














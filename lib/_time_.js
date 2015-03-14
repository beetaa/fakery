var _ = require('underscore');

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const MONTH = DAY * 30;
const YEAR = MONTH * 12;

exports = module.exports = {
  
  // 根据年龄返回随机的生日（毫秒数），缺省为 15 岁
  birthday: function(_age) {
    var age = parseInt(arguments[0] ? arguments[0] : _.random(1, 100));
    var date = new Date();
    var year = date.getFullYear() - age;
    return date.setFullYear(year, _.random(0, 11), _.random(1, 28));
  },
  
  // years(_diff).ago 或 years(_diff).later（毫秒数）
  years: function(_diff) {
    var diff = parseInt(arguments[0] ? arguments[0] : _.random(1, 100));
    var current_year = new Date().getFullYear();
    return {
      ago: new Date().setFullYear(current_year - diff, _.random(0, 11), _.random(1, 28)),
      later: new Date().setFullYear(current_year + diff, _.random(0, 11), _.random(1, 28))
    };
  },
  
  // days(_diff).ago 或 days(_diff).later （毫秒数）
  days: function(_diff) {
    var diff = parseInt(arguments[0] ? arguments[0] : _.random(1, 365));
    var now = Date.now();
    return {
      ago: now - DAY * diff,
      later: now + DAY * diff
    }
  }

}














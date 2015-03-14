var _ = require('underscore');

exports = module.exports = {
  
  // 数字串，缺省长度为 1
  digits: function(_len) {
    var len = parseInt(arguments[0] ? arguments[0] : 1);
    return _.sample('0123456789', len).join('');
  }

}














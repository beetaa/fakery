var _ = require('underscore');

var Data = {
  
  "seperators": "，，，：；、",
  "endings": "。。。。？！",
  "chars": "的一是在不了有和人这中大为上个国我以要他时来用们生到作地于出就分对成会可主发年动同工也能下过子说产种面而方后多定行学法所民得经十三之进着等部度家电力里如水化高自二理起小物现实加量都两体制机当使点从业本去把性好应开它合还因由其些然前外天政四日那社义事平形相全表间样与关各重新线内数正心反你明看原又么利比或但质气第向道命此变条只没结解问意建月公无系军很情者最立代想已通并提直题党程展五果料象员革位入常文总次品式活设及管特件长求老头基资边流路级少图山统接知较长将组见计别她手角期根论运农指几九区强放决西被干做必战先回则任取据处队南给色光门即保治北造百规热领七海地口东导器压志世金增争济阶油思术极交受联什认六共权收证改清已美再采转更单风切打白教速花带安场身车例真务具万每目至达走积示议声报斗完类八离华名确才科张信马节话米整空元况今集温传土许步群广石记需段研界拉林律叫且究观越织装影算低持音众书布复容儿须际商非验连断深难近矿千周委素技备半办青省列习响约支般史感劳便团往酸历市克何除消构府称太准精值号率族维划选标写存候毛亲快效斯院查江型眼王按格养易置派层片始却专状育厂京识适属圆包火住调满县局照参红细引听该铁价严首底液官德调随苏失尔讲配女黄砂递推显谈罪神艺呢席含企望密批营项防举球英氧势告李台落木帮轮破亚师围注远字材排供河态封另施减树溶怎止案言士均武固叶鱼波视仅费紧爱左章早朝害续轻服试食充兵源判护司足某练差致板田降黑犯负击范继兴似余坚曲输修的故城夫够",
  
  "first_name_chars": "王李张刘陈杨黄赵吴周徐孙马朱胡郭何高林郑谢罗梁宋唐许韩冯邓曹彭曾肖田董袁潘于蒋蔡余杜叶程苏魏吕丁任沈姚卢姜崔钟谭陆汪范金石廖贾夏韦付方白邹孟熊秦邱江尹薛闫段雷侯龙史陶黎贺顾毛郝龚邵万钱严覃武戴莫孔向汤",
  "last_name_chars": "阳成晨辰逸凡洋夜云羽溪伟风峰锋正永辉波涛超强文军明周贵友鹏秀娟英华慧巧美娜静淑惠珠翠雅芝玉萍红娥玲芬芳燕彩春菊兰凤洁梅琳素云莲真环雪荣爱妹霞香月莺媛艳瑞凡佳嘉琼勤珍贞莉桂娣叶璧璐娅琦晶妍茜秋珊莎锦黛青倩婷姣婉娴瑾颖露瑶怡婵雁蓓纨仪荷丹蓉眉君琴蕊薇菁梦岚苑婕馨瑗琰韵融园艺咏卿聪澜纯毓悦昭冰爽琬茗羽希宁欣飘育滢馥筠柔竹霭凝晓欢霄枫芸菲寒伊亚宜可姬舒影荔枝思丽"
};

exports = module.exports = {
  
  // 词：word(_len)，缺省长度 2~5
  word: function(_len) {
    var len = parseInt(arguments[0] ? arguments[0] : _.random(2, 5));
    return _.sample(Data.chars, len).join('');
  },
  
  // 句：sentence()，由 1～5 个半句组成
  sentence: function() {
    var semi_sentences = [];
    semi_sentences.push(_.sample(Data.chars, _.random(5, 20)).join('') + _.sample(Data.endings));
    for(i=0; i<_.random(0, 4); i++) {
        semi_sentences.unshift(_.sample(Data.chars, _.random(5, 20)).join('') + _.sample(Data.seperators));
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
  
  // 标签数组：tags(_count)，缺省为 2 个标签，每个标签长 2～4 个字符
  tags: function(_count) {
    var count = parseInt(arguments[0] ? arguments[0] : 2);
    var tags = [];
    for (var i=0; i<count; i++) tags.push(this.word(_.random(2, 4)));
    return tags;
  },
  
  // 姓名：name()
  name: function() {
    var first_name = _.sample(Data.first_name_chars);
    var last_name = _.sample(Data.last_name_chars, _.random(1, 2)).join('');
    return first_name + last_name;
  }

}














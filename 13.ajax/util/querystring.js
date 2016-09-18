var  querystring=require('querystring');
//querystring可以实现字符串和对象的转换
var input='username==564@password==333';
var obj=querystring.parse(input,'@','==');
console.log(obj);
console.log(querystring.stringify(obj,'@','=='));




console.log(querystring.parse(input,'@','==')); //4个参数：要转换的字符串  分割字符 相等  option














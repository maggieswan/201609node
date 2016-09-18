//这个模块用来解析url字符串
var url=require('url');
//可以把一个字符串转成对象，也可将对象转成字符串
var urlObj= url.parse('http://zfpx:123@localhost:8020/login?username=zfpx&password=123456#top',true); //true 这个位置表示是否把query从字符串转成对象
console.log(urlObj.query.username);
//把对象转换成字符串  json有一个方法叫stringify（）
console.log(JSON.stringify(urlObj));  //把json对象转成json字符串
console.log(url.format(urlObj));//拼出了原始的url地址

















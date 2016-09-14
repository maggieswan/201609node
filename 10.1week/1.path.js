var path=require('path');

 //normalize规范化：
/*
* 1 可以解析.或..
* 2 多个杠可以转成一个杠
* 3 WIN下反杠/转成正杠\
* 4 如果结尾以杠结果的，则保留
* */
console.log(path.normalize('a/../b////c/d/'));
/*
 * /开头表示一个绝对的根路径
 */
console.log(path.resolve('/a','..','b','d'));
/*
* 有两个参数 ，可以写相对路径 也可以是写绝对路径
* */
console.log(path.relative('../9.http',__dirname));














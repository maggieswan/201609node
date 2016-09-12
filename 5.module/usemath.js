/**
 * Created by user on 2016/9/12.
 */

var math1=require('./math.js');
delete require.cache[require.resolve('./math.js')]; //[模块id,也就是这个模块即js文件的绝对路径]
var math2=require('./math.js');
//console.log(require.cache);
console.log(math1.add(1,6));

console.log(require.resolve('./math.js'));









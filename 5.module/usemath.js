/**
 * Created by user on 2016/9/12.
 */

var math1=require('./math.js');
delete require.cache[require.resolve('./math.js')]; //[ģ��id,Ҳ�������ģ�鼴js�ļ��ľ���·��]
var math2=require('./math.js');
//console.log(require.cache);
console.log(math1.add(1,6));

console.log(require.resolve('./math.js'));









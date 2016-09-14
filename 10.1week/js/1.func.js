/*函数也是对象*/
var add =new Function('a','b','return a+b');
console.log(add(1,8));
/*函数也可以用下面的方式来定义,这两种都是语法糖，其实都是上面那样定义的*/
function add(){  }
var add=function(){}
var  fn=function(){}
if(fn.call){
}
console.log(Object.prototype.toString.call(fn));










/**
 * Created by user on 2016/9/9.
 */

var util=require('util');
function Parent(){
this.name="parent";
}
Parent.prototype.say=function(){
    console.log(this.name);

}
function Child(){
    this.name="child";

}
util.inherits(Child,Parent);//两个参数：子构造函数  父构造函数  用这个方法就实现了继承
var child=new Child();
child.say();
console.log(util.inspect(child));

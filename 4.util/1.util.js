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
util.inherits(Child,Parent);//�����������ӹ��캯��  �����캯��  �����������ʵ���˼̳�
var child=new Child();
child.say();
console.log(util.inspect(child));

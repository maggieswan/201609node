/**
 * Created by user on 2016/9/9.
 */
var util=require('util');
var obj=new Object();

obj.name='maggie';
Object.defineProperty(obj,'age',{
    value:120,
    configurable:false,//可配置即可删除
    enumerable:true//可枚举吗
})
delete obj.age;
for(var attr in obj){
console.log(attr);
}

console.log(util.inspect(obj,{
    showHidden:true
}));

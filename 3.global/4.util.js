/**
 * Created by user on 2016/9/9.
 */
var util=require('util');
var obj=new Object();

obj.name='maggie';
Object.defineProperty(obj,'age',{
    value:120,
    configurable:false,//�����ü���ɾ��
    enumerable:true//��ö����
})
delete obj.age;
for(var attr in obj){
console.log(attr);
}

console.log(util.inspect(obj,{
    showHidden:true
}));

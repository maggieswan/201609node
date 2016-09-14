var eventEmitter= require('events');
var util=require('util'); //继承想到uitl****
function Girl(){
this.age=15;
this.name="maggie";
}
util.inherits(Girl,eventEmitter);//子类构造函数，父类构造函数   这样就能实现继承了
var girl=new Girl();
var callback=function () {
    console.log('eat');
}
girl.once('hungry',callback);
girl.removeListener('hungry',callback);
girl.addListener('sad',function(things){
    console.log('buy'+things);
});
girl.emit('hungry');
girl.emit('hungry');
girl.emit('hungry');
girl.emit('sad','meat');























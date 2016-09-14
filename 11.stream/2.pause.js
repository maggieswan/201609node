var fs=require('fs');
var rs=fs.createReadStream('./1.txt',{
    highWaterMark:5
} ) ;
rs.setEncoding('utf8');
//流是EventEmitter的子类 ， on 'data'：监控流的数据，这个时候node才会去硬盘读这个文件，读到后发射出来，调用这个回调函数

rs.on('data',function(data){
console.log(data);
    rs.pause();//暂停触发data事件,就是不再去读了 水龙头关上了  5秒后输出 后面的数据
})
setTimeout(function(){
rs.resume();//5秒钟后重新开始触发data事件，恢复执行
},5000)


//读完了，当读完文件的时候会触发end事件
rs.on('end',function(){
console.log('读完了');
});
//如果读取出错了，不能try catch 因为这里是异步的方法。所以还是监听事件
rs.on('error',function(err){
    console.log('出错了'+err);
});



















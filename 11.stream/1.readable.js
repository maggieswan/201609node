var fs=require('fs');
var rs=fs.createReadStream('./1.txt',{
    flags:'r',   //默认r（即read）  表示打开文件想干什么
   // encoding:'utf8'   //默认null (得到的数据是二进制类型的Buffer对象；如果指定了编码，得到的是字符串类型的)
    start:4,// 读取的字符的索引的位置
    end:6,// "包前包后"
    highWaterMark: 1//最高水位线 默认64k   一次读多少字节数发射出去
        /*
        * 文件640k
        * 1 先从文件中读取64k，然后发射rs.emit('data')事件，这样rs.on('data',...)就能接到了，然后on里的回调函数执行
        * 把前64课读出来
        * 2  再从文件中读取64k，然后发射rs.emit('data')事件
        * */
})  //有返回值 代码当前的可读流
rs.setEncoding('utf8');
//流是EventEmitter的子类 ， on 'data'：监控流的数据，这个时候node才会去硬盘读这个文件，读到后发射出来，调用这个回调函数
rs.on('data',function(data){
console.log(data);
})//这句话表示准备好了，这个时候才开始读
//读完了，当读完文件的时候会触发end事件
rs.on('end',function(){
console.log('读完了');
});
//如果读取出错了，不能try catch 因为这里是异步的方法。所以还是监听事件
rs.on('error',function(err){
    console.log('出错了'+err);
});



















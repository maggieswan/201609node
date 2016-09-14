var fs=require('fs');
var ws=fs.createWriteStream('./1.txt',{

    flags:'w', // 默认w 是清空并且写入  a（append 追加写入）
    encoding:null,//指定编码 默认是null
    start:2,// 是整数写入的位置  如果flags位设为‘a' 那这里的值就没用了 不起作用
    //如果是w  就会清空以前的 并从指定的start位置开始写
    highWaterMark:1  // 这个很有用 默认16k write()开始返回false的缓冲大小 var flag=ws.write('呦呦');
} ) ;
var i=0;
var max=10;
function write(){
    console.log('go  on  write');
    var flag= true;
    while(flag&&i<max){
        flag=ws.write(String(i++));
    }
}
write();
//当flag为false时候说明太快了 写不进去了，要停下来了，while那里循环就结束了
ws.on('drain',function(){
    console.log('drain');
    write();// 再回调里面接着写（接着喂）
});//排干 (儿子把嘴里的吃完到胃里去了),排干的时候会触发事件回调















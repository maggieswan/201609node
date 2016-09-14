var http=require('http');
//返回页面要使用fs模块
var fs=require('fs');
http.createServer(function(req,res){
if(req.url=='/'){ // 根目录
//通过管道方法 把它导入到写流里面去
    fs.createReadStream('./login.html').pipe(res);
}else if(req.url=='/login'){  //这里接受请求体，用户提交表单发过来请求体，就到这里了
    //请求流req是可读流， 监听里面的东西（数据）使用on ’data'方法
    //可读流两个事件 一个data  一个end,不停的接收直到接收完毕
    //那么如何累加用户发送过来的请求体呢？  用str
    var buffers=[];//改成buffer数组
    req.on('data',function(data){
        buffers.push(data);  //每次往数组里push一个元素
    });
   //到end的时候，str就是最完整的了
    req.on('end',function(data){
        //合并成一个大buffer
        var  result=Buffer.concat(buffers);//第一个参数是一个数组  第二个是buffer长度默认即数组长度
        res.end(result.toString());
    });
}else{
    res.end('404');
}
    }).listen(8080);

//客户端给服务器的不一定都是字符串，也可能是文件、图片。。。 所有var str=''; 这样不太合适
//让他每次都是二进制数据














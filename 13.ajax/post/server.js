
var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
    req.setEncoding('utf8'); //设置可读流编码
  if(req.url=='/'){
     fs.createReadStream('./post.html').pipe(res);
  }else if(req.url=='/ajax'){
//怎么获得请求体中的数据？请求是个可读流，即是问怎么获得可读流的数据？
　　　req.on('data',function(data){
       res.end(data);
       //注意这里我没有监听end  请求体很小 肯定够就这么写了。。。
   });　　 　
  }
}).listen(8020);

















